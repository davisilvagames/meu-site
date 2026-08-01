import { SectionHeading } from './SectionHeading'
import { experiences } from '../data/experience'

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-20 bg-panel/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="04" title="EXPERIÊNCIA" accent="cyber" />

        <ol className="relative ml-3 border-l-4 border-line">
          {experiences.map((item) => (
            <li key={item.role} className="relative pb-10 pl-8 last:pb-0">
              <span
                className="absolute -left-[14px] top-1 h-5 w-5 border-2 border-night bg-mint"
                aria-hidden="true"
              />
              <p className="font-pixel text-[10px] text-ghost">{item.period}</p>
              <h3 className="mt-2 font-pixel text-sm text-frost">{item.role}</h3>
              <p className="mt-1 text-sm text-mint">{item.place}</p>
              <p className="mt-3 text-sm leading-relaxed text-ghost">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
