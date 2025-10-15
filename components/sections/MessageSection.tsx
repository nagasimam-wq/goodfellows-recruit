'use client'

import { motion } from 'framer-motion'

export function MessageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* 日本を代表するエネルギー企業になり、再エネ100%の実現に貢献する */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#FF8C00] mb-12 leading-relaxed">
              日本を代表するエネルギー企業になり、<br />
              再エネ100%の実現に貢献する
            </h2>

            <div className="space-y-6 text-left text-gray-800 text-base md:text-lg leading-relaxed">
              <p>
                現在、世界的に気候変動が話題に上がる中、その影響で災害が多く発生しています。
              </p>
              <p>
                日本でも同様に災害が続き、太陽光・蓄電池をはじめとした再生可能エネルギー業界は注目されてきています。
              </p>
              <p>
                しかしながら、世界各国では再生可能エネルギーの普及が進んでいるものの、日本国内ではいまだまだ認知度の低いことが現実です。
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                当社は、再生可能エネルギーのマーケットプレイスとして、日本を代表するエネルギー企業となり、日本国内の再生可能エネルギー普及100%実現に貢献することを目指しています。
              </p>
            </div>
          </motion.div>

          {/* Goodfellows = 戦友 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#FF8C00] mb-12 text-center">
              Goodfellows＝戦友
            </h2>

            <div className="space-y-6 text-left text-gray-800 text-base md:text-lg leading-relaxed">
              <p>
                私たちは社員のことを戦友と呼んでいます。
              </p>
              <p>
                グッドフェローズのVisionは「日本を代表するエネルギー企業となり、再生可能エネルギー普及100%の実現に貢献」し、「自分たちを成長させること」。
              </p>
              <p>
                時に意見を戦わせることもありますが、お互い同じ価値観を共有し高め合い、そしてVisionの実現のために共に戦い抜く存在がGoodfellows＝戦友です。
              </p>
              <p className="mt-8">
                グッドフェローズは2024年で15周年を迎えました。
              </p>
              <p>
                ですが、私たちは現状に満足せず、次の10年に向けて走り続けます。
              </p>
              <p className="mt-8">
                私たちが掲げるVisionは、私たちだけでなく、日本、そして世界のためになると信じています。
              </p>
              <p className="mt-8 text-xl font-bold text-[#FF8C00]">
                私たちと一緒に、グッドフェローズで戦いませんか？
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
