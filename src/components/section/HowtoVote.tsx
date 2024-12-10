import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SquareMousePointer, Eye, SendHorizontal, Download } from 'lucide-react';

export default function HowtoVote() {
  const voteCard = [
    { id: 1, title: 'Select Candidates', description: 'Make sure you select candidates that are required!', icon: <SquareMousePointer className="w-8 h-8 text-cyan-400" /> },
    { id: 2, title: 'Review your candidates', description: 'Review all the vote you selected and changes if needed.', icon: <Eye className="w-8 h-8 text-cyan-400" /> },
    { id: 3, title: 'Submit your vote', description: 'If your are sure with your vote click submit', icon: <SendHorizontal className="w-8 h-8 text-purple-400" /> },
    { id: 4, title: 'Download your vote', description: 'Download your vote to ensure all your selected candidates are accurate.', icon: <Download className="w-8 h-8 text-purple-400" /> },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,
  });
  return (
    <div className="min-h-screen bg-[#0D0B21]/90 text-white py-16 px-4 relative overflow-hidden snap-start">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full blur-sm" />
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-400 rounded-full blur-sm" />
      <div className="absolute top-1/2 left-10 w-8 h-8 text-purple-400 opacity-20">×</div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <motion.h1
         ref={ref}
         initial= {inView ? {opacity: 0, y: 100} : {}}
            animate= {{opacity: 1, y: 0}}
            transition= {{duration: 0.8, ease: 'easeInOut'}}
         className="text-5xl md:text-6xl font-bold text-center mb-20">
          How to cast your vote
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {/* Iterate over the voteCard array */}
          {voteCard.map((card, index) => {
           
            return (
              <motion.div
                ref={ref} 
                key={card.id}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}} 
                transition={{
                  duration: 0.8,
                  delay: index * 0.2, 
                  ease: 'easeInOut',
                }}
                className="bg-[#1A1830] rounded-2xl p-8 hover:bg-[#1E1A38] transition-colors"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-cyan-400/10 rounded-xl flex items-center justify-center">
                    {card.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                    <p className="text-gray-400">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
