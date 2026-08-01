import { useState } from 'react'
import { navItems } from '../data/nav'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const sectionIds = navItems.map((item) => item.href.replace('#', ''))
  const active = useActiveSection(sectionIds)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-line bg-night/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#inicio"
          className="font-pixel text-sm text-mint hover:text-cyber"
        >
          DAVI
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`border-b-2 pb-1 text-sm transition-colors ${
                    isActive
                      ? 'border-mint text-mint'
                      : 'border-transparent text-ghost hover:text-mint'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className="pixel-button bg-cyber p-2 text-night lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          id="menu-mobile"
          className="border-t-2 border-line bg-panel px-4 py-4 lg:hidden"
        >
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={item.href} className="border-b border-line/50 last:border-0">
                <a
                  href={item.href}
                  className={`block py-3 text-sm transition-colors ${
                    isActive ? 'text-mint' : 'text-frost hover:text-mint'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}
