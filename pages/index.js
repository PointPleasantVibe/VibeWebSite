import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '../public/WebSiteLogo.png';

export default function Home() {
  const [page, setPage] = useState('home');

  const colors = {
    gold: '#D29A0A',
    red: '#FF0000',
    teal: '#3B6C74',
    white: '#FFFFFF',
  };

  const NavButton = ({ label, target }) => (
    <button
      className='mx-2 rounded-2xl shadow-md px-4 py-2'
      style={{ backgroundColor: colors.gold, color: colors.red }}
      onClick={() => setPage(target)}
    >
      {label}
    </button>
  );

  return (
    <div className='min-h-screen w-full' style={{ backgroundColor: 'black' }}>
      <header className='flex items-center justify-between p-6'>
        <Image src={Logo} alt='Logo' width={80} height={80} />
        <nav>
          <NavButton label='Home' target='home' />
          <NavButton label='Instagram' target='instagram' />
          <NavButton label='Shop' target='shop' />
          <NavButton label='About' target='about' />
          <NavButton label='Contact' target='contact' />
        </nav>
      </header>

      <main className='p-6 text-center text-white'>
        {page === 'home' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className='text-4xl font-bold mb-4' style={{ color: colors.gold }}>
              Welcome to Point Pleasant Vibe
            </h1>
            <p className='text-lg mb-6'>
              Bringing the beach, the energy, and the vibe to your screen.
            </p>
          </motion.div>
        )}

        {page === 'instagram' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className='text-3xl font-bold mb-4' style={{ color: colors.teal }}>
              Instagram Feed
            </h2>
            <p className='text-white mb-2'>(Live Instagram posts will appear here)</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className='bg-gray-800 p-6 rounded-xl'>Post {i}</div>
              ))}
            </div>
          </motion.div>
        )}

        {page === 'shop' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className='text-3xl font-bold mb-4' style={{ color: colors.red }}>Shop</h2>
            <p className='mb-4'>(Printful products will be listed here)</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {['T-shirt','Hat','Mug'].map(item => (
                <div key={item} className='bg-gray-800 p-6 rounded-xl'>{item}</div>
              ))}
            </div>
          </motion.div>
        )}

        {page === 'about' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className='text-3xl font-bold mb-4' style={{ color: colors.gold }}>About Us</h2>
            <p className='max-w-2xl mx-auto text-lg'>
              Point Pleasant Vibe is all about capturing the spirit of the shore, 
              the community, and the lifestyle. We blend local culture with beach vibes 
              to create a brand that feels like summer all year long.
            </p>
          </motion.div>
        )}

        {page === 'contact' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className='text-3xl font-bold mb-4' style={{ color: colors.teal }}>Contact Us</h2>
            <form className='max-w-md mx-auto space-y-4 bg-gray-900 p-6 rounded-2xl'>
              <input type='text' placeholder='Your Name' className='w-full p-2 rounded bg-black border border-gray-700 text-white' />
              <input type='email' placeholder='Your Email' className='w-full p-2 rounded bg-black border border-gray-700 text-white' />
              <textarea placeholder='Your Message' rows='4' className='w-full p-2 rounded bg-black border border-gray-700 text-white'></textarea>
              <button type='submit' className='w-full rounded-xl py-2' style={{ backgroundColor: colors.gold, color: colors.red }}>Send Message</button>
            </form>
          </motion.div>
        )}
      </main>
    </div>
  );
}