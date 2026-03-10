import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Code2, Server, Globe, Check, Rocket, Flame } from 'lucide-react';
import { useTeamMembers } from '../../hooks/useApi';
import HeroTrustStrip from '../../components/sections/HeroTrustStrip';
import ServiceHumanSection from '../../components/sections/ServiceHumanSection';
import Testimonials from '../../components/sections/Testimonials';
import CallToAction from '../../components/sections/CallToAction';

const features = [
	{
		title: 'Cross-Platform Mastery',
		description:
			'Single codebase deployments across iOS, Android, and Web using Flutter and React Native. Optimized for native-like performance.',
		icon: MonitorSmartphone,
	},
	{
		title: 'Modern Frontend Architecture',
		description:
			'Blazing fast, SEO-optimized web applications built on React, Next.js, and Vite with cutting-edge state management.',
		icon: Globe,
	},
	{
		title: 'Robust Backend Systems',
		description:
			'Scalable cloud infrastructure, microservices, and serverless architectures using Node.js, Python, and Go.',
		icon: Server,
	},
	{
		title: 'Clean Code & DevOps',
		description:
			'Rigorous CI/CD pipelines, automated testing, and comprehensive code reviews to ensure enterprise-grade reliability.',
		icon: Code2,
	},
];

const techStack = [
	'React',
	'Next.js',
	'Flutter',
	'TailwindCSS',
	'Node.js',
	'PostgreSQL',
	'AWS',
	'Docker',
	'GraphQL',
	'Framer Motion',
];

function InteractiveCodeEditor() {
	const [deployed, setDeployed] = useState(false);
	const [typedLines, setTypedLines] = useState(0);
	const [activeTab, setActiveTab] = useState(0);
	const [showConfetti, setShowConfetti] = useState(false);

	const tabs = [
		{ name: 'boraq.config.ts', color: 'text-blue-400' },
		{ name: 'App.tsx', color: 'text-green-400' },
		{ name: 'api.ts', color: 'text-yellow-400' },
	];

	const codeByTab = [
		[
			{ color: 'text-gray-500', text: '// boraq.config.ts' },
			{ color: 'text-purple-400', text: 'export default' },
			{ color: 'text-blue-400', text: '  defineConfig({' },
			{ color: 'text-yellow-300', text: '    framework: ' },
			{ color: 'text-green-400', text: '"react",' },
			{ color: 'text-yellow-300', text: '    ssr: ' },
			{ color: 'text-orange-400', text: 'true,' },
			{ color: 'text-pink-400', text: '    performance: ' },
			{ color: 'text-green-400', text: '"blazing",' },
			{ color: 'text-blue-400', text: '  })' },
		],
		[
			{ color: 'text-gray-500', text: '// App.tsx' },
			{ color: 'text-purple-400', text: 'import { ' },
			{ color: 'text-cyan-400', text: 'motion ' },
			{ color: 'text-purple-400', text: '} from "framer"' },
			{ color: 'text-blue-400', text: '' },
			{ color: 'text-pink-400', text: 'export default () => (' },
			{ color: 'text-cyan-400', text: '  <motion.div' },
			{ color: 'text-yellow-300', text: '    animate={{ scale: 1 }}' },
			{ color: 'text-green-400', text: '    className="app" />' },
			{ color: 'text-pink-400', text: ')' },
		],
		[
			{ color: 'text-gray-500', text: '// api.ts' },
			{ color: 'text-purple-400', text: 'const handler = ' },
			{ color: 'text-cyan-400', text: 'async (req) => {' },
			{ color: 'text-yellow-300', text: '  const data = await' },
			{ color: 'text-green-400', text: '    db.query("users")' },
			{ color: 'text-blue-400', text: '' },
			{ color: 'text-pink-400', text: '  return Response' },
			{ color: 'text-orange-400', text: '    .json({ data,' },
			{ color: 'text-green-400', text: '      status: "ok"' },
			{ color: 'text-cyan-400', text: '    })' },
		],
	];

	const codeLines = codeByTab[activeTab];

	useEffect(() => {
		setTypedLines(0);
		let i = 0;
		const interval = setInterval(() => {
			i++;
			setTypedLines(i);
			if (i >= codeLines.length) clearInterval(interval);
		}, 300);
		return () => clearInterval(interval);
	}, [activeTab]);

	const handleDeploy = () => {
		if (deployed) return;
		setDeployed(true);
		setShowConfetti(true);
		setTimeout(() => setShowConfetti(false), 2000);
	};

	return (
		<div className="relative w-full aspect-square max-w-md mx-auto">
			<div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" />
			<div className="relative h-full w-full glass-panel-heavy rounded-[2.5rem] border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 overflow-hidden shadow-2xl flex flex-col">
				{/* Window chrome with tabs */}
				<div className="flex items-center gap-2 px-5 py-3 border-b border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
					<div className="w-3 h-3 rounded-full bg-red-400" />
					<div className="w-3 h-3 rounded-full bg-yellow-400" />
					<div className="w-3 h-3 rounded-full bg-green-400" />
					<div className="flex gap-1 ml-3">
						{tabs.map((tab, idx) => (
							<button
								key={idx}
								onClick={() => { setActiveTab(idx); setDeployed(false); }}
								className={`px-3 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${activeTab === idx
									? `${tab.color} bg-boraq-white/10 dark:bg-boraq-white/5`
									: 'text-boraq-gray-mid/50 hover:text-boraq-gray-mid'
									}`}
							>
								{tab.name}
							</button>
						))}
					</div>
				</div>

				{/* Code area with line numbers */}
				<div className="flex-1 p-4 font-mono text-xs md:text-sm leading-relaxed overflow-hidden">
					{codeLines.map((line, idx) => (
						<div
							key={`${activeTab}-${idx}`}
							className={`flex gap-3 transition-all duration-300 ease-out ${idx < typedLines ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
						>
							<span className="text-boraq-gray-silver/20 select-none w-4 text-right">{idx + 1}</span>
							<span className={line.color}>{line.text}</span>
							{idx === typedLines - 1 && <span className="animate-pulse text-boraq-teal-steel">▌</span>}
						</div>
					))}
				</div>

				{/* Deploy button with confetti */}
				<div className="px-5 pb-5 relative">
					{showConfetti && (
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
							{[...Array(10)].map((_, i) => (
								<motion.div
									key={i}
									initial={{ y: 0, x: 0, opacity: 1, scale: 1 }}
									animate={{
										y: -(80 + Math.random() * 60),
										x: (Math.random() - 0.5) * 200,
										opacity: 0,
										scale: 0,
										rotate: Math.random() * 360,
									}}
									transition={{ duration: 1 + Math.random(), ease: 'easeOut' }}
									className="absolute w-2 h-2 rounded-full"
									style={{
										backgroundColor: ['#60a5fa', '#f472b6', '#a78bfa', '#34d399', '#fbbf24', '#f87171'][i % 6],
									}}
								/>
							))}
						</div>
					)}
					<motion.button
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleDeploy}
						className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-500 ${deployed
							? 'bg-green-500/20 text-green-400 border border-green-500/30 shadow-[0_0_20px_rgba(74,222,128,0.2)]'
							: 'bg-boraq-teal-steel/20 text-boraq-teal-steel border border-boraq-teal-steel/30 hover:bg-boraq-teal-steel/30 cursor-pointer'
							}`}
					>
						{deployed ? (
							<span className="flex items-center justify-center gap-2">
								<Check className="w-4 h-4" /> Deployed to Production <Rocket className="w-4 h-4" />
							</span>
						) : (
							<span className="flex items-center justify-center gap-2">
								<Flame className="w-4 h-4" /> Click to Deploy
							</span>
						)}
					</motion.button>
				</div>
			</div>
		</div>
	);
}

export default function WebApp() {
	const { data: members } = useTeamMembers();
	const founder = (members || []).find(m => m.memberType === 'founder' || m.isFounder);

	return (
		<div className="w-full pb-32">
			{/* Header Section */}
			<section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="flex flex-col lg:flex-row gap-12 items-center"
				>
					<div className="flex-1">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#82A9B4]/20 text-boraq-teal-steel text-sm font-bold mb-6">
							<span className="w-2 h-2 rounded-full bg-boraq-teal-steel animate-pulse" />
							Core Expertise
						</div>
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-boraq-black dark:text-boraq-white">
							Digital <br /> Experiences. <br />{' '}
							<span className="text-boraq-teal-steel">Elevated.</span>
						</h1>
						<p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl font-light leading-relaxed">
							We architect and build premium web and mobile applications that
							dominate markets. From high-conversion SaaS platforms to seamless
							cross-platform mobile apps.
						</p>

						{/* Human trust strip */}
						{founder && (
						<HeroTrustStrip
							lead={{
								name: founder.name,
								role: founder.role,
								avatar: founder.image,
							}}
						/>
						)}
					</div>
					<div className="flex-1 w-full">
						{/* Interactive Code Editor Playground */}
						<InteractiveCodeEditor />
					</div>
				</motion.div>
			</section>

			{/* Features Grid */}
			<section className="max-w-7xl mx-auto px-6 pb-24">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="glass-panel p-8 md:p-12 rounded-3xl group hover:border-boraq-teal-steel/30 transition-colors duration-300"
						>
							<div className="w-14 h-14 rounded-2xl bg-boraq-teal-deep/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
								<feature.icon className="w-7 h-7 text-boraq-teal-steel" />
							</div>
							<h3 className="text-2xl font-bold mb-4 text-boraq-black dark:text-boraq-white">
								{feature.title}
							</h3>
							<p className="text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed font-light">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* Tech Stack Marquee (Static Alternative) */}
			<section className="max-w-7xl mx-auto px-6 mb-24">
				<div className="glass-panel rounded-3xl p-12 text-center overflow-hidden relative">
					<div className="absolute inset-0 bg-gradient-to-r from-boraq-teal-deep/5 via-transparent to-boraq-teal-deep/5" />
					<h3 className="text-xl font-bold mb-8 relative z-10 text-boraq-black dark:text-boraq-white">
						Technologies We Command
					</h3>
					<div className="flex flex-wrap justify-center gap-4 relative z-10">
						{techStack.map((tech) => (
							<span
								key={tech}
								className="px-6 py-3 rounded-full glass-panel-heavy border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 text-sm font-bold hover:text-boraq-teal-steel transition-colors"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* NEW: Human trust section */}
			{founder && (
			<ServiceHumanSection
				teamLead={{
					name: founder.name,
					role: founder.role,
					avatar: founder.image,
					bio: founder.bio,
					funFact: founder.funFact,
				}}
				testimonial={{
					quote:
						'Boraq delivered our eCommerce platform on time with a scalable architecture. Their dedicated manager kept us in the loop everyday.',
					author: 'Arifur Rahman',
					role: 'eCommerce Founder',
					avatar:
						'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
					result: 'Scalable marketplace delivered',
				}}
				stats={[
					{ label: 'Apps Shipped', value: '8+' },
					{ label: 'User Satisfaction', value: '4.9/5' },
					{ label: 'Service Divisions', value: '6' },
				]}
				processNote="Every project kicks off with a 1-on-1 architecture session with Rubayet — no salespeople, no middlemen."
			/>
			)}

			<Testimonials />
			<CallToAction />
		</div>
	);
}
