import { motion } from 'motion/react';
import { Heart, Flower, Sparkles, Star } from 'lucide-react';

export function DecorationsSection() {
  const items = Array.from({ length: 18 });

  return (
    <div className="flex-1 relative min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative w-72 h-72"
        >
          {items.map((_, i) => {
            const angle = (i / items.length) * Math.PI * 2;
            const radius = 120 + Math.random() * 50;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            const type = i % 4;
            
            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ x, y, opacity: 1, scale: 1 }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 1.5,
                  type: "spring"
                }}
                style={{
                  marginLeft: -16,
                  marginTop: -16,
                }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                >
                  {type === 0 && <Heart className="text-rose-400 w-8 h-8 drop-shadow-md" fill="currentColor" />}
                  {type === 1 && <Flower className="text-pink-400 w-10 h-10 drop-shadow-md" />}
                  {type === 2 && <Sparkles className="text-yellow-400 w-7 h-7 drop-shadow-md" fill="currentColor" />}
                  {type === 3 && <Star className="text-rose-300 w-6 h-6 drop-shadow-md" fill="currentColor" />}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Center piece */}
      <motion.div 
        className="z-10 bg-white/80 backdrop-blur-md p-8 rounded-full shadow-2xl border-4 border-rose-100 flex flex-col items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Flower className="text-rose-500 w-20 h-20 mb-2" />
        <span className="font-serif text-rose-800 font-bold text-lg italic">Dla Babci</span>
      </motion.div>
    </div>
  );
}
