export type Skill = {
  name: string
  level: number
}

export type SkillCategory = {
  label: string
  color: 'cyber' | 'mint' | 'amber' | 'blast'
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    color: 'cyber',
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Vite', level: 85 },
    ],
  },
  {
    label: 'Backend & Cloud',
    color: 'mint',
    skills: [
      { name: 'Firebase', level: 75 },
      { name: 'Node.js', level: 65 },
      { name: 'APIs REST', level: 70 },
      { name: 'Vercel', level: 85 },
    ],
  },
  {
    label: 'Jogos',
    color: 'amber',
    skills: [
      { name: 'Desenvolvimento de Jogos', level: 80 },
      { name: 'Pixel Art', level: 70 },
      { name: 'Game Design', level: 75 },
      { name: 'Mobile & Desktop', level: 80 },
    ],
  },
  {
    label: 'Ferramentas',
    color: 'blast',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Debugging', level: 75 },
      { name: 'Testes', level: 60 },
    ],
  },
]
