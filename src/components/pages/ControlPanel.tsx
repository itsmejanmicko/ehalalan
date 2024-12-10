import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import human from '../../../public/image/human.jpg';
import elec from '../../../public/image/elec.jpg';
import logo from '../../../public/image/lgoo-modified.png';
import HowtoVote from '../section/HowtoVote';
import RightSection from '../section/RigthSection';
import LeftSection from '../section/LeftSection';

export default function ControlPanel() {

  const scrollToCandidates = ()=>{
    const candidatesSection = document.getElementById("candidatesSection");
    candidatesSection?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="min-h-screen bg-[#1a0b2e]  relative overflow-scroll scroll-smooth snap-y snap-mandatory">
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full" />
      <div className="absolute bottom-20 left-40 w-8 h-8 bg-yellow-500 rounded-full opacity-50" />
      <div className="absolute top-40 right-96 w-16 h-16 bg-purple-500 rounded-full blur-xl opacity-20" />
      
      {/* Main content */}
      <div className="h-screen container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left content */}
        <motion.div 
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition= {{duration: 0.8, ease: 'easeInOut'}}

        className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight z-50">
            Vote Smart. <br />Better Tomorrow.
          </h1>
          <p className="text-xl text-gray-400 max-w-lg">
            Take control of your future with every vote. Our platform makes voting easier, faster, and more secure, ensuring that your voice directly influences the decisions that matter. Together, we create a better tomorrow—one vote at a time.
          </p>
          <button 
          onClick={scrollToCandidates}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity">
            View Candidates
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>
        
        {/* Right content */}
        <motion.div 
        initial={{x: '100%', opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition= {{duration: 0.8, ease: 'easeInOut'}}
        className="lg:w-1/2 relative">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-800 rounded-full blur-3xl opacity-30" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="relative w-24 h-24">
              <img
                src={logo}
                alt="Logo"
                width={96}
                height={96}
                className="animate-spin-slow"
              />
              <ArrowUpRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 transform -rotate-6 z-40">
              <img
                src={human}
                alt="Human"
                className="rounded-3xl shadow-2xl h-60 sm:h-80"
              />
            </div>
            <div className="transform rotate-12 translate-x-20 z-50">
              <img
                src={elec}
                className="rounded-3xl shadow-2xl h-60 sm:h-96"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <HowtoVote />
   {/*Candidates section*/}
      <h1 className="text-4xl md:text-5xl mt-4 font-bold text-white tracking-tight leading-tight text-center mb-3 z-50">All Partylist</h1>
      <div id='candidatesSection' className='sm:grid sm:grid-cols-2 p-4 px-4 space-x-2 snap-start'>
        <div>
    <RightSection />
        </div>
        <div>
    <LeftSection />
        </div>
      </div>
    </div>
  );
}
