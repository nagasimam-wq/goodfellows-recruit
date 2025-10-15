'use client'

import { motion } from 'framer-motion'
import { Sun, Zap, Building2, TrendingUp } from 'lucide-react'

const businesses = [
  {
    icon: Sun,
    title: '太陽光発電比較サイト',
    description: '「タイナビ」シリーズを運営し、太陽光発電・蓄電池・電力会社の比較サービスを提供。累計利用者数は業界トップクラスを誇ります。',
    color: 'from-accent-yellow to-accent-orange'
  },
  {
    icon: Zap,
    title: 'エネルギーマネジメント',
    description: '企業向けエネルギーマネジメントシステムの開発・提供を通じて、効率的なエネルギー利用をサポートしています。',
    color: 'from-accent-blue to-cyan-500'
  },
  {
    icon: Building2,
    title: '不動産・リフォーム',
    description: '住宅リフォームや不動産関連の比較サービスを展開。お客様の最適な選択をサポートします。',
    color: 'from-accent-green to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'M&A・新規事業',
    description: '再エネ関連企業のM&Aや新規事業開発を通じて、業界全体の成長に貢献しています。',
    color: 'from-accent-red to-pink-500'
  },
]

export function BusinessSection() {
  return (
    <section id="business" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">事業内容</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            再生可能エネルギーを中心に、持続可能な社会の実現に向けた多様な事業を展開しています
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${business.color} mb-4`}>
                <business.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{business.title}</h3>
              <p className="text-gray-700 leading-relaxed">{business.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
