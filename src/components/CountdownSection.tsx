import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CountdownSection() {
  const targetDate = new Date('2026-04-05T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] bg-white/40 rounded-3xl p-8 backdrop-blur-sm shadow-xl border border-white/60 w-full max-w-md">
      <h2 className="text-2xl font-serif text-rose-800 mb-8 text-center leading-relaxed">
        Urodziny Babci <br/> 
        <span className="text-rose-600 font-bold text-4xl mt-2 block">05.04.2026</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <TimeUnit value={timeLeft.days} label="Dni" />
        <TimeUnit value={timeLeft.hours} label="Godzin" />
        <TimeUnit value={timeLeft.minutes} label="Minut" />
        <TimeUnit value={timeLeft.seconds} label="Sekund" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <motion.div 
      className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-md border border-rose-50"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="text-3xl md:text-4xl font-bold text-rose-600 tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs md:text-sm font-medium text-rose-400 uppercase tracking-wider mt-2">
        {label}
      </span>
    </motion.div>
  );
}
