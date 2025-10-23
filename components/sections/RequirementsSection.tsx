'use client'

import { motion } from 'framer-motion'
import { Heart, TrendingUp, Users, MessageCircle, Zap } from 'lucide-react'

const requirements = [
  {
    icon: Heart,
    title: 'ミッション共感',
    description: '再エネ100%の未来というビジョンに共感し、社会課題の解決に情熱を持てる方',
    color: 'from-[#FFB900] to-[#FF8C00]',
  },
  {
    icon: TrendingUp,
    title: '成長意欲',
    description: '常に学び続け、自己成長を楽しめる方。失敗を恐れず挑戦できる方',
    color: 'from-[#FFB900] to-[#FF8C00]',
  },
  {
    icon: Zap,
    title: '主体性',
    description: '自ら考え、行動できる方。能動的に課題を見つけ、解決に導ける方',
    color: 'from-[#FFB900] to-[#FF8C00]',
  },
  {
    icon: MessageCircle,
    title: 'コミュニケーション力',
    description: 'チームで協力し、円滑なコミュニケーションを取れる方',
    color: 'from-[#FFB900] to-[#FF8C00]',
  },
  {
    icon: Users,
    title: 'チャレンジ精神',
    description: '新しいことに挑戦し、変革を楽しめる戦友として共に歩める方',
    color: 'from-[#FFB900] to-[#FF8C00]',
  },
]

export function RequirementsSection() {
  return (
    <section className="relative section-divider overflow-hidden">
      {/* 固定背景動画 */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/renewable-energy-bg.mp4" type="video/mp4" />
        </video>
        {/* 白オーバーレイ */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">求める人物像</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            私たちは、こんな<span className="font-bold text-primary-600">戦友</span>を求めています
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${req.color} mb-6`}>
                <req.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{req.title}</h3>
              <p className="text-gray-700 leading-relaxed">{req.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-primary-100 p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            共に挑戦する<span className="text-primary-600">戦友</span>として
          </h3>
          <p className="text-gray-700 leading-relaxed text-center text-lg">
            グッドフェローズでは、単なる同僚ではなく、共に大きな目標に向かって戦う<span className="font-bold text-primary-600">戦友</span>を求めています。
            再エネ100%の未来という挑戦的なビジョンを実現するため、一人ひとりが主体的に行動し、互いに支え合いながら成長していける環境があります。
            あなたも私たちの<span className="font-bold text-primary-600">戦友</span>として、一緒に変革に挑戦しませんか？
          </p>
        </motion.div>
      </div>
    </section>
  )
}
