'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const stats = [
  { value: 20, suffix: '年', label: '創業年数', description: '2004年創業' },
  { value: 100, suffix: '万', label: '累計利用者数', description: 'タイナビシリーズ' },
  { value: 150, suffix: '名', label: '従業員数', description: '2024年時点' },
  { value: 95, suffix: '%', label: '顧客満足度', description: 'タイナビ' },
]

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const timer = setInterval(() => {
      const now = Date.now()
      const remaining = endTime - now
      const percentage = Math.max(0, 1 - remaining / duration)

      if (remaining <= 0) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(end * percentage))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration, isVisible])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function NumbersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">数字で見るグッドフェローズ</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xl md:text-2xl font-semibold mb-2">{stat.label}</div>
              <div className="text-sm md:text-base opacity-90">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
