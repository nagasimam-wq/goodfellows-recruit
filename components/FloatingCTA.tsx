'use client'

import { Mail, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto z-50 flex flex-row md:flex-col gap-2 md:gap-3 p-3 md:p-0 bg-white md:bg-transparent shadow-lg md:shadow-none"
    >
      <motion.a
        href="https://hrmos.co/pages/goodfellows/jobs"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF5A5F] to-[#E63946] text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all font-medium overflow-hidden group"
      >
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <Mail size={20} className="relative z-10" />
        <span className="relative z-10">エントリー</span>
      </motion.a>

      <motion.a
        href="#people"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white text-[#FF8C00] border-2 border-[#FF8C00] px-6 py-4 rounded-full shadow-lg hover:bg-orange-50 transition-colors font-medium"
      >
        <Users size={20} />
        <span className="md:hidden lg:inline">社員ストーリー</span>
        <span className="hidden md:inline lg:hidden">社員</span>
      </motion.a>
    </motion.div>
  )
}
