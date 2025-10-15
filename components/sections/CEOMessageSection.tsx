'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FileText, Quote } from 'lucide-react'

export function CEOMessageSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8C00] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB900] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-[#FF8C00] to-[#FFB900] text-white px-6 py-2 rounded-full text-sm font-semibold">
                MESSAGE FROM CEO
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF8C00] to-[#FFB900] bg-clip-text text-transparent">
              代表メッセージ
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF8C00] to-[#FFB900] mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* 左側：写真エリア */}
              <div className="md:w-2/5 bg-gradient-to-br from-gray-50 to-orange-50/30 p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
                {/* 装飾的な背景要素 */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#FF8C00] to-[#FFB900] opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFB900] to-[#FF8C00] opacity-5 rounded-full blur-3xl"></div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full max-w-sm relative z-10"
                >
                  {/* 写真コンテナ */}
                  <div className="relative mb-8">
                    {/* 写真 */}
                    <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/nagao.png"
                        alt="代表取締役社長 長尾 泰広"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* 名前エリア */}
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="inline-block px-5 py-1.5 bg-gradient-to-r from-[#FF8C00] to-[#FFB900] rounded-full mb-3 shadow-md"
                    >
                      <p className="text-white text-sm font-bold">CEO</p>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-500 text-xs font-medium mb-2 uppercase tracking-wider"
                    >
                      Chief Executive Officer
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-900 text-3xl md:text-4xl font-bold mb-1"
                    >
                      長尾 泰広
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="text-gray-500 text-sm font-light tracking-wide"
                    >
                      Yasuhiro Nagao
                    </motion.p>
                  </div>
                </motion.div>
              </div>

              {/* 右側：メッセージエリア */}
              <div className="md:w-3/5 p-8 md:p-12 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Quote className="text-[#FF8C00] mb-6" size={48} />

                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                      私たちグッドフェローズは、<span className="font-bold text-[#FF8C00] text-xl md:text-2xl">「再エネ100%の未来」</span>という大きなビジョンに向かって挑戦を続けています。
                    </p>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                      この挑戦は、一人では成し遂げられません。志を共にし、共に困難を乗り越えていく<span className="font-bold text-[#FF8C00] text-xl md:text-2xl">戦友</span>が必要です。
                    </p>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-semibold">
                      変革のない未来はありません。私たちと一緒に、エネルギー業界に変革を起こし、持続可能な社会を実現しましょう。
                    </p>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
                      あなたの挑戦を心よりお待ちしています。
                    </p>
                  </div>

                  <div className="mt-10">
                    <a
                      href="#pitch-deck"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF8C00] to-[#FFB900] text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                    >
                      <FileText size={24} />
                      採用ピッチ資料を見る
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
