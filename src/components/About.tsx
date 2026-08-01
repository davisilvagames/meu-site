import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="01" title="SOBRE MIM" accent="cyber" />

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-frost">
              Olá! Sou o <span className="text-mint">Davi</span>, um
              desenvolvedor de software apaixonado por tecnologia e pelo mundo
              dos games.
            </p>
            <p className="mt-4 leading-relaxed text-ghost">
              Comecei minha jornada aprendendo na prática, construindo projetos
              reais. Hoje desenvolvo o <strong className="text-frost">Retro Rumble</strong>,
              um jogo de plataforma 2D em pixel art completo — com login,
              salvamento na nuvem, loja in-game e vários chefes — que me ensinou
              do design ao deploy.
            </p>
            <p className="mt-4 leading-relaxed text-ghost">
              Meu objetivo é evoluir constantemente como{' '}
              <strong className="text-frost">desenvolvedor de software remoto</strong>,
              escrever código limpo e criar experiências que as pessoas amem
              usar.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="pixel-card p-5">
              <p className="font-pixel text-[10px] text-amber">FICHA</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="text-ghost">Nome:</span>{' '}
                  <span className="text-frost">Davi</span>
                </li>
                <li>
                  <span className="text-ghost">Área:</span>{' '}
                  <span className="text-frost">Desenvolvimento de Software</span>
                </li>
                <li>
                  <span className="text-ghost">Base:</span>{' '}
                  <span className="text-frost">Brasil</span>
                </li>
                <li>
                  <span className="text-ghost">Status:</span>{' '}
                  <span className="text-mint">disponível para projetos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
