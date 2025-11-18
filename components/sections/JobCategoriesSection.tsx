'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'

const categories = [
  {
    icon: GraduationCap,
    title: '新卒採用',
    description: '未来を創る仲間を募集',
    color: 'from-[#FF8C00] to-[#FFB900]',
    href: 'https://hrmos.co/pages/goodfellows/jobs',
  },
  {
    icon: Briefcase,
    title: '中途採用',
    description: '即戦力として活躍できる方を募集',
    color: 'from-[#3DADE8] to-[#3DD9A7]',
    href: 'https://hrmos.co/pages/goodfellows/jobs',
  },
]

export function JobCategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -4 }}
              className="block"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-xl transition-all p-6 md:p-8 text-center h-full hover:shadow-xl`}>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base mb-4">
                  {category.description}
                </p>
                <div>
                  <span className="inline-flex items-center gap-1 text-white font-semibold text-sm">
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
