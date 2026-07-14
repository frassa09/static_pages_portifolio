import { useState, useCallback } from 'react';

function handleAnchorClick(e, href, onClose) {
  if (href?.startsWith('#')) {
    e.preventDefault()
    const id = href.replace(/^#/, '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    onClose?.()
  }
}

export default function Navbar({ links, ctaText = 'Get Started', ctaHref = '#', rightExtra }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobile = useCallback(() => setMobileMenuOpen(false), [])

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">
              {links?.[0]?.brand || 'Brand'}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links?.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                onClick={(e) => handleAnchorClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            {rightExtra && <div className="ml-2">{rightExtra}</div>}
            <a
              href={ctaHref}
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              onClick={(e) => handleAnchorClick(e, ctaHref)}
            >
              {ctaText}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {rightExtra}
            <button
              className="flex items-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {links?.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="block text-gray-600 hover:text-gray-900"
                onClick={(e) => handleAnchorClick(e, link.href, closeMobile)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaHref}
              className="block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium text-center hover:bg-gray-800"
              onClick={(e) => handleAnchorClick(e, ctaHref, closeMobile)}
            >
              {ctaText}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
