import { SectionHeading } from './SectionHeading'
import { projects } from '../data/projects'
import { accentBg } from '../lib/accents'

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="03" title="PROJETOS" accent="blast" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`pixel-card p-6 ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center border-2 border-night ${accentBg[project.color]} font-pixel text-2xl text-night`}
                >
                  {project.initial}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-pixel text-sm text-frost">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="border-2 border-amber px-2 py-0.5 font-pixel text-[9px] text-amber">
                        DESTAQUE
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-ghost">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border-2 border-line px-2 py-1 text-xs text-ghost"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {project.link && (
                    <a
                      href={project.link}
                      className="mt-4 inline-block font-pixel text-[10px] text-mint hover:text-cyber"
                    >
                      VER MAIS {'->'}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
