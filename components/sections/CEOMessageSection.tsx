'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FileText } from 'lucide-react'

export function CEOMessageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">代表メッセージ</h2>
            <div className="w-24 h-1 bg-[#FF8C00] mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                {/* 代表写真 */}
                <div className="aspect-square relative rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/nagao.png"
                    alt="代表取締役社長 長尾 泰広"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center font-semibold text-lg">代表取締役社長</p>
                <p className="text-center text-gray-600">長尾 泰広</p>
              </div>

              <div className="md:w-2/3 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  私たちグッドフェローズは、「再エネ100%の未来」という大きなビジョンに向かって挑戦を続けています。この挑戦は、一人では成し遂げられません。志を共にし、共に困難を乗り越えていく<span className="font-bold text-[#FF8C00]">戦友</span>が必要です。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  変革のない未来はありません。私たちと一緒に、エネルギー業界に変革を起こし、持続可能な社会を実現しましょう。あなたの挑戦を心よりお待ちしています。
                </p>

                <div className="pt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF8C00] text-white rounded-lg font-semibold hover:bg-[#E67E00] transition-colors"
                  >
                    <FileText size={20} />
                    採用ピッチ資料を見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
