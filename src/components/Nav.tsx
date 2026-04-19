'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface NavItem {
  href: string
  label: string
  children?: { href: string; label: string; description?: string }[]
}

const navItems: NavItem[] = [
  {
    href: '/life-stages',
    label: 'Life Stages',
  },
  {
    href: '/female',
    label: 'Female',
    children: [
      { href: '/female', label: 'Overview', description: 'All female life stages' },
      { href: '/female/perimenopause', label: 'Perimenopause', description: 'The deep-dive guide' },
      { href: '/female/perimenopause/am-i-in-perimenopause', label: 'Am I in Perimenopause?', description: 'Checklist & self-assessment' },
      { href: '/symptoms', label: 'Symptoms', description: 'All 10 symptom clusters' },
      { href: '/timeline', label: 'Timeline', description: 'When symptoms appear' },
      { href: '/what-helps', label: 'What Helps', description: 'Evidence-rated treatments' },
      { href: '/labs', label: 'Tests & Labs', description: 'What to ask your doctor' },
    ],
  },
  {
    href: '/male',
    label: 'Male',
    children: [
      { href: '/male', label: 'Overview', description: 'All male life stages' },
      { href: '/male/andropause', label: 'Andropause', description: 'Testosterone decline & symptoms' },
    ],
  },
  {
    href: '/hormones',
    label: 'Hormones',
    children: [
      { href: '/hormones', label: 'All Hormones', description: '14 hormones explained' },
      { href: '/hormones/map', label: 'Hormone Map', description: 'How they all connect' },
    ],
  },
  {
    href: '/lifestyle',
    label: 'Resources',
    children: [
      { href: '/lifestyle', label: 'Lifestyle & Hormones', description: 'Exercise, diet, sleep, stress' },
      { href: '/mental-health', label: 'Mental Health', description: 'Anxiety, depression, PMDD' },
      { href: '/talk-to-your-doctor', label: 'Talk to Your Doctor', description: 'Scripts, tests, advocacy' },
      { href: '/glossary', label: 'Glossary', description: 'Plain-language definitions' },
    ],
  },
  { href: '/sources', label: 'Sources' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🧬</span>
            <span className="font-semibold text-stone-800 text-lg tracking-tight">
              Hormonal Health
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-0.5 w-56 bg-white border border-stone-200 rounded-xl shadow-lg py-1.5 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 hover:bg-stone-50 transition-colors ${
                          pathname === child.href ? 'bg-amber-50' : ''
                        }`}
                      >
                        <div className={`text-sm font-medium ${pathname === child.href ? 'text-amber-800' : 'text-stone-800'}`}>
                          {child.label}
                        </div>
                        {child.description && (
                          <div className="text-xs text-stone-400 mt-0.5">{child.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-1 border-t border-stone-100 pt-3">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-0.5 space-y-0.5">
                    {item.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-1.5 rounded-lg text-xs text-stone-500 hover:text-stone-800 hover:bg-stone-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
