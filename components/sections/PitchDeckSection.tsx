'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FileText, ChevronLeft, ChevronRight, Users, Target, TrendingUp, Award, Heart, Zap } from 'lucide-react'
import { useState } from 'react'

const slides = [
  {
    title: 'グッドフェローズ',
    subtitle: '採用ピッチ資料',
    content: '再エネ100%の未来へ',
    bgGradient: 'from-[#FF8C00] to-[#FFB900]',
    icon: Zap,
  },
  {
    title: '私たちのミッション',
    subtitle: 'Mission',
    content: '再生可能エネルギーの普及を通じて、持続可能な社会の実現に貢献します',
    points: [
      '太陽光発電比較サイト「タイナビ」シリーズの運営',
      'エネルギーマネジメントシステムの提供',
      '再エネ業界全体の成長を支援',
    ],
    bgGradient: 'from-[#3DADE8] to-[#3DD9A7]',
    icon: Target,
  },
  {
    title: '事業実績',
    subtitle: 'Achievement',
    content: '業界トップクラスの実績',
    stats: [
      { label: '累計利用者数', value: '100万人以上' },
      { label: '提携企業数', value: '350社以上' },
      { label: '顧客満足度', value: '98%' },
      { label: '設立', value: '2009年' },
    ],
    bgGradient: 'from-[#FF7A3D] to-[#FF5A5F]',
    icon: TrendingUp,
  },
  {
    title: '働く環境',
    subtitle: 'Work Environment',
    content: '成長できる環境が整っています',
    points: [
      'フレックスタイム制・リモートワーク可',
      '書籍購入補助・資格取得支援',
      '平均残業時間: 月20時間以内',
      '有給取得率: 75%以上',
    ],
    bgGradient: 'from-[#3DD9A7] to-[#3DADE8]',
    icon: Heart,
  },
  {
    title: '求める人物像',
    subtitle: 'Ideal Candidate',
    content: 'こんな方と一緒に働きたい',
    points: [
      '変革に挑戦する意欲のある方',
      'チームで成果を出すことを楽しめる方',
      '再エネ業界に興味・関心のある方',
      '主体的に行動できる方',
    ],
    bgGradient: 'from-[#FFB900] to-[#FF8C00]',
    icon: Users,
  },
  {
    title: 'さあ、一緒に始めよう',
    subtitle: "Let's Start Together",
    content: 'あなたの挑戦をお待ちしています',
    cta: true,
    bgGradient: 'from-[#FF8C00] to-[#FFB900]',
    icon: Award,
  },
]

export function PitchDeckSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slide = slides[currentSlide]

  return (
    <section id="pitch-deck" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="text-[#FF8C00]" size={40} />
              <h2 className="text-4xl md:text-5xl font-bold">採用ピッチ資料</h2>
            </div>
            <div className="w-24 h-1 bg-[#FF8C00] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              グッドフェローズの事業内容、ビジョン、働く環境について詳しくご紹介します
            </p>
          </div>

          {/* スライドエリア */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-4 md:p-8"
          >
            <div className="aspect-video bg-gray-50 rounded-lg relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} flex flex-col items-center justify-center p-8 md:p-16 text-white`}
                >
                  {/* アイコン */}
                  {slide.icon && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="mb-6"
                    >
                      <slide.icon size={64} className="opacity-90" />
                    </motion.div>
                  )}

                  {/* サブタイトル */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm md:text-base uppercase tracking-wider opacity-90 mb-2"
                  >
                    {slide.subtitle}
                  </motion.p>

                  {/* タイトル */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-5xl font-bold mb-6 text-center"
                  >
                    {slide.title}
                  </motion.h3>

                  {/* コンテンツ */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-2xl text-center mb-8 opacity-95"
                  >
                    {slide.content}
                  </motion.p>

                  {/* ポイント */}
                  {slide.points && (
                    <motion.ul
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-3 text-left max-w-2xl"
                    >
                      {slide.points.map((point, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-start gap-3 text-base md:text-lg"
                        >
                          <span className="text-2xl">✓</span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}

                  {/* 統計 */}
                  {slide.stats && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="grid grid-cols-2 gap-6 md:gap-8 max-w-3xl"
                    >
                      {slide.stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center"
                        >
                          <p className="text-2xl md:text-4xl font-bold mb-2">{stat.value}</p>
                          <p className="text-sm md:text-base opacity-90">{stat.label}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* CTA */}
                  {slide.cta && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-8"
                    >
                      <a
                        href="#recruit"
                        className="inline-block bg-white text-[#FF8C00] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                      >
                        採用情報を見る
                      </a>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* ナビゲーションボタン */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all z-10"
                aria-label="前のスライド"
              >
                <ChevronLeft className="text-gray-800" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all z-10"
                aria-label="次のスライド"
              >
                <ChevronRight className="text-gray-800" size={24} />
              </button>

              {/* インジケーター */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                    aria-label={`スライド${index + 1}へ`}
                  />
                ))}
              </div>
            </div>

            {/* ダウンロードボタン */}
            <div className="mt-6 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FFB900] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                <FileText size={20} />
                資料をダウンロード（PDF）
              </button>
            </div>
          </motion.div>

          {/* 補足情報 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">
              資料についてご質問がございましたら、お気軽にお問い合わせください
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
