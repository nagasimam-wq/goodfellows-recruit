'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const interviews = [
  {
    name: '長尾 泰広',
    role: '代表取締役社長',
    image: 'CEO',
    keywords: ['ビジョン', '挑戦', 'リーダーシップ'],
    excerpt: '再エネ100%の未来を実現するため、変革に挑み続けます。',
  },
  {
    name: '清水 徹',
    role: 'IS部長',
    image: 'IS',
    keywords: ['裁量', '仕組み化', '能動性'],
    excerpt: '週2在宅、社内ベンチャー志向で自由に挑戦できる環境です。',
  },
  {
    name: '石川 和宏',
    role: 'M&A / 再エネメディア',
    image: 'MA',
    keywords: ['未経験から最前線', '経営と近い距離', '組織化'],
    excerpt: '未経験からM&Aの最前線へ。経営との距離が近く、成長を実感できます。',
  },
  {
    name: '営業メンバー',
    role: '営業部',
    image: 'Sales',
    keywords: ['チームワーク', '成果', '成長'],
    excerpt: 'チーム一丸となって目標を達成し、共に成長しています。',
  },
]

export function PeopleSection() {
  return (
    <section id="people" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">社員ストーリー</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <span className="font-bold text-primary-600">戦友</span>として共に挑戦する仲間たちの声をお届けします
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {interviews.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
            >
              {/* 画像プレースホルダー */}
              <div className="aspect-video bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center text-white font-bold text-4xl">
                {person.image}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
                    <p className="text-gray-600">{person.role}</p>
                  </div>
                  <ArrowRight className="text-primary-600 flex-shrink-0" size={24} />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {person.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">{person.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
