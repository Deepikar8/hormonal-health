import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🧬</span>
              <span className="font-semibold text-stone-800">Hormonal Health</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Evidence-based, plain-language guides to hormonal health across all life stages —
              for both men and women.
            </p>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold text-stone-700 mb-3">Female</h3>
            <ul className="space-y-2 text-stone-500">
              <li><Link href="/female" className="hover:text-stone-800 transition-colors">Female overview</Link></li>
              <li><Link href="/female/perimenopause" className="hover:text-stone-800 transition-colors">Perimenopause</Link></li>
              <li><Link href="/symptoms" className="hover:text-stone-800 transition-colors">Symptoms</Link></li>
              <li><Link href="/timeline" className="hover:text-stone-800 transition-colors">Timeline</Link></li>
              <li><Link href="/what-helps" className="hover:text-stone-800 transition-colors">What Helps</Link></li>
              <li><Link href="/labs" className="hover:text-stone-800 transition-colors">Tests & Labs</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold text-stone-700 mb-3">Male</h3>
            <ul className="space-y-2 text-stone-500">
              <li><Link href="/male" className="hover:text-stone-800 transition-colors">Male overview</Link></li>
              <li><Link href="/male/andropause" className="hover:text-stone-800 transition-colors">Andropause</Link></li>
              <li><Link href="/life-stages" className="hover:text-stone-800 transition-colors">Life Stages</Link></li>
              <li><Link href="/hormones" className="hover:text-stone-800 transition-colors">Hormones</Link></li>
              <li><Link href="/hormones/map" className="hover:text-stone-800 transition-colors">Hormone Map</Link></li>
              <li><Link href="/sources" className="hover:text-stone-800 transition-colors">Sources</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold text-stone-700 mb-3">About</h3>
            <p className="text-stone-500 leading-relaxed text-xs">
              This site is for educational purposes only and does not constitute medical advice.
              All content is based on peer-reviewed research, clinical guidelines (NAMS, Endocrine Society,
              SWAN), and publicly available evidence.
            </p>
            <p className="text-stone-400 text-xs mt-3 leading-relaxed">
              Always consult a qualified healthcare provider for diagnosis and treatment decisions.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-400">
            Evidence-based hormonal health education. Not medical advice.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400">
            <Link href="/sources" className="hover:text-stone-600 transition-colors">Sources & Citations</Link>
            <Link href="/life-stages" className="hover:text-stone-600 transition-colors">Life Stages</Link>
            <span className="text-stone-300 hidden sm:inline">·</span>
            <span>Built by{' '}
              <a
                href="https://www.linkedin.com/in/deepika-rudra-murthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-amber-700 transition-colors underline underline-offset-2"
              >
                Deepika Rudra Murthy
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
