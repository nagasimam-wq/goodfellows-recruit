'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface InterviewSection {
  heading: string
  content: string
  quote?: string
}

interface Interview {
  title: string
  name: string
  department: string
  joinedYear: string
  image: string
  excerpt: string
  sections: InterviewSection[]
}

const interviews: Interview[] = [
  {
    title: '完璧じゃなくていい、一歩踏み出すことが大事',
    name: 'ジョン・ユンジ',
    department: 'マーケティングチーム',
    joinedYear: '2022年新卒入社',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    excerpt: 'ワーキングホリデーから始まった日本でのキャリア。ベンチャーならではの成長のチャンスを掴み、チームで成果を最大化する。',
    sections: [
      {
        heading: 'ワーキングホリデーから始まった日本でのキャリア',
        content: '韓国出身のジョンユンジさんがグッドフェローズに入社したのは、ワーキングホリデーで来日したことがきっかけ。日本の社会や文化に魅力を感じ、「この国で働いてみたい」と思った彼女は、コロナ禍の中、オンラインでの就職活動に挑戦しました。',
        quote: '正直、不安しかありませんでした。でも、グッドフェローズでは人事や法務の方々がすぐに連絡をくれて、ビザのことも丁寧にサポートしてくれたんですね。外国人として安心して働ける環境があると感じました。',
      },
      {
        heading: 'ベンチャーならではの"成長のチャンス"',
        content: '入社1年目から重要なプロジェクトを任され、リーダーとして活躍する機会もあったというジョンさん。グッドフェローズの魅力は、年次や肩書きに関係なく、挑戦できる環境があることだと語ります。開発部のコード課題や営業ロールプレイング研修、インサイドセールス部でのコールセンター研修など、どれも印象的でした。特にコール研修は、日本語に慣れていない中で毎日が緊張の連続。でも、ユーザーとの会話を通じて、実践的な力や知識が身につき、今の仕事にも役立っています。',
      },
      {
        heading: 'チームで成果を最大化するという考え方',
        content: 'グッドフェローズで働いて年数を重ねる中、ジョンさんの中に大きな変化が生まれました。以前は"自分の成果"ばかりを意識していました。でも今は、業務委託のメンバーとチームを組むことも増えて、"チームとして成果を出す"ことを考えるようになりました。',
        quote: '数字が一時的に下がっても、改善すれば必ず上がる。そう教えてもらってから、前向きに考えられるようになりました。',
      },
      {
        heading: 'スペシャリスト集団の中で、助け合う文化',
        content: '所属するマーケティングチームは、専門性の高いメンバーが集まるプロフェッショナル集団。それでも、互いに助け合う文化が根付いているといいます。誰かが困っていたら、すぐに声をかけて一緒に考える。石井さんは"パパみたい"な存在で、すごくフラットに相談できるんです。安心して働ける環境がここにはあります。',
      },
      {
        heading: '自分の仕事が誰かの役に立っている実感',
        content: 'ジョンさんがやりがいを感じる瞬間は、「誰かの役に立てた」と実感できた時。ユーザーや取引先から感謝の言葉をもらった時、社会に意味のある情報発信ができたと感じた時、すごく嬉しいです。グッドフェローズは努力をきちんと評価してくれる会社なので、モチベーションにもつながっています。',
      },
      {
        heading: 'ワークライフバランスと、これからのキャリア',
        content: '週3回の在宅勤務制度により、仕事とプライベートのバランスも保てているそう。好きな音楽を流したり、お気に入りのデスクグッズに囲まれたり。集中できる環境を自分でつくれるのが嬉しいです。今後はウェブディレクターとして、マーケティングとエンジニアリングの知識を活かして活躍の幅を広げたいと語ります。',
        quote: '技術と企画の両方を理解できる人になりたい。WordPressやHTMLは使えますが、これからはJavaScriptやCSSも学んで、もっと深くエンジニアと話せるようになりたいです。',
      },
      {
        heading: '未来の仲間へメッセージ',
        content: '完璧じゃなくていいんです。まずは一歩踏み出すことが大事。失敗しても、周りの仲間が支えてくれます。社会人生活って、思っているよりも面白いし、成長できるチャンスに溢れています。自分らしく働ける場所で、前向きにキャリアを重ねてください。',
      },
    ],
  },
  {
    title: '裁量のある環境で、自分らしく挑戦できる',
    name: '堀田健斗',
    department: '電源開発事業部',
    joinedYear: '2022年新卒入社',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    excerpt: '新卒から大きな裁量を持って働ける環境。自分のアイデアを形にし、成果を出す喜びを日々実感しています。',
    sections: [
      {
        heading: '「自由度の高さ」が入社の決め手。自分らしく挑戦できる環境',
        content: '大学時代、就職活動の軸にしていたのは「自由度」。堀田さんは、面接で聞いた「新規事業や子会社設立にも挑戦できる」「マーケティングにも関われる」といった話に強く惹かれ、グッドフェローズへの入社を決意しました。決め手は、会社のビジョンや制度ではなく、社員一人ひとりの裁量の大きさ。自分の意思で動ける環境に魅力を感じたそうです。',
      },
      {
        heading: '入社後に感じた"良い意味でのギャップ"',
        content: '実際に働いてみて驚いたのは、「プレッシャーがほとんどないこと」。売上目標やノルマに追われることなく、自分のペースで仕事に向き合える点に、心地よさと責任感を感じています。一方で、組織としての仕組みやルールがまだ整っていない部分もあり、そこに改善の余地を見出しているとのこと。自由度が高いからこそ、自ら仕組みを作る側に回る意識も芽生えたそうです。',
      },
      {
        heading: 'OJTで得た「営業職の枠を超えた経験」',
        content: '入社後のOJTでは、山奥での電源設置業務や、3日間でToDoリストアプリを開発するなど、営業職の枠を超えた多様な経験を積みました。現場での実務を通じて、事業のリアルを肌で感じられたことが、現在の業務への理解と納得感につながっています。',
      },
      {
        heading: '電源開発事業部を選んだ理由と現在の業務',
        content: '電源事業部を希望した理由は、「実態とつながった事業」であることと、「一人完結型の働き方」ができる点。現在は、顧客とのやり取りから現地調査、提案、施工管理までを一貫して担当しています。自分の判断で進められる場面が多く、責任とやりがいを感じながら日々業務に取り組んでいます。',
      },
      {
        heading: '成長を実感する瞬間',
        content: '「問題の本質を見極め、解決の方向性を示せたときに、自分の成長を強く感じる」と語る堀田さん。抽象度の高い課題にも対応できるようになり、以前よりも広い視野で物事を捉えられるようになったことが自信につながっています。',
      },
      {
        heading: '社内の雰囲気と人間関係',
        content: 'グッドフェローズの社内は「穏やかで優しい人が多い」と感じているそうです。連絡のタイミングや引き継ぎの丁寧さなど、相手への配慮が自然と根付いている文化があり、安心して働ける環境が整っています。困ったときには気軽に相談できる雰囲気があり、チームとしての一体感も感じられるとのこと。',
      },
      {
        heading: '仕事のやりがいと今後の展望',
        content: '仕事のやりがいを感じるのは、「会社の利益」と「顧客の喜び」が両立できた瞬間。自分の提案が顧客に喜ばれ、かつ会社にも貢献できたときに、最も充実感を得られるそうです。今後はプレイヤーとしてさらに成長し、新たな事業を立ち上げて会社の柱に育てていきます。「自由度の高さ」を活かしながら、会社に貢献できる実力と器を磨いていくことが目標です。',
      },
    ],
  },
  {
    title: '裁量と挑戦を味方に、仕組みづくりで組織を前進させる',
    name: '平川徹',
    department: 'インサイドセールス部部長',
    joinedYear: '2019年中途入社',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop',
    excerpt: '前職での経験を活かし、インサイドセールスの仕組みを構築。組織の成長とメンバーの育成に尽力しています。',
    sections: [
      {
        heading: '「裁量のある環境で、自分のアイデアを形にできる」',
        content: '前職の経験から平川さんが次に選んだのは、健全な経営を続ける小規模企業という観点からでした。社会的なニーズを満たしながら高い利益率を維持するグッドフェローズに魅力を感じ、入社を決意しました。',
      },
      {
        heading: '入社後に感じた"良いギャップ"──提案が歓迎される文化',
        content: '入社して驚いたのは、想像以上に裁量が与えられたこと。会社は「ノー」と言わない文化があり、インサイドセールス部の立ち上げや新しい施策の導入、派遣社員を活用した採用など、数々の改善提案が実現されました。',
        quote: '前職では却下され続けたアイデアが、ここでは形になる──その違いに大きなやりがいを感じています',
      },
      {
        heading: '苦労を乗り越え、仕組みをつくる側へ',
        content: '営業とコールセンターの業務領域が曖昧だったのが入社当初の状況でした。平川さんは「明確なルールがないなら、自分で軸を作ろう」と考え、インサイドセールス部を立ち上げることで業務の標準化と効率化を推進しました。課題に対して受け身ではなく、能動的に動ける環境が、平川さんや会社全体の成長を後押ししています。',
      },
      {
        heading: '部下への指導──厳しさの中にある本気の向き合い',
        content: '新人社員への研修では、厳しさの中に「自ら考え、学ぶきっかけ」を与える姿勢を以て行っています。部下をきちんと見て、成長を促す指導を心がけています。',
      },
      {
        heading: '日々の業務とコミュニケーションスタイル',
        content: '平川さんの1週間は、部署朝礼での数字共有や課題確認、メンバーとの1on1ミーティング、営業活動、企画業務など多岐にわたります。Slackを活用したコミュニケーションでは、各自のペースを尊重しながらも、円滑な連携を実現しています。',
      },
      {
        heading: '柔軟な働き方と挑戦を後押しするカルチャー',
        content: 'グッドフェローズでは、週2日の在宅勤務が可能。「やりたいことを否定されない」文化が根付いており、挑戦する人にとっては最高の環境です。平川さんはこの柔軟性を活かし、日々新しい施策に取り組んでいます。',
      },
      {
        heading: '今後の目標と転職希望者へのメッセージ',
        content: '「1年以内に複数の新規事業を立ち上げたい」と語る平川さん。社内ベンチャーのような形で事業を推進していく意欲を持っています。',
        quote: '学歴や職歴がなくても、頭を使って仕事がしたいと思うなら、グッドフェローズは工夫次第でいくらでも自分を高められる場所です',
      },
    ],
  },
  {
    title: '未経験から業界の最前線へ──"つなぐ力"で事業を動かす営業へ',
    name: '石川和宏',
    department: 'M&A事業部／再エネメディア事業部',
    joinedYear: '2022年中途入社',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop',
    excerpt: '未経験からM&Aの最前線へ。経営との距離が近く、事業の全体像を見ながら働ける環境で成長を続けています。',
    sections: [
      {
        heading: '「未経験でも挑戦できる。再生可能エネルギー業界で、自分の価値を高めたい」',
        content: '石川さんがグッドフェローズへ転職を決めた理由は、再生可能エネルギーという成長分野に可能性を感じたからです。前職とは全く異なる業界への挑戦でしたが、「新しいことに挑戦したい」という想いが背中を押しました。',
      },
      {
        heading: '業界未経験でも活躍できる理由',
        content: '入社時は太陽光業界の知識ゼロで、専門用語が飛び交う打ち合わせでは、何を言っているか分からず、メモを取りながらファシリテーションをしていたそうです。それでも、グッドフェローズの「マッチングビジネス」という業態のおかげで、発電所などの現場経験がなくても仕事ができる環境が整っていました。徐々に知識を身につけながら成長できる点が、未経験者にとって大きな魅力だと語ります。',
      },
      {
        heading: '現在の業務──M&A事業部と再エネメディア事業部の両立',
        content: '現在は、M&A事業と再エネメディア事業を兼任しています。特にM&Aでは、売却企業の発掘から買い手との交渉までを担当し、1案件につき複数の会議をこなす日々。長尾社長や同僚と連携しながら、大きな案件を動かすやりがいを感じています。',
      },
      {
        heading: '経営との距離の近さと学び',
        content: '代表や役員と直接議論する機会が多く、経営者の視点を学べます。大手企業では得られない、貴重な経験ができています。事業の全体像を見ながら働けることが、大きな成長につながっています。',
      },
      {
        heading: '組織の課題と今後の展望',
        content: '営業は個人プレーが中心で、組織としてのまとまりが課題。自らがその中心となり、未来を発信できる存在になりたいと考えています。チームとして成果を最大化できる組織づくりを目指しています。',
      },
      {
        heading: '採用候補者へのメッセージ',
        content: '「未経験でも、几帳面で丁寧な仕事ができる人なら活躍できます」と語る石川さん。グッドフェローズの仕事は"0から1"ではなく、"AとBをつなぐ"マッチング型。',
        quote: '細やかな気配りと管理能力が求められるからこそ、誠実に向き合える人にこそチャンスがある職場です',
      },
    ],
  },
]

export function PeopleSection() {
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null)

  return (
    <>
      <section id="people" className="py-20 section-orange-light section-divider">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">社員ストーリー</h2>
            <div className="w-24 h-1 bg-[#FF8C00] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              <span className="font-bold text-[#FF8C00]">戦友</span>として共に挑戦する仲間たちの声をお届けします
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {interviews.map((interview, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedInterview(interview)}
                className="bg-white shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
              >
                {/* 社員画像 */}
                <div className="aspect-[4/3] relative bg-gray-200 overflow-hidden">
                  <Image
                    src={interview.image}
                    alt={interview.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
                    {interview.title}
                  </h3>

                  <div className="mb-4 space-y-1">
                    <p className="text-lg font-semibold text-[#FF8C00]">{interview.name}</p>
                    <p className="text-sm text-gray-600">{interview.department}</p>
                    <p className="text-sm text-gray-500">{interview.joinedYear}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm line-clamp-3">
                    {interview.excerpt}
                  </p>

                  <div className="mt-4 text-[#FF8C00] font-semibold text-sm flex items-center gap-2">
                    詳しく見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* モーダル */}
      <AnimatePresence>
        {selectedInterview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedInterview(null)}
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
              <div className="sticky top-0 bg-gradient-to-r from-[#FF8C00] to-[#FFB900] text-white p-6 md:p-8 z-10">
                <button
                  onClick={() => setSelectedInterview(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="閉じる"
                >
                  <X size={24} />
                </button>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl md:text-3xl font-bold mb-4 pr-12"
                >
                  {selectedInterview.title}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div>
                    <p className="text-xl font-bold">{selectedInterview.name}</p>
                    <p className="text-white/90">{selectedInterview.department}</p>
                    <p className="text-white/80 text-sm">{selectedInterview.joinedYear}</p>
                  </div>
                </motion.div>
              </div>

              {/* モーダルコンテンツ */}
              <div className="p-6 md:p-8 space-y-8">
                {selectedInterview.sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-[#FF8C00] pl-4">
                      {section.heading}
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-base md:text-lg pl-4">
                      {section.content}
                    </p>

                    {section.quote && (
                      <motion.blockquote
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="border-l-4 border-[#FFB900] bg-orange-50 p-4 md:p-6 rounded-r-lg italic text-gray-800 ml-4"
                      >
                        「{section.quote}」
                      </motion.blockquote>
                    )}
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
                    onClick={() => setSelectedInterview(null)}
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
