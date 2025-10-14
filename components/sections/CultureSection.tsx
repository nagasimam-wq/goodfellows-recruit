'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar, Home, Gift, BookOpen, Heart } from 'lucide-react'

const highlights = [
  { icon: Clock, label: '平均残業時間', value: '月10時間程度', color: 'text-blue-600' },
  { icon: Calendar, label: '有給休暇取得率', value: '85%', color: 'text-green-600' },
  { icon: Home, label: '働き方', value: '週2出社・早出制度', color: 'text-purple-600' },
]

const benefits = [
  { icon: Gift, title: 'バースデー休暇', description: '誕生月に特別休暇を付与' },
  { icon: BookOpen, title: '書籍購入補助', description: '業務関連書籍の購入費用を会社が負担' },
  { icon: Heart, title: '社会保険完備', description: '健康保険・厚生年金・雇用保険・労災保険' },
  { icon: Calendar, title: '育休制度', description: '育児休業制度で家庭と仕事の両立をサポート' },
  { icon: Clock, title: 'フレックス制度', description: '柔軟な勤務時間で効率的に働ける' },
  { icon: Home, title: 'リモートワーク', description: '週2出社で自宅でも快適に業務' },
]

export function CultureSection() {
  return (
    <section id="culture" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">働く環境</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <span className="font-bold text-primary-600">戦友</span>として共に挑戦し、成長できる環境を整えています
          </p>
        </motion.div>

        {/* ハイライトKPI */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <item.icon className={`${item.color}`} size={48} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
              <div className="text-gray-600 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 福利厚生 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12">福利厚生</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                    <benefit.icon className="text-primary-600" size={24} />
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
