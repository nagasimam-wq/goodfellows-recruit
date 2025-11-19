'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // スマホ用のアニメーション設定
  const mobileAnimation = {
    x: Array.from({ length: images.length + 1 }, (_, i) => `-${(i / images.length) * 100}%`),
  }

  const mobileTransition = {
    x: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: images.length * 3.5, // 各画像3.5秒
      ease: "easeInOut",
      times: Array.from({ length: images.length + 1 }, (_, i) => i / images.length),
    },
  }

  // デスクトップ用のアニメーション設定
  const desktopAnimation = {
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
  }

  const desktopTransition = {
    x: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 28,
      ease: "easeInOut",
      times: [0, 0.08, 0.17, 0.25, 0.33, 0.42, 0.50, 0.58, 0.67, 0.75, 0.83, 0.92, 1],
    },
  }

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

        <div className="relative mb-16">
          {/* 無限スクロールコンテナ */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={isMobile ? mobileAnimation : desktopAnimation}
              transition={isMobile ? mobileTransition : desktopTransition}
            >
              {duplicatedImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[500px] aspect-[4/3] overflow-hidden shadow-lg"
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

        {/* 職場環境の説明 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            職場環境
          </h3>

          <div className="space-y-4 text-gray-700 leading-relaxed text-center">
            <p>
              当社はニューノーマル時代の働き方に順応し、2020年11月にオフィスの規模を縮小・移転しました。新オフィスは企業理念の体現をコンセプトとし、理念への共感・共鳴が広がる空間をプロデュースしました。
            </p>

            <p>
              壁面には、企業理念・ミッション・ビジョン・バリューをデザイン。再生ダンボールをリサイクルし手作りされた照明や、廃棄物をリサイクルして作られたサイドテーブルのほか、FSC森林認証材や自然素材を使用した家具を採用し、環境負荷を可能な限り少なくしています。
            </p>

            <div className="mt-6 pt-6">
              <p className="text-sm text-gray-600">
                ※執務室内には、ウォーターサーバー・自動販売機・オフィスグリコ等を完備しています。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
