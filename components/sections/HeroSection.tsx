'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// 既存の画像 + Unsplash画像
const images = [
  '/images/recruit_head_img.png',
  '/images/recruit-img01.png',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80',
]

export function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="top" className="relative">
      {/* 上部: パタパタめくれる画像スライダー */}
      <div className="relative h-[50vh] min-h-[400px] bg-white overflow-hidden">
        {/* 背景画像スライダー */}
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1.5 }}
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
                transition={{ duration: 0.8, delay: c * 0.1 }}
              >
                {img.startsWith('http') ? (
                  // Unsplash画像（外部URL）
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: '400% 100%',
                      backgroundPosition: `${c * 33.33}% center`,
                    }}
                  />
                ) : (
                  // ローカル画像 - div背景で表示
                  <div
                    className="w-full h-full relative"
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: '400% 100%',
                      backgroundPosition: `${c * 33.33}% center`,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        ))}

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg"
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
