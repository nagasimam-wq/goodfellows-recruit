'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// 下部のスライダー画像
const sliderImages = [
  'https://www.goodfellows.co.jp/img/recruit/recruit-img01.png',
  'https://www.goodfellows.co.jp/img/recruit/recruit-img18.png',
  'https://www.goodfellows.co.jp/img/recruit/recruit-img17.png',
  'https://www.goodfellows.co.jp/img/recruit/recruit-img16.png',
]

export function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="top" className="relative">
      {/* 上部: 固定画像 */}
      <div className="relative h-[50vh] min-h-[400px] bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.goodfellows.co.jp/img/recruit/recruit_head_img.png"
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

      {/* 下部: オレンジ背景とパタパタ画像スライダーとNo Re-new, No Future */}
      <div className="relative bg-[#FF8C00] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* パタパタ画像スライダー */}
            <div className="relative h-[500px] md:h-[600px] bg-white overflow-hidden shadow-2xl">
              {sliderImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === index ? 1 : 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  {/* 1枚の画像を横に4分割して表示し、パタパタと切り替わるアニメーション */}
                  {[0, 1, 2, 3].map((c) => (
                    <motion.div
                      key={c}
                      className="absolute h-full overflow-hidden"
                      style={{
                        left: `${c * 25}%`,
                        width: '25%',
                        transformOrigin: 'left',
                        perspective: '1000px',
                      }}
                      initial={{ rotateY: -90, opacity: 0 }}
                      animate={{
                        rotateY: i === index ? 0 : -90,
                        opacity: i === index ? 1 : 0
                      }}
                      transition={{ duration: 1, delay: c * 0.1, ease: "easeInOut" }}
                    >
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url(${img})`,
                          backgroundSize: '400% auto',
                          backgroundPosition: `${c * 33.33}% center`,
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ))}

              {/* No Re-new, No Future テキスト */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-lg"
                >
                  <p className="text-3xl md:text-4xl font-bold text-gray-800">
                    No Re-new, No Future
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
