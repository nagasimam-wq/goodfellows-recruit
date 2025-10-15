'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Calendar, Clock, Users as UsersIcon, TrendingUp, Briefcase } from 'lucide-react'

function CountUp({ end, duration = 2000, suffix = '', decimals = 0 }: { end: number; duration?: number; suffix?: string; decimals?: number }) {
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
        setCount(end * percentage)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration, isVisible])

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  )
}

// 部署構成データ
const departmentData = [
  { name: '電源開発事業部', value: 23.7, fill: '#FFB900' },
  { name: 'インサイドセールス', value: 21.1, fill: '#FF8C00' },
  { name: '卸事業部', value: 13.2, fill: '#FF7A3D' },
  { name: '開発部', value: 10.5, fill: '#3DADE8' },
  { name: '新規事業', value: 7.9, fill: '#3DD9A7' },
  { name: 'マーケティング', value: 5.3, fill: '#FF5A5F' },
  { name: 'メディア', value: 5.3, fill: '#FFB900' },
  { name: '再エネ事業部', value: 5.3, fill: '#3DADE8' },
  { name: '役員', value: 5.3, fill: '#FF8C00' },
  { name: '経営企画部', value: 2.6, fill: '#3DD9A7' },
]

// 雇用形態データ
const employmentData = [
  { name: '正社員', value: 27, fill: '#FF8C00' },
  { name: 'アルバイト・パート', value: 7, fill: '#FFB900' },
  { name: '役員', value: 2, fill: '#3DADE8' },
  { name: '契約社員', value: 1, fill: '#3DD9A7' },
]

// 入社の決め手データ
const motivationData = [
  { name: '仕事内容', value: 46.4 },
  { name: '社員の雰囲気', value: 32.1 },
  { name: '働き方', value: 32.1 },
  { name: 'その他', value: 28.6 },
  { name: '面接官の人柄', value: 17.9 },
  { name: 'グッドフェローズのミッション', value: 14.3 },
]

// 共感度データ
const empathyData = [
  { score: '3', value: 25 },
  { score: '4', value: 57.1 },
  { score: '5', value: 17.9 },
]

// 共感ポイントデータ
const empathyPointsData = [
  { name: '理念「No Re-new, No Future」', value: 75 },
  { name: 'Value「社会価値を追求し続ける」', value: 39.3 },
  { name: 'Mission「IT×リアルでエネルギーを再定義する」', value: 28.6 },
  { name: 'Vision「日本一を代表する再エネ企業へ」', value: 28.6 },
  { name: 'Value「プロにならなければ意味がない」', value: 28.6 },
]

export function NumbersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">数字で見るグッドフェローズ</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-24">
          {/* Company Overview */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3"
            >
              <span className="text-primary-500">Company Overview</span>
              <span className="text-xl text-gray-600">会社概要</span>
            </motion.h3>

            {/* 基本情報カード */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-orange-50 p-6 rounded-2xl shadow-lg"
              >
                <Calendar className="w-12 h-12 text-primary-500 mb-3" />
                <div className="text-sm text-gray-600 mb-1">創業年数</div>
                <div className="text-4xl font-bold text-primary-500">
                  <CountUp end={16} />
                  <span className="text-2xl">年</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-accent-yellow/20 to-accent-orange/20 p-6 rounded-2xl shadow-lg"
              >
                <UsersIcon className="w-12 h-12 text-accent-yellow mb-3" />
                <div className="text-sm text-gray-600 mb-1">従業員数</div>
                <div className="text-4xl font-bold text-accent-yellow">
                  <CountUp end={37} />
                  <span className="text-2xl">人</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-accent-blue/20 to-accent-green/20 p-6 rounded-2xl shadow-lg"
              >
                <TrendingUp className="w-12 h-12 text-accent-blue mb-3" />
                <div className="text-sm text-gray-600 mb-1">平均勤続年数</div>
                <div className="text-4xl font-bold text-accent-blue">
                  <CountUp end={6} />
                  <span className="text-2xl">年</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-accent-green/20 to-accent-blue/20 p-6 rounded-2xl shadow-lg"
              >
                <Briefcase className="w-12 h-12 text-accent-green mb-3" />
                <div className="text-sm text-gray-600 mb-1">雇用形態</div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  正社員 27名<br />
                  役員 2名<br />
                  パート 7名<br />
                  契約 1名
                </div>
              </motion.div>
            </div>

            {/* 部署構成と雇用形態 */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* 部署構成 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <h4 className="text-xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">部署構成</h4>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, value }) => `${name} ${value}%`}
                      labelLine={{ stroke: '#999', strokeWidth: 1 }}
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>

              {/* 雇用形態 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <h4 className="text-xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">雇用形態の内訳</h4>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={employmentData}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      dataKey="value"
                      label={({ name, value }) => `${name} ${value}名`}
                    >
                      {employmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value}名`} />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>

          {/* Work Environment */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3"
            >
              <span className="text-primary-500">Work Environment</span>
              <span className="text-xl text-gray-600">働く環境</span>
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-accent-blue/20 to-white p-8 rounded-2xl shadow-lg text-center"
              >
                <Clock className="w-16 h-16 text-accent-blue mx-auto mb-4" />
                <div className="text-sm text-gray-600 mb-2">平均残業時間</div>
                <div className="text-5xl font-bold text-accent-blue mb-2">
                  <CountUp end={10} />
                </div>
                <div className="text-gray-600">時間／月</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-accent-green/20 to-white p-8 rounded-2xl shadow-lg text-center"
              >
                <Calendar className="w-16 h-16 text-accent-green mx-auto mb-4" />
                <div className="text-sm text-gray-600 mb-2">有給休暇取得率</div>
                <div className="text-5xl font-bold text-accent-green mb-2">
                  <CountUp end={85} />
                  <span className="text-3xl">%</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg"
              >
                <UsersIcon className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                <div className="text-sm text-gray-600 mb-3 text-center">働き方</div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>週2出社</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>早出制度あり</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>リモートワーク可</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Employee Voice */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3"
            >
              <span className="text-primary-500">Employee Voice</span>
              <span className="text-xl text-gray-600">社員の声</span>
            </motion.h3>

            {/* 入社の決め手 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg mb-12"
            >
              <h4 className="text-xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
                入社の決め手はなんでしたか？
              </h4>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={motivationData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" unit="%" />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Bar dataKey="value" fill="#FF8C00" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* 共感度アンケート */}
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <h4 className="text-xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
                  経営方針やビジョンへの共感度
                </h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={empathyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="score" label={{ value: 'スコア', position: 'insideBottom', offset: -5 }} />
                    <YAxis unit="%" />
                    <Tooltip formatter={(value: number) => `${value}%`} />
                    <Bar dataKey="value" fill="#3DADE8" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <h4 className="text-xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
                  どの点に共感できますか？
                </h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={empathyPointsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} fontSize={11} />
                    <YAxis unit="%" />
                    <Tooltip formatter={(value: number) => `${value}%`} />
                    <Bar dataKey="value" fill="#3DD9A7" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
