'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'

export function VisionSection() {
  return (
    <section id="vision" className="py-20 section-light section-divider">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">理念・ビジョン</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            私たちは、再生可能エネルギーを通じて持続可能な未来を創造します
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* ミッション */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <Target className="text-primary-500" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">ミッション</h3>
                  <p className="text-primary-500 font-semibold text-lg">No Re-new, No Future</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                変革のない未来はありません。私たちは、再生可能エネルギーの普及を通じて、エネルギー業界に変革をもたらし、日本のエネルギー自給率向上と脱炭素社会の実現に貢献します。一人ひとりが<span className="font-bold text-primary-500">戦友</span>として、この大きな挑戦に立ち向かっています。
              </p>
            </div>
          </motion.div>

          {/* ビジョン */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <Eye className="text-primary-500" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">ビジョン</h3>
                  <p className="text-primary-500 font-semibold text-lg">再エネ100%の未来へ</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                2050年までに、日本のエネルギーを100%再生可能エネルギーで賄える社会を実現します。太陽光発電を中心とした再エネの普及促進、エネルギーマネジメントシステムの構築、そして持続可能なエネルギーインフラの整備を通じて、次世代に豊かな地球環境を残すことが私たちの使命です。
              </p>
            </div>
          </motion.div>

          {/* バリュー */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <Heart className="text-primary-500" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">バリュー</h3>
                  <p className="text-primary-500 font-semibold text-lg">共に挑戦する戦友として</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-accent-green">
                  <h4 className="font-bold text-lg mb-2 text-primary-500">挑戦</h4>
                  <p className="text-gray-700">既成概念にとらわれず、新しい価値を創造し続ける</p>
                </div>
                <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-accent-green">
                  <h4 className="font-bold text-lg mb-2 text-primary-500">誠実</h4>
                  <p className="text-gray-700">お客様、仲間、社会に対して誠実であり続ける</p>
                </div>
                <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-accent-green">
                  <h4 className="font-bold text-lg mb-2 text-primary-500">成長</h4>
                  <p className="text-gray-700">個人とチームの成長を通じて、社会に貢献する</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
