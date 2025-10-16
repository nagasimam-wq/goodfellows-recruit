'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Zap, Building2, TrendingUp, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface BusinessDetail {
  title: string
  content: string
}

interface Business {
  icon: any
  title: string
  description: string
  image: string
  color: string
  details: BusinessDetail[]
}

const businesses: Business[] = [
  {
    icon: Sun,
    title: '太陽光発電比較サイト',
    description: '「タイナビ」シリーズを運営し、太陽光発電・蓄電池・電力会社の比較サービスを提供。累計利用者数は業界トップクラスを誇ります。',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    color: 'from-accent-yellow to-accent-orange',
    details: [
      {
        title: 'タイナビとは',
        content: '太陽光発電の一括見積もりサイト「タイナビ」は、全国350社以上の優良企業から最大5社の見積もりを無料で比較できるサービスです。2009年のサービス開始以来、累計100万人以上にご利用いただいています。',
      },
      {
        title: '主なサービス',
        content: '住宅用太陽光発電の見積もり比較、産業用太陽光発電の見積もり比較、蓄電池の見積もり比較、電力会社の比較サービスなど、再生可能エネルギーに関する総合的な情報提供を行っています。',
      },
      {
        title: '強み',
        content: '業界最大級の登録企業数、厳しい審査基準をクリアした優良企業のみを掲載、専門スタッフによるサポート体制、豊富な導入実績とノウハウを持つことが当社の強みです。',
      },
      {
        title: '実績',
        content: '累計利用者数100万人以上、顧客満足度98%、全国47都道府県対応、月間問い合わせ数5,000件以上という実績を誇ります。',
      },
    ],
  },
  {
    icon: Zap,
    title: 'エネルギーマネジメント',
    description: '企業向けエネルギーマネジメントシステムの開発・提供を通じて、効率的なエネルギー利用をサポートしています。',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
    color: 'from-accent-blue to-cyan-500',
    details: [
      {
        title: 'エネルギーマネジメントとは',
        content: '企業や施設のエネルギー使用状況を可視化し、最適化するシステムを提供しています。IoT技術を活用したリアルタイムモニタリングにより、エネルギーコストの削減と環境負荷の低減を実現します。',
      },
      {
        title: '提供サービス',
        content: 'エネルギー使用量の可視化、自動制御システムの導入、省エネ提案とコンサルティング、再エネ導入支援など、トータルなエネルギーソリューションを提供しています。',
      },
      {
        title: '導入効果',
        content: 'エネルギーコスト平均20%削減、CO2排出量の大幅な削減、設備の効率的な運用、エネルギーの見える化による意識改革を実現します。',
      },
      {
        title: '対象施設',
        content: 'オフィスビル、商業施設、工場、病院、学校など、あらゆる施設に対応可能です。施設の規模や用途に応じた最適なシステムを提案します。',
      },
    ],
  },
  {
    icon: Building2,
    title: '不動産・リフォーム',
    description: '住宅リフォームや不動産関連の比較サービスを展開。お客様の最適な選択をサポートします。',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    color: 'from-accent-green to-emerald-500',
    details: [
      {
        title: 'リフォーム比較サービス',
        content: '全国の優良リフォーム会社から、お客様のニーズに合った最大5社の見積もりを無料で比較できるサービスを提供しています。',
      },
      {
        title: '対応範囲',
        content: 'キッチン・バス・トイレなどの水回りリフォーム、外壁・屋根塗装、内装リフォーム、増改築、オール電化、エコリフォームなど幅広く対応しています。',
      },
      {
        title: 'サービスの特徴',
        content: '厳選された優良企業のみを紹介、複数社の見積もりを簡単比較、専門スタッフによる無料相談、施工後のアフターフォローまで充実したサポート体制を整えています。',
      },
      {
        title: '実績',
        content: '年間相談件数10,000件以上、顧客満足度96%、全国対応可能、豊富な施工実績を持つ信頼できるサービスです。',
      },
    ],
  },
  {
    icon: TrendingUp,
    title: 'M&A・新規事業',
    description: '再エネ関連企業のM&Aや新規事業開発を通じて、業界全体の成長に貢献しています。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    color: 'from-accent-red to-pink-500',
    details: [
      {
        title: 'M&A仲介サービス',
        content: '再生可能エネルギー業界に特化したM&A仲介サービスを提供しています。太陽光発電事業の売買、発電所の売買、企業の事業承継など、業界の知見を活かしたマッチングを行います。',
      },
      {
        title: '取り扱い案件',
        content: '太陽光発電所の売買、風力発電事業のM&A、蓄電池関連企業のM&A、エネルギー関連サービス企業の事業承継など、再エネ業界全般をカバーしています。',
      },
      {
        title: '新規事業開発',
        content: '市場のニーズを捉えた新規事業の企画・開発を行っています。業界のトレンドを先取りし、新しい価値を創造するビジネスモデルを構築します。',
      },
      {
        title: '強み',
        content: '再エネ業界での豊富なネットワーク、専門知識を持つアドバイザー陣、迅速な案件対応、機密保持の徹底により、安心してご相談いただけます。',
      },
    ],
  },
]

export function BusinessSection() {
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null)

  return (
    <>
      <section id="business" className="py-20 section-white section-divider">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">事業内容</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              再生可能エネルギーを中心に、持続可能な社会の実現に向けた多様な事業を展開しています
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {businesses.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all overflow-hidden cursor-pointer"
                onClick={() => setSelectedBusiness(business)}
              >
                {/* 画像 */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={business.image}
                    alt={business.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{business.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{business.description}</p>

                  <button className="text-[#FF8C00] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    もっと見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* モーダル */}
      <AnimatePresence>
        {selectedBusiness && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedBusiness(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
            >
              {/* モーダルヘッダー */}
              <div className={`relative h-64 bg-gradient-to-br ${selectedBusiness.color}`}>
                <Image
                  src={selectedBusiness.image}
                  alt={selectedBusiness.title}
                  fill
                  className="object-cover opacity-30"
                />
                <button
                  onClick={() => setSelectedBusiness(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors z-10"
                  aria-label="閉じる"
                >
                  <X size={24} className="text-gray-800" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <selectedBusiness.icon className="text-white" size={32} />
                    </div>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-white"
                  >
                    {selectedBusiness.title}
                  </motion.h2>
                </div>
              </div>

              {/* モーダルコンテンツ */}
              <div className="p-6 md:p-8 space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {selectedBusiness.description}
                </motion.p>

                {selectedBusiness.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-[#FF8C00] pl-4">
                      {detail.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed pl-4">
                      {detail.content}
                    </p>
                  </motion.div>
                ))}

                {/* 閉じるボタン */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 text-center"
                >
                  <button
                    onClick={() => setSelectedBusiness(null)}
                    className="px-8 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FFB900] text-white font-semibold rounded-full hover:shadow-lg transition-all"
                  >
                    閉じる
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
