'use client'

import { motion } from 'framer-motion'
import { GraduationCap, TrendingUp, Award, BookMarked } from 'lucide-react'

const trainings = [
  { title: '新入社員研修・OJT', description: '入社後の基礎研修とマンツーマン指導' },
  { title: '階層別研修', description: '役職・経験に応じた研修プログラム' },
  { title: '外部研修・資格取得支援', description: '研修費用・資格取得費用を会社が全額負担' },
  { title: '生成AI研修（Gen R.）', description: '最新技術の活用スキルを習得' },
]

const supports = [
  { icon: BookMarked, title: '書籍購入補助', description: '業務関連書籍の購入費用を全額補助' },
  { icon: GraduationCap, title: '外部セミナー', description: 'セミナー参加費用を全額負担' },
  { icon: Award, title: '資格取得支援', description: '資格取得に関わる費用を会社が負担' },
]

const careerPath = [
  { year: '入社', role: 'メンバー', description: '基礎スキルの習得とOJT' },
  { year: '2-3年', role: 'リーダー', description: '小規模プロジェクトのリード' },
  { year: '4-5年', role: 'マネージャー', description: 'チーム・部門のマネジメント' },
  { year: '6年~', role: '役員・事業責任者', description: '経営層として事業を牽引' },
]

export function GrowthSection() {
  return (
    <section id="growth" className="relative section-divider overflow-hidden">
      {/* 固定背景画像（パララックス効果） */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://www.goodfellows.co.jp/wp-content/uploads/2020/10/company-img04-1.png)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10 py-20">
        {/* コンテンツ幅に合わせた黒オーバーレイ */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">成長機会とキャリアパス</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            個人の成長を全力でサポートし、キャリアアップの道筋を明確に描けます
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* 研修制度 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">研修制度</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {trainings.map((training, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md border border-primary-100"
                >
                  <h4 className="font-bold text-lg mb-2 text-primary-700">{training.title}</h4>
                  <p className="text-gray-700">{training.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 自己啓発支援 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">自己啓発支援</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {supports.map((support, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary-100 rounded-full">
                      <support.icon className="text-primary-600" size={32} />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{support.title}</h4>
                  <p className="text-gray-600 text-sm">{support.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* キャリアパス */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">キャリアパス例</h3>
            <div className="relative">
              {/* タイムライン */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

              <div className="space-y-8">
                {careerPath.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                  >
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-primary-600 font-bold text-sm mb-2">{step.year}</div>
                      <h4 className="font-bold text-xl mb-2">{step.role}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="hidden md:block w-12 h-12 bg-primary-500 rounded-full flex-shrink-0 border-4 border-white shadow-lg flex items-center justify-center">
                      <TrendingUp className="text-white" size={20} />
                    </div>
                    <div className="hidden md:block flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-center mt-8 text-gray-600">
              ※ 入社最短2年でリーダー昇進の実例もあります
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
