'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="top" className="relative">
      {/* 上部: 採用情報と人物画像 */}
      <div className="relative h-[50vh] min-h-[400px] bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/recruit_head_img.png"
            alt="採用情報"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
              RECRUIT
              <span className="text-2xl md:text-3xl ml-4 font-normal">採用情報</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* 下部: オレンジ背景とオフィス画像とNo Re-new, No Future */}
      <div className="relative bg-[#FF8C00] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* オフィス画像 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] bg-white rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/recruit-img01.png"
                alt="オフィス"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold text-gray-800">
                    No Re-new, No Future
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
