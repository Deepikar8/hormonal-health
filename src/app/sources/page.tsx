import { sources, typeLabels } from "@/data/sources"
import Link from "next/link"

const typeColors: Record<string, string> = {
  guideline: "bg-violet-100 text-violet-800",
  study: "bg-blue-100 text-blue-800",
  rct: "bg-green-100 text-green-800",
  review: "bg-amber-100 text-amber-800",
  registry: "bg-stone-100 text-stone-700",
}

export default function SourcesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <div className="text-sm text-stone-500 mb-2">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">›</span>
          <span>Sources</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Sources & Evidence Base
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          Every claim on this site is grounded in peer-reviewed research or clinical guidelines.
          Click any title to read the original source.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 text-sm text-amber-800">
        <strong>A note on DOI links:</strong> Each title links directly to the published paper via DOI
        or to the authoritative source. Some papers are behind journal paywalls — in those cases,
        searching the title in <a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900">PubMed</a> or{" "}
        <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900">Google Scholar</a> will
        find the abstract, and preprint or open-access versions are often available.
      </div>

      <div className="space-y-4">
        {sources.map((source) => (
          <div
            key={source.id}
            className="bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-300 transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-stone-900 hover:text-amber-700 hover:underline transition-colors leading-snug group flex items-start gap-2"
              >
                <span className="shrink-0 mt-0.5 text-stone-300 group-hover:text-amber-500 transition-colors">
                  ↗
                </span>
                {source.title}
              </a>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${typeColors[source.type]}`}>
                {typeLabels[source.type]}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500 mb-3">
              {source.authors && <span>{source.authors}</span>}
              {source.journal && (
                <>
                  {source.authors && <span>·</span>}
                  <span className="italic">{source.journal}</span>
                </>
              )}
              <span>·</span>
              <span>{source.year}</span>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">{source.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-stone-50 border border-stone-200 rounded-xl p-6 text-sm text-stone-600">
        <h2 className="font-semibold text-stone-800 mb-2">Additional resources</h2>
        <ul className="space-y-2">
          {[
            { label: "North American Menopause Society (NAMS)", url: "https://www.menopause.org" },
            { label: "British Menopause Society", url: "https://thebms.org.uk" },
            { label: "SWAN Study — Study of Women's Health Across the Nation", url: "https://www.swanstudy.org" },
            { label: "Endocrine Society Clinical Practice Guidelines", url: "https://www.endocrine.org/clinical-practice-guidelines" },
            { label: "AHRQ — Comparative Effectiveness of Menopausal Therapies", url: "https://effectivehealthcare.ahrq.gov/products/menopause/research" },
          ].map((r) => (
            <li key={r.url}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:underline font-medium"
              >
                ↗ {r.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
