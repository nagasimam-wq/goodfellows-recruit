'use client'

import { Mail, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
    >
      <motion.a
        href="#recruit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-gradient-to-r from-[#FF5A5F] to-[#E63946] text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
      >
        <Mail size={20} />
        <span className="hidden sm:inline">エントリー</span>
      </motion.a>

      <motion.a
        href="#people"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-white text-[#FF8C00] border-2 border-[#FF8C00] px-6 py-4 rounded-full shadow-lg hover:bg-orange-50 transition-colors font-medium"
      >
        <Users size={20} />
        <span className="hidden sm:inline">社員ストーリー</span>
      </motion.a>
    </motion.div>
  )
}
