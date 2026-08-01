import { navItems } from '../data/nav'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-line bg-panel/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:px-6 md:flex-row md:justify-between">
        <p className="font-pixel text-[10px] text-ghost">
          © {year} DAVI SILVA
        </p>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs text-ghost hover:text-mint"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-ghost">
          Feito com React + Tailwind + muita nostalgia
        </p>
      </div>
    </footer>
  )
}
