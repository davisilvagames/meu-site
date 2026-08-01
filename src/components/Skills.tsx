import { SectionHeading } from './SectionHeading'
import { skillCategories } from '../data/skills'
import { accentBg } from '../lib/accents'

export function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-20 bg-panel/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="02" title="HABILIDADES" accent="amber" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.label} className="pixel-card p-5">
              <p className="font-pixel text-[10px] text-frost">
                {category.label.toUpperCase()}
              </p>
              <ul className="mt-5 space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-frost">{skill.name}</span>
                      <span className="text-ghost">{skill.level}%</span>
                    </div>
                    <div
                      className="mt-1.5 h-3 border-2 border-line bg-night"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`Nível em ${skill.name}`}
                    >
                      <div
                        className={`h-full ${accentBg[category.color]}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
