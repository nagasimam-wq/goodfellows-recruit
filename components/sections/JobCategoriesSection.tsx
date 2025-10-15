'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'

const categories = [
  {
    icon: GraduationCap,
    title: '新卒採用',
    description: '未来を創る仲間を募集',
    color: 'from-[#FF8C00] to-[#FFB900]',
    href: '#recruit',
  },
  {
    icon: Briefcase,
    title: '中途採用',
    description: '即戦力として活躍できる方を募集',
    color: 'from-[#3DADE8] to-[#3DD9A7]',
    href: '#recruit',
  },
]

export function JobCategoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">募集職種</h2>
          <div className="w-24 h-1 bg-[#FF8C00] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="block"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 md:p-8 text-center h-full`}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                    <category.icon className="text-white" size={40} />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-white/90 text-base md:text-lg">
                  {category.description}
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                    詳しく見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
