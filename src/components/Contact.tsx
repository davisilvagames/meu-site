import { SectionHeading } from './SectionHeading'
import { SocialIcon } from './SocialIcon'
import { socials } from '../data/social'

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="05" title="CONTATO" accent="amber" />

        <p className="mb-8 max-w-md leading-relaxed text-ghost">
          Estou aberto a oportunidades, projetos e colaborações. Escolha um
          canal e me chame!
        </p>

        <ul className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target={social.icon === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                className="pixel-button inline-flex items-center gap-3 bg-panel-2 px-5 py-4 text-frost hover:text-mint"
              >
                <SocialIcon name={social.icon} className="h-5 w-5" />
                <span className="font-pixel text-xs">{social.label.toUpperCase()}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-ghost">
          <span className="text-frost">Email:</span>{' '}
          <a href="mailto:davi.adrianosilva13@gmail.com" className="hover:text-mint">
            davi.adrianosilva13@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
