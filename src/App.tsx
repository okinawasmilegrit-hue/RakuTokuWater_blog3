import { CheckCircle2, Droplets, Baby, Coffee, Package, ShieldCheck, Check } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="font-sans text-[#2c3e50] bg-[#f4f7f9] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#08203c]/80 to-[#08203c]/90" />
        
        <div className="relative z-20 px-4 md:px-8 max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-lg md:text-xl font-medium mb-4 tracking-wide"
          >
            家族の成長に合わせて、お水選びも変わる？
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-3xl md:text-5xl font-bold leading-tight"
          >
            水を使う量が増えてきたら？<br />
            ボトル型から「水道直結型」への<br className="hidden md:block"/>乗り換えが選ばれる理由
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 md:px-6 py-12 flex flex-col gap-8">
        
        {/* Intro */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100">
          <p className="leading-relaxed mb-4">
            いつでも美味しい冷水と、熱々のお湯がすぐに出るボトル型のウォーターサーバー。<br />
            「一度使い始めたら、もうサーバーの無い生活には戻れない！」というくらい便利ですよね。毎日の水分補給やコーヒー、赤ちゃんのミルク作りに大活躍しているご家庭も多いと思います。
          </p>
          <p className="leading-relaxed font-medium text-lg text-[#0d4f7a]">
            ライフスタイルの変化で「お水の使い方」も変わってきませんか？
          </p>
          <p className="leading-relaxed mt-4">
            導入した当初はすごく便利だったボトル型サーバーですが、ご家族の成長や生活リズムの変化によって、少しずつこんな「気づき」を感じることはありませんか？
          </p>
        </section>

        {/* Pain Points */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold border-l-4 border-[#0d4f7a] pl-4 mb-6">
            こんな「気づき」を感じていませんか？
          </h2>
          <ul className="flex flex-col gap-4">
            {[
              "子供が大きくなって、夏場の麦茶の消費量がすごい！",
              "お米を研ぐ時やお鍋など、お料理にももっと気軽にお水を使いたい",
              "消費ペースが早くなって、ボトルの受け取りや段ボールの保管場所が大変になってきた",
              "交換の頻度が増えて、12kgのボトルを持ち上げるのが腰に負担…",
              "「お水＝1本いくら」と料金が決まっていると、使う量が増えるほどお水代が気になって、つい「もったいないな…」とセーブしてしまう"
            ].map((text, i) => (
              <li key={i} className="flex flex-col sm:flex-row items-start gap-3 bg-[#f4f7f9] p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#00c2ff] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{text}</span>
              </li>
            ))}
          </ul>
          <p className="leading-relaxed mt-6">
            これは決して今のサーバーが悪いわけではなく、<strong className="text-[#0d4f7a]">「ご家庭のお水を使う量やライフスタイルが変わってきた」</strong>という自然なサインかもしれません。
          </p>
        </section>

        {/* Image Insert 1 */}
        <section className="w-full rounded-xl overflow-hidden shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="たっぷりの水を使うキッチン" 
            className="w-full h-auto object-cover max-h-[400px]"
          />
        </section>

        {/* Changing Server Choice */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold border-l-4 border-[#0d4f7a] pl-4 mb-6">
            ご家庭に合った「ウォーターサーバー」の選び方
          </h2>
          <p className="leading-relaxed mb-4">
            実は、家庭環境やお水の使用量によって、「最適なウォーターサーバーの正解」は変わります。
          </p>
          <p className="leading-relaxed mb-4">
            もし、「お水を飲む量がそれほど多くない」「月にボトル2本程度で収まっている」というご家庭なら、今のボトル型のままが合っているかもしれません。
          </p>
          <p className="leading-relaxed">
            一方で、<strong className="text-[#0d4f7a]">「お水代を気にせずお料理にもたっぷり使いたい」「ボトルの受け取りや交換、段ボールの処理にかかる負担を減らしたい」</strong>と感じ始めているなら、次の選択肢として「水道直結型」のウォーターサーバーを検討してみるのも一つの手です。
          </p>
        </section>

        {/* Direct Connections Features */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold border-l-4 border-[#0d4f7a] pl-4 mb-6">
            「定額制・補充なし」の水道直結型という選択肢
          </h2>
          <p className="leading-relaxed mb-8">
            最近、沖縄のママさんたちの間で少しずつ増えているのが、水道管に直接つないで使う「水道直結型ウォーターサーバー（浄水型）」への乗り換えです。<br />
            たとえば、沖縄の水質に合わせて開発された「ラクトク（楽得）ウォーター」などの直結型サーバーには、こんな特徴があります。
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="bg-[#f4f7f9] p-3 rounded-full shrink-0">
                <Coffee className="w-6 h-6 text-[#00c2ff]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#0d4f7a]">毎月定額で使い放題</h3>
                <p className="leading-relaxed text-sm md:text-base">どれだけ飲んでも、お料理にたっぷり使ってもお水代は変わりません。</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-[#f4f7f9] p-3 rounded-full shrink-0">
                <Package className="w-6 h-6 text-[#00c2ff]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#0d4f7a]">ボトルの注文・受け取り・重い交換がゼロ</h3>
                <p className="leading-relaxed text-sm md:text-base">水道から自動でお水が供給されるため、受け取りのスケジュール調整や重労働から解放されます。空きボトルのゴミや段ボールも出ません。</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-[#f4f7f9] p-3 rounded-full shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#00c2ff]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#0d4f7a]">沖縄専用フィルターで美味しい軟水に</h3>
                <p className="leading-relaxed text-sm md:text-base">「水道水だと味が落ちるのでは？」と心配になりますが、沖縄特有の硬い水や、PFASなどの不純物をしっかり除去する専用フィルターを通すため、むしろ「まろやかで美味しい！」と驚かれる方も多いんです。</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <img 
              src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/02/琉宮祭LP素材-2.png" 
              alt="沖縄専用5段階フィルター" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Image Insert 2 */}
        <section className="w-full rounded-xl overflow-hidden shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2000&auto=format&fit=crop" 
            alt="スッキリとしたキッチン空間" 
            className="w-full h-auto object-cover max-h-[400px]"
          />
          <p className="text-center text-sm md:text-base text-gray-500 mt-3 font-medium">
            ボトルがなくなることで、キッチンのスペースもスッキリ。
          </p>
        </section>

      </main>

      {/* Campaign Section */}
      <section className="bg-[#0d4f7a] text-white py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 leading-tight">
            【マルシェご来場者様限定】<br className="md:hidden" />
            まずは1ヶ月無料で試してみませんか？
          </h2>
          <p className="text-center leading-relaxed mb-8 max-w-2xl text-[#f4f7f9]">
            「本当にゴミが出なくなってラクになるか試してみたい」<br />
            「まずは味に納得してから決めたい」<br /><br />
            そんなあなたのために、マルシェでご縁があった皆様限定で、<strong className="text-[#ffea00] font-bold">【1ヶ月完全無料お試しキャンペーン】</strong>を実施中です！
          </p>

          <img 
            src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/04/ryugusai.png" 
            alt="マルシェご来場者様限定キャンペーン" 
            className="w-full max-w-2xl h-auto rounded-xl shadow-lg mb-8 border-4 border-white/10"
          />

          <div className="bg-white/10 p-6 md:p-8 rounded-xl border border-white/20 w-full max-w-2xl mb-10">
            <p className="leading-relaxed mb-6">
              初期の設置費用も、1ヶ月間どれだけ飲んでもお水代も、もし合わなかった場合の撤去費用も<strong className="text-[#ffea00] font-bold text-lg">【すべて0円】</strong>。勝手に自動更新されて課金されることは絶対にありませんので、まずは気軽におうちで体験してみてください。
            </p>
            <ul className="flex flex-col gap-3 font-bold text-lg">
              <li className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#ffea00]" /> 設置費用 0円
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#ffea00]" /> 1ヶ月のお水代 0円
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#ffea00]" /> 撤去費用 0円
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#ffea00]" /> 自動更新・課金なし
              </li>
            </ul>
          </div>

          <div className="w-full max-w-xl text-center">
            <p className="font-bold text-xl mb-4">
              「うちのキッチンにも置ける？」<br className="md:hidden"/>「まずは話だけ聞きたい」<br />
              という方も、LINEからお気軽にご相談ください！
            </p>
            <a 
              href="https://liff.line.me/1656783300-KLG90La1/landing?follow=%40248vmjzs&lp=DAX3HN&liff_id=1656783300-KLG90La1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto items-center justify-center bg-[#ffea00] text-[#0d4f7a] text-lg font-bold py-5 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              ▼ 無料お試し・お問い合わせはこちら
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 border-t border-slate-200">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <a href="#" className="mb-10 hover:opacity-90 transition-opacity">
            <img 
              src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/04/ラクトク-バナーのコピー.png" 
              alt="ラクトクウォーター バナー" 
              className="w-full max-w-[400px] h-auto rounded shadow-sm"
            />
          </a>
          
          <div className="text-center text-sm md:text-base text-gray-600 space-y-2">
            <p className="font-bold text-lg text-[#2c3e50]">株式会社SmileGrit</p>
            <p className="leading-relaxed max-w-xl mx-auto">
              沖縄県を拠点に、暮らしを豊かにするサービスを提供しています。「毎日の小さな幸せ」をテーマに、水・健康・デジタルの分野でお客様をサポートしています。
            </p>
          </div>
          
          <p className="text-xs text-gray-400 mt-12">
            © {new Date().getFullYear()} SmileGrit Co., Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
