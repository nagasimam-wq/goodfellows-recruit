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

          {/* 1枚の大きな画像コンテナ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            {/* 背景画像（デスクトップのみ） */}
            <div className="hidden lg:block absolute inset-0 overflow-hidden min-h-[500px] lg:min-h-[600px]">
              <Image
                src="/images/nagao.png"
                alt="代表取締役社長 長尾 泰広"
                fill
                className="object-contain object-left"
              />
              {/* 右側をグラデーションで背景になじませる */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent from-40% via-white/60 via-55% via-white/80 via-65% to-white to-75%"></div>
              {/* 上下左の枠をフェードアウト */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent via-20% to-transparent to-90%"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent via-20% to-transparent to-90%"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent via-5% to-transparent"></div>
            </div>

            {/* コンテンツ */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch lg:min-h-[600px]">
              {/* 左側/上側：写真と名前エリア */}
              <div className="lg:w-1/2 flex flex-col">
                {/* モバイル・タブレット用：写真 */}
                <div className="lg:hidden relative w-full h-[60vh] min-h-[400px] mb-6">
                  <Image
                    src="/images/nagao.png"
                    alt="代表取締役社長 長尾 泰広"
                    fill
                    className="object-contain object-center"
                  />
                </div>

                {/* 名前エリア */}
                <div className="flex items-end pb-6 lg:pb-12 px-6 lg:pl-6 flex-1">
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="inline-block px-5 py-1.5 bg-gradient-to-r from-[#FF8C00] to-[#FFB900] rounded-full mb-3 shadow-md"
                  >
                    <p className="text-white text-sm font-bold">CEO</p>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-800 lg:text-white text-xs font-medium mb-2 uppercase tracking-wider lg:[text-shadow:0_2px_4px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.15)]"
                  >
                    Chief Executive Officer
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-gray-900 lg:text-white text-3xl lg:text-4xl font-bold mb-1 lg:[text-shadow:0_2px_4px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.15)]"
                  >
                    長尾 泰広
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-gray-700 lg:text-white text-sm font-light tracking-wide lg:[text-shadow:0_2px_4px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.15)]"
                  >
                    Yasuhiro Nagao
                  </motion.p>
                </div>
                </div>
              </div>

              {/* 右側/下側：メッセージエリア */}
              <div className="lg:w-1/2 flex items-center px-8 lg:px-12 xl:px-16 py-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-full max-w-xl mx-auto"
                >
                  <Quote className="text-[#FF8C00] mb-6" size={48} />

                  <div className="space-y-5">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      私たちグッドフェローズは、<br />
                      <span className="font-bold text-[#FF8C00] text-lg md:text-xl">「再エネ100%の未来」</span>という大きなビジョンに向かって挑戦を続けています。
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      この挑戦は、一人では成し遂げられません。<br />
                      志を共にし、共に困難を乗り越えていく<span className="font-bold text-[#FF8C00] text-lg md:text-xl">戦友</span>が必要です。
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed font-semibold">
                      変革のない未来はありません。<br />
                      私たちと一緒に、エネルギー業界に変革を起こし、持続可能な社会を実現しましょう。
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
