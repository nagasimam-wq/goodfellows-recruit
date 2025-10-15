'use client'

import { motion } from 'framer-motion'
import { Gift, BookOpen, Heart, Calendar, Clock, Home } from 'lucide-react'

const benefits = [
  { icon: Gift, title: 'バースデー休暇', description: '誕生月に特別休暇を付与', color: '#FFB900' },
  { icon: BookOpen, title: '書籍購入補助', description: '業務関連書籍の購入費用を会社が負担', color: '#3DADE8' },
  { icon: Heart, title: '社会保険完備', description: '健康保険・厚生年金・雇用保険・労災保険', color: '#FF5A5F' },
  { icon: Calendar, title: '育休制度', description: '育児休業制度で家庭と仕事の両立をサポート', color: '#3DD9A7' },
  { icon: Clock, title: 'フレックス制度', description: '柔軟な勤務時間で効率的に働ける', color: '#FF7A3D' },
  { icon: Home, title: 'リモートワーク', description: '週2出社で自宅でも快適に業務', color: '#FF8C00' },
]

export function CultureSection() {
  return (
    <section id="culture" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">福利厚生</h2>
          <div className="w-24 h-1 bg-[#FF8C00] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <span className="font-bold text-[#FF8C00]">戦友</span>として共に挑戦し、成長できる環境を整えています
          </p>
        </motion.div>

        {/* 福利厚生 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${benefit.color}20` }}>
                    <benefit.icon style={{ color: benefit.color }} size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
