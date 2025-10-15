export function Footer() {
  return (
    <footer className="bg-[#FF8C00] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">株式会社グッドフェローズ</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                再エネ100%の未来へ。<br />
                変革に挑む戦友を募集しています。
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">採用情報</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li><a href="#vision" className="hover:text-white transition-colors">理念・ビジョン</a></li>
                <li><a href="#business" className="hover:text-white transition-colors">事業内容</a></li>
                <li><a href="#culture" className="hover:text-white transition-colors">働く環境</a></li>
                <li><a href="#people" className="hover:text-white transition-colors">社員ストーリー</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">お問い合わせ</h4>
              <div className="space-y-2 text-sm text-white/90">
                <p>
                  <a href="mailto:recruit@goodfellows.co.jp" className="hover:text-white transition-colors">
                    recruit@goodfellows.co.jp
                  </a>
                </p>
                <p>受付時間: 平日 10:00〜18:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/90">
            <p className="mb-2 font-semibold text-white">No Re-new, No Future</p>
            <p>&copy; {new Date().getFullYear()} Goodfellows Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
