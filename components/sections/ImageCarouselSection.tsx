'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  { src: '/images/recruit-img19.png', alt: 'オフィス風景 1' },
  { src: '/images/recruit-img20.png', alt: 'オフィス風景 2' },
  { src: '/images/recruit-img18.png', alt: 'オフィス風景 3' },
  { src: '/images/recruit-img16.png', alt: 'オフィス風景 4' },
  { src: '/images/recruit-img17.png', alt: 'オフィス風景 5' },
  { src: '/images/recruit-img17.png', alt: 'オフィス風景 6' },
]

export function ImageCarouselSection() {
  // 画像を2回複製して無限ループを実現
  const duplicatedImages = [...images, ...images]

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">オフィス風景</h2>
          <div className="w-24 h-1 bg-[#FF8C00] mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* 無限スクロールコンテナ */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [
                  '0%',
                  '0%',
                  '-16.666%',
                  '-16.666%',
                  '-33.333%',
                  '-33.333%',
                  '-50%',
                  '-50%',
                  '-66.666%',
                  '-66.666%',
                  '-83.333%',
                  '-83.333%',
                  '-100%',
                ],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 36, // 36秒で1周（6枚×6秒）
                  ease: "easeInOut",
                  times: [0, 0.08, 0.17, 0.25, 0.33, 0.42, 0.50, 0.58, 0.67, 0.75, 0.83, 0.92, 1],
                },
              }}
            >
              {duplicatedImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative flex-shrink-0 w-[400px] h-[300px] md:w-[500px] md:h-[350px] rounded-xl overflow-hidden shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index < 6}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
