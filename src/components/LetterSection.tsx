import { useState } from 'react';
import { motion } from 'motion/react';

export function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] w-full max-w-md">
      <div 
        className="relative w-80 h-56 bg-rose-200 rounded-md shadow-2xl flex items-end justify-center"
        style={{ perspective: '1000px' }}
      >
        
        {/* Letter inside */}
        <motion.div
          className="absolute bottom-2 w-[90%] bg-[#fffdf8] p-4 md:p-6 rounded shadow-lg text-center font-serif text-rose-900 border border-rose-100 flex flex-col justify-center items-center"
          initial={{ y: 0, height: '90%', zIndex: 10 }}
          animate={{ 
            y: isOpen ? -60 : 0, 
            height: isOpen ? '115%' : '90%',
            zIndex: isOpen ? 30 : 10 
          }}
          transition={{ duration: 0.8, delay: isOpen ? 0.3 : 0 }}
        >
          <p className="text-lg md:text-xl leading-relaxed font-medium">
            Wszystkiego najlepszego z okazji dnia kobiet dla Pani Babci!
          </p>
          <p className="mt-3 text-base md:text-lg italic text-rose-700">
            Jest Pani super <span className="text-red-500 text-2xl not-italic">❤</span>
          </p>
        </motion.div>

        {/* Envelope Front side (Left, Right, Bottom flaps) */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-md">
          {/* Bottom flap */}
          <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[120px] border-b-rose-300 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent drop-shadow-sm"></div>
          {/* Left flap */}
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[160px] border-l-rose-400 border-t-[112px] border-t-transparent border-b-[112px] border-b-transparent drop-shadow-sm"></div>
          {/* Right flap */}
          <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[160px] border-r-rose-400 border-t-[112px] border-t-transparent border-b-[112px] border-b-transparent drop-shadow-sm"></div>
        </div>

        {/* Top Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full origin-top flex justify-center"
          initial={{ rotateX: 0, zIndex: 40 }}
          animate={{ 
            rotateX: isOpen ? 180 : 0,
            zIndex: isOpen ? 5 : 40 
          }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-0 h-0 border-t-[120px] border-t-rose-500 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent drop-shadow-md"></div>
          
          {/* Wax Seal */}
          <motion.div 
            className="absolute top-[90px] w-16 h-16 bg-red-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer border-2 border-red-900 hover:scale-110 transition-transform"
            onClick={() => setIsOpen(true)}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="w-12 h-12 rounded-full border border-red-500 flex items-center justify-center">
              <span className="text-red-300 text-2xl">❤</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {!isOpen && (
        <motion.p 
          className="mt-12 text-rose-500 font-medium font-serif italic"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Kliknij pieczątkę, aby otworzyć list
        </motion.p>
      )}
    </div>
  );
}
