import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, RefreshCw, Zap, ShieldAlert, Cpu, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

// Game Constants
const GRAVITY = 0.8;
const JUMP_FORCE = -15;
const GROUND_Y = 280; // Adjusted upwards to ensure it's "in the box"
const PLAYER_X = 100;
const OBSTACLE_SPEED_BASE = 10;

export default function NotFound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Game State Refs (to avoid re-renders on every frame)
  const playerY = useRef(GROUND_Y);
  const playerVelocity = useRef(0);
  const obstacles = useRef([]);
  const scoreRef = useRef(0);
  const frameId = useRef();
  const lastTime = useRef(0);
  const nextSpawn = useRef(0);

  // React State for View
  const [viewState, setViewState] = useState({
    playerY: GROUND_Y,
    obstacles: [],
    score: 0
  });

  const triggerJump = useCallback(() => {
    if (isPlaying && !isGameOver && playerY.current >= GROUND_Y) {
      playerVelocity.current = JUMP_FORCE;
    } else if (!isPlaying || isGameOver) {
      resetGame();
    }
  }, [isPlaying, isGameOver]);

  const resetGame = () => {
    setIsPlaying(true);
    setIsGameOver(false);
    setScore(0);
    scoreRef.current = 0;
    playerY.current = GROUND_Y;
    playerVelocity.current = 0;
    obstacles.current = [];
    nextSpawn.current = 0;
    lastTime.current = performance.now();
  };

  const gameLoop = useCallback((time) => {
    if (isGameOver) return;

    const deltaTime = time - lastTime.current;
    lastTime.current = time;

    // 1. Update Player
    playerVelocity.current += GRAVITY;
    playerY.current += playerVelocity.current;

    if (playerY.current > GROUND_Y) {
      playerY.current = GROUND_Y;
      playerVelocity.current = 0;
    }

    // 2. Spawn Obstacles
    if (time > nextSpawn.current) {
      const type = Math.random() > 0.5 ? 'critical' : 'warning';
      obstacles.current.push({
        id: Date.now(),
        x: 1000, // Fixed start position relative to container
        type: type,
        width: 30,
        height: type === 'critical' ? 50 : 35
      });
      nextSpawn.current = time + 1400 + Math.random() * 800;
    }

    // 3. Update Obstacles
    obstacles.current = obstacles.current.map(obs => ({
      ...obs,
      x: obs.x - OBSTACLE_SPEED_BASE
    })).filter(obs => obs.x > -100);

    // 4. Collision Detection (more lenient)
    const playerBox = {
      left: PLAYER_X + 10,
      right: PLAYER_X + 30,
      top: playerY.current + 10,
      bottom: playerY.current + 40
    };

    const collision = obstacles.current.some(obs => {
      const obsBox = {
        left: obs.x + 5,
        right: obs.x + obs.width - 5,
        top: GROUND_Y + 48 - obs.height,
        bottom: GROUND_Y + 48
      };

      return !(
        playerBox.right < obsBox.left ||
        playerBox.left > obsBox.right ||
        playerBox.bottom < obsBox.top ||
        playerBox.top > obsBox.bottom
      );
    });

    if (collision) {
      setIsGameOver(true);
      if (scoreRef.current > highScore) setHighScore(scoreRef.current);
      return;
    }

    // 5. Update State (using Ref for score to avoid loop re-creation)
    scoreRef.current += 1;
    setScore(scoreRef.current);
    setViewState({
      playerY: playerY.current,
      obstacles: [...obstacles.current],
      score: scoreRef.current
    });

    frameId.current = requestAnimationFrame(gameLoop);
  }, [isGameOver, highScore]); // Removed score dependency

  useEffect(() => {
    if (isPlaying && !isGameOver) {
      frameId.current = requestAnimationFrame(gameLoop);
    }
    return () => cancelAnimationFrame(frameId.current);
  }, [isPlaying, isGameOver, gameLoop]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        triggerJump();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [triggerJump]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-boraq-white dark:bg-boraq-black transition-colors duration-500 font-sans p-6 overflow-hidden">
      <div className="max-w-4xl w-full text-center relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-heavy border border-boraq-teal-steel/20 text-boraq-teal-steel text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
            <Terminal className="w-4 h-4" /> System Disconnected
          </div>
          <h1 className="text-8xl md:text-[12rem] font-bold text-boraq-black dark:text-boraq-white opacity-5 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] z-0">
            404
          </h1>
          <h2 className="text-4xl md:text-6xl font-black text-boraq-black dark:text-boraq-white mb-6 tracking-tight relative z-10">
            Signal <span className="text-boraq-teal-steel italic font-light">Lost.</span>
          </h2>
          <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-lg font-light max-w-lg mx-auto mb-10">
            You've drifted into unmapped sectors. Harmonize the data stream to return.
          </p>
        </motion.div>

        {/* Game Stage */}
        <div
          onClick={triggerJump}
          className="relative w-full h-[400px] glass-panel rounded-[3rem] border border-boraq-black/5 dark:border-white/5 overflow-hidden group shadow-2xl cursor-pointer"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(130,169,180,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(130,169,180,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

          {/* HUD */}
          <div className="absolute top-8 inset-x-8 flex justify-between z-20">
            <div className="text-left">
              <div className="text-[10px] font-bold text-boraq-teal-steel uppercase tracking-widest mb-1 opacity-50">Current Path</div>
              <div className="text-3xl font-bold text-boraq-black dark:text-boraq-white tracking-tighter tabular-nums">
                {(score / 10).toFixed(0)}m
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold text-boraq-gray-mid uppercase tracking-widest mb-1 opacity-50">Longest Link</div>
              <div className="text-3xl font-bold text-boraq-teal-steel tracking-tighter tabular-nums">
                {(highScore / 10).toFixed(0)}m
              </div>
            </div>
          </div>

          {/* Game Entities Container */}
          <div className="absolute inset-0">
            {/* Floor Line */}
            <div className="absolute top-[328px] left-0 right-0 h-px bg-boraq-teal-steel/20" />

            {/* Player */}
            <motion.div
              style={{ top: viewState.playerY, left: PLAYER_X }}
              className="absolute w-12 h-12 z-20"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-boraq-teal-steel/30 blur-xl rounded-full" />
                <div className="relative w-12 h-12 rounded-2xl glass-panel-heavy border border-boraq-teal-steel/40 flex items-center justify-center text-boraq-teal-steel shadow-lg">
                  <Zap className={`w-6 h-6 ${isPlaying ? 'animate-pulse' : ''}`} />
                </div>
              </div>
            </motion.div>

            {/* Obstacles */}
            <AnimatePresence>
              {viewState.obstacles.map((obs) => (
                <div
                  key={obs.id}
                  className="absolute z-10"
                  style={{
                    left: obs.x,
                    top: 328 - obs.height,
                    width: obs.width,
                    height: obs.height
                  }}
                >
                  <div className={`w-full h-full rounded-t-xl border-l-[4px] shadow-lg ${obs.type === 'critical'
                    ? 'bg-boraq-teal-deep/20 border-boraq-teal-steel shadow-boraq-teal-steel/10'
                    : 'bg-boraq-black/5 dark:bg-white/5 border-boraq-gray-silver shadow-black/5'
                    }`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <ShieldAlert className={`w-4 h-4 ${obs.type === 'critical' ? 'text-boraq-teal-steel' : 'text-boraq-gray-mid'}`} />
                    </div>
                  </div>
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Overlays */}
          {!isPlaying && !isGameOver && (
            <div className="absolute inset-0 bg-boraq-white/10 dark:bg-boraq-black/40 backdrop-blur-md flex items-center justify-center z-30">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <Cpu className="w-16 h-16 text-boraq-teal-steel mx-auto mb-6 animate-pulse" />
                <h3 className="text-xl font-bold text-boraq-black dark:text-boraq-white mb-2 uppercase tracking-[0.2em]">Ready for Sync</h3>
                <p className="text-[10px] text-boraq-gray-mid font-bold uppercase tracking-[0.5em]">Press Space or Click to Start</p>
              </motion.div>
            </div>
          )}

          {isGameOver && (
            <div className="absolute inset-0 bg-boraq-black/80 backdrop-blur-xl flex items-center justify-center z-40">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center"
              >
                <ShieldAlert className="w-20 h-20 text-boraq-teal-steel mx-auto mb-6" />
                <h3 className="text-4xl font-black text-white mb-2 tracking-tight uppercase">Data Corrupted</h3>
                <p className="text-boraq-teal-steel text-sm font-bold tracking-[0.3em] uppercase mb-12">Calibration Failed</p>
                <button
                  onClick={(e) => { e.stopPropagation(); resetGame(); }}
                  className="px-12 py-5 rounded-full bg-boraq-teal-steel text-boraq-black font-bold text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center gap-3 mx-auto shadow-xl shadow-boraq-teal-steel/20"
                >
                  <RefreshCw className="w-4 h-4" /> Hard Reset
                </button>
              </motion.div>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Link
            to="/"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-boraq-black dark:bg-boraq-white text-boraq-white dark:text-boraq-black font-bold text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            <Home className="w-4 h-4" /> Final Return
          </Link>
          <Link
            to="/portfolio"
            className="w-full sm:w-auto px-10 py-5 rounded-full glass-panel-heavy border border-boraq-black/10 dark:border-white/10 text-boraq-black dark:text-boraq-white font-bold text-xs uppercase tracking-[0.2em] hover:border-boraq-teal-steel transition-all flex items-center justify-center gap-3"
          >
            Explore Portfolio
          </Link>
        </div>

      </div>
    </div>
  );
}
