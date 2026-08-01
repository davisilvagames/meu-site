import { socials } from '../data/social'
import { SocialIcon } from './SocialIcon'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(77,227,255,0.15),transparent_50%)]" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 md:py-24">
        <div className="flex-1 text-center">
          <p className="font-pixel text-[10px] text-cyber sm:text-xs">
            {'{ desenvolvedor de software }'}
          </p>

          <h1 className="mt-5 font-pixel text-3xl leading-snug text-frost sm:text-4xl md:text-5xl">
            OLÁ, EU SOU
            <br />
            <span className="text-mint">DAVI SILVA</span>
            <span className="animate-pulse text-amber">_</span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-ghost">
            Construo jogos, sites e experiências digitais com{' '}
            <span className="text-frost">React</span>,{' '}
            <span className="text-frost">TypeScript</span> e muito pixel art.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projetos"
              className="pixel-button bg-mint px-5 py-3 font-pixel text-xs text-night"
            >
              VER PROJETOS
            </a>
            <a
              href="#contato"
              className="pixel-button bg-panel-2 px-5 py-3 font-pixel text-xs text-frost"
            >
              FALAR COMIGO
            </a>
          </div>

          <ul className="mt-8 flex justify-center gap-3">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target={social.icon === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="pixel-button block bg-panel-2 p-3 text-frost hover:text-mint"
                >
                  <SocialIcon name={social.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
