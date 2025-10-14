'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, ChevronRight } from 'lucide-react'

const newGradFlow = [
  { step: 1, title: 'エントリー', description: '応募フォームからエントリー' },
  { step: 2, title: 'カジュアル面談', description: '気軽に会社や仕事について知る' },
  { step: 3, title: '書類選考', description: 'エントリーシートの審査' },
  { step: 4, title: '面接', description: '人事/若手 → 部門Mgr → 役員' },
  { step: 5, title: '内々定・内定', description: '最終合格・入社準備' },
]

const careerFlow = [
  { step: 1, title: '応募', description: 'エントリーフォームまたはメールで応募' },
  { step: 2, title: '書類選考', description: '履歴書・職務経歴書の審査' },
  { step: 3, title: '面接', description: '複数回の面接実施' },
  { step: 4, title: 'リファレンスチェック', description: '必要に応じて実施' },
  { step: 5, title: '内定・条件面談', description: '条件確認・入社手続き' },
]

export function RecruitSection() {
  return (
    <section id="recruit" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">採用情報</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <span className="font-bold text-primary-600">戦友</span>として、共に挑戦する仲間を募集しています
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* 新卒採用フロー */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">新卒採用フロー</h3>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {newGradFlow.map((item, index) => (
                <div key={index} className="flex items-center gap-4 flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex-1"
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                  {index < newGradFlow.length - 1 && (
                    <ChevronRight className="hidden md:block text-primary-400 flex-shrink-0" size={24} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 中途採用フロー */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">中途採用フロー</h3>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {careerFlow.map((item, index) => (
                <div key={index} className="flex items-center gap-4 flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex-1"
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                  {index < careerFlow.length - 1 && (
                    <ChevronRight className="hidden md:block text-primary-400 flex-shrink-0" size={24} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* お問い合わせ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">メールでのお問い合わせ</h4>
                  <a href="mailto:recruit@goodfellows.co.jp" className="text-white/90 hover:text-white underline">
                    recruit@goodfellows.co.jp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">お電話でのお問い合わせ</h4>
                  <p className="text-white/90">平日 10:00〜18:00</p>
                  <p className="text-white/90 text-sm mt-1">※採用に関するお問い合わせのみ</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <motion.a
                href="mailto:recruit@goodfellows.co.jp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Mail size={20} />
                今すぐエントリーする
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
