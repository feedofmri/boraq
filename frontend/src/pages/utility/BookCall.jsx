import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Video, ArrowRight, ChevronLeft, ChevronRight, Check, User, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';
import { postApi } from '../../api/client';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM',
];

// Simulate some slots being unavailable
function getAvailableSlots(date) {
  if (!date) return [];
  const day = date.getDay();
  if (day === 0 || day === 6) return []; // weekends unavailable
  const seed = date.getDate() + date.getMonth();
  return TIME_SLOTS.filter((_, i) => (i + seed) % 3 !== 0); // pseudo-random availability
}

function CalendarWidget({ selectedDate, onSelectDate, currentMonth, onChangeMonth }) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells = [];

  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: prevMonthDays - i, type: 'prev' });
  }
  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, type: 'current' });
  }
  // Next month leading days
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, type: 'next' });
  }

  const isSelected = (d) => {
    if (!selectedDate || d.type !== 'current') return false;
    return selectedDate.getDate() === d.day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
  };

  const isPast = (d) => {
    if (d.type !== 'current') return true;
    const date = new Date(year, month, d.day);
    return date < today;
  };

  const isWeekend = (d) => {
    if (d.type !== 'current') return false;
    const date = new Date(year, month, d.day);
    return date.getDay() === 0 || date.getDay() === 6;
  };

  const isToday = (d) => {
    if (d.type !== 'current') return false;
    return d.day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  return (
    <div>
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={() => onChangeMonth(-1)}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-boraq-black/5 dark:hover:bg-boraq-white/5 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver" />
        </button>
        <h3 className="text-lg font-bold text-boraq-black dark:text-boraq-white">
          {MONTHS[month]} {year}
        </h3>
        <button
          onClick={() => onChangeMonth(1)}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-boraq-black/5 dark:hover:bg-boraq-white/5 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] font-bold tracking-widest uppercase text-boraq-gray-mid dark:text-boraq-gray-silver py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((cell, i) => {
          const past = isPast(cell);
          const weekend = isWeekend(cell);
          const disabled = past || weekend || cell.type !== 'current';
          const selected = isSelected(cell);
          const todayCell = isToday(cell);

          return (
            <button
              key={i}
              disabled={disabled}
              onClick={() => {
                if (!disabled) onSelectDate(new Date(year, month, cell.day));
              }}
              className={`
                relative w-full aspect-square rounded-xl text-sm font-medium transition-all duration-200
                flex items-center justify-center
                ${cell.type !== 'current' ? 'text-boraq-gray-silver/20 dark:text-boraq-teal-deep/20' : ''}
                ${disabled && cell.type === 'current' ? 'text-boraq-gray-silver/40 dark:text-boraq-gray-silver/20 cursor-not-allowed' : ''}
                ${!disabled && !selected ? 'text-boraq-black dark:text-boraq-white hover:bg-boraq-teal-steel/10 cursor-pointer' : ''}
                ${selected ? 'bg-boraq-teal-steel text-white font-bold shadow-lg shadow-boraq-teal-steel/30' : ''}
                ${todayCell && !selected ? 'ring-2 ring-boraq-teal-steel/40 font-bold' : ''}
              `}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BookCall() {
  const [step, setStep] = useState(1); // 1=date, 2=time, 3=details, 4=confirmed
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const availableSlots = useMemo(() => getAvailableSlots(selectedDate), [selectedDate]);

  const handleChangeMonth = (dir) => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + dir, 1));
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setStep(2);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitting(true);
    setSubmitError('');
    try {
      await postApi('/book-call', {
        name: form.name,
        email: form.email,
        preferred_date: selectedDate.toISOString().split('T')[0],
        preferred_time: selectedTime,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        message: form.notes || null,
      });
      setStep(4);
    } catch (err) {
      setSubmitError(err?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const formattedDate = selectedDate
    ? `${DAYS[selectedDate.getDay()]}, ${MONTHS[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
    : '';

  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:max-w-xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-boraq-black dark:text-boraq-white">
              Let's build something <span className="text-boraq-teal-steel italic">extraordinary.</span>
            </h1>
            <p className="text-lg text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed mb-12">
              Book a 30-minute discovery call with our engineering leadership to discuss your technical challenges, architectural needs, and how Boraq can accelerate your roadmap.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${step >= 1 ? 'bg-boraq-teal-steel/20' : 'bg-boraq-black/5 dark:bg-boraq-white/5'}`}>
                  <Calendar className={`w-5 h-5 transition-colors ${step >= 1 ? 'text-boraq-teal-steel' : 'text-boraq-gray-mid'}`} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 text-boraq-black dark:text-boraq-white">Pick a Date</h3>
                  <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm font-light">
                    {selectedDate ? formattedDate : 'Choose a time that works best for your team\'s schedule.'}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${step >= 2 ? 'bg-boraq-teal-steel/20' : 'bg-boraq-black/5 dark:bg-boraq-white/5'}`}>
                  <Clock className={`w-5 h-5 transition-colors ${step >= 2 ? 'text-boraq-teal-steel' : 'text-boraq-gray-mid'}`} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 text-boraq-black dark:text-boraq-white">Select a Time</h3>
                  <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm font-light">
                    {selectedTime || '30-minute slots available on weekdays.'}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${step >= 3 ? 'bg-boraq-teal-steel/20' : 'bg-boraq-black/5 dark:bg-boraq-white/5'}`}>
                  <Video className={`w-5 h-5 transition-colors ${step >= 3 ? 'text-boraq-teal-steel' : 'text-boraq-gray-mid'}`} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 text-boraq-black dark:text-boraq-white">Google Meet</h3>
                  <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm font-light">A secure video link will be sent directly to your inbox upon booking.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="glass-panel-heavy p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden min-h-[600px] flex flex-col">
              {/* Decorative Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-boraq-teal-steel/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">

                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        step > s ? 'bg-boraq-teal-steel text-white' :
                        step === s ? 'bg-boraq-teal-steel/20 text-boraq-teal-steel border-2 border-boraq-teal-steel' :
                        'bg-boraq-black/5 dark:bg-boraq-white/5 text-boraq-gray-mid'
                      }`}>
                        {step > s ? <Check className="w-3.5 h-3.5" /> : s}
                      </div>
                      {s < 3 && <div className={`w-8 h-[2px] rounded-full transition-colors duration-300 ${step > s ? 'bg-boraq-teal-steel' : 'bg-boraq-gray-silver/20 dark:bg-boraq-teal-deep/20'}`} />}
                    </div>
                  ))}
                  <span className="ml-auto text-[10px] font-bold tracking-widest uppercase text-boraq-gray-mid dark:text-boraq-gray-silver">
                    {step === 1 ? 'Select Date' : step === 2 ? 'Select Time' : step === 3 ? 'Your Details' : 'Confirmed'}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {/* STEP 1: Calendar */}
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex-1">
                      <h2 className="text-2xl font-bold mb-1 text-boraq-black dark:text-boraq-white">Choose a Date</h2>
                      <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm font-light mb-6">Weekdays only. Weekends are unavailable.</p>
                      <CalendarWidget
                        selectedDate={selectedDate}
                        onSelectDate={handleSelectDate}
                        currentMonth={currentMonth}
                        onChangeMonth={handleChangeMonth}
                      />
                    </motion.div>
                  )}

                  {/* STEP 2: Time Slots */}
                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-1">
                        <button onClick={() => setStep(1)} className="text-boraq-teal-steel hover:underline text-sm font-bold">
                          <ChevronLeft className="w-4 h-4 inline" /> Back
                        </button>
                      </div>
                      <h2 className="text-2xl font-bold mb-1 text-boraq-black dark:text-boraq-white">Pick a Time</h2>
                      <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm font-light mb-6">
                        {formattedDate} &middot; 30 min &middot; Google Meet
                      </p>

                      <div className="grid grid-cols-3 gap-2 flex-1 content-start">
                        {availableSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => handleSelectTime(slot)}
                            className={`py-3 rounded-xl text-sm font-bold transition-all duration-200 border ${
                              selectedTime === slot
                                ? 'bg-boraq-teal-steel text-white border-boraq-teal-steel shadow-lg shadow-boraq-teal-steel/20'
                                : 'bg-boraq-black/5 dark:bg-boraq-white/5 border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 text-boraq-black dark:text-boraq-white hover:border-boraq-teal-steel/50 hover:bg-boraq-teal-steel/10 cursor-pointer'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      {availableSlots.length === 0 && (
                        <div className="flex-1 flex items-center justify-center text-center">
                          <p className="text-boraq-gray-mid dark:text-boraq-gray-silver">No available slots on this date. Please pick another day.</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* STEP 3: Details Form */}
                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-1">
                        <button onClick={() => setStep(2)} className="text-boraq-teal-steel hover:underline text-sm font-bold">
                          <ChevronLeft className="w-4 h-4 inline" /> Back
                        </button>
                      </div>
                      <h2 className="text-2xl font-bold mb-1 text-boraq-black dark:text-boraq-white">Your Details</h2>
                      <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm font-light mb-6">
                        {formattedDate} &middot; {selectedTime} &middot; 30 min
                      </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver mb-1.5 block">Full Name *</label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-boraq-gray-mid dark:text-boraq-gray-silver" />
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="John Doe"
                              className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-boraq-teal-steel/50 focus:ring-1 focus:ring-boraq-teal-steel/50 transition-all text-sm text-boraq-black dark:text-boraq-white placeholder:text-boraq-gray-mid/40"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver mb-1.5 block">Email *</label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-boraq-gray-mid dark:text-boraq-gray-silver" />
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              placeholder="john@company.com"
                              className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-boraq-teal-steel/50 focus:ring-1 focus:ring-boraq-teal-steel/50 transition-all text-sm text-boraq-black dark:text-boraq-white placeholder:text-boraq-gray-mid/40"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver mb-1.5 block">Notes (optional)</label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-boraq-gray-mid dark:text-boraq-gray-silver" />
                            <textarea
                              rows={3}
                              value={form.notes}
                              onChange={(e) => setForm({ ...form, notes: e.target.value })}
                              placeholder="Tell us about your project or questions..."
                              className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-boraq-teal-steel/50 focus:ring-1 focus:ring-boraq-teal-steel/50 transition-all text-sm text-boraq-black dark:text-boraq-white placeholder:text-boraq-gray-mid/40 resize-none"
                            />
                          </div>
                        </div>

                        {submitError && (
                          <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {submitError}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={submitting}
                          className="mt-auto w-full group relative overflow-hidden rounded-full bg-boraq-black dark:bg-boraq-white text-boraq-white dark:text-boraq-black py-4 px-8 flex items-center justify-center gap-2 font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                        >
                          <div className="absolute inset-0 bg-boraq-teal-steel transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
                          <span className="relative z-10 group-hover:text-boraq-black transition-colors duration-300">
                            {submitting ? 'Booking...' : 'Confirm Booking'}
                          </span>
                          {!submitting && <ArrowRight className="w-5 h-5 relative z-10 group-hover:text-boraq-black transition-colors duration-300" />}
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* STEP 4: Confirmation */}
                  {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex-1 flex flex-col items-center justify-center text-center gap-6">
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="w-10 h-10 text-green-500" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-2 text-boraq-black dark:text-boraq-white">You're Booked!</h2>
                        <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed max-w-sm">
                          A calendar invite and Google Meet link has been sent to <span className="font-bold text-boraq-black dark:text-boraq-white">{form.email}</span>.
                        </p>
                      </div>
                      <div className="glass-panel rounded-2xl p-6 w-full max-w-sm text-left space-y-3 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
                        <div className="flex justify-between text-sm">
                          <span className="text-boraq-gray-mid dark:text-boraq-gray-silver">Date</span>
                          <span className="font-bold text-boraq-black dark:text-boraq-white">{formattedDate}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-boraq-gray-mid dark:text-boraq-gray-silver">Time</span>
                          <span className="font-bold text-boraq-black dark:text-boraq-white">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-boraq-gray-mid dark:text-boraq-gray-silver">Duration</span>
                          <span className="font-bold text-boraq-black dark:text-boraq-white">30 min</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-boraq-gray-mid dark:text-boraq-gray-silver">Platform</span>
                          <span className="font-bold text-boraq-black dark:text-boraq-white">Google Meet</span>
                        </div>
                      </div>
                      <button
                        onClick={() => { setStep(1); setSelectedDate(null); setSelectedTime(null); setForm({ name: '', email: '', notes: '' }); }}
                        className="text-sm text-boraq-teal-steel font-bold hover:underline mt-2"
                      >
                        Book another call
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </motion.div>

        </div>
      </section>
      <CallToAction />
    </div>
  );
}
