import type { Accent } from '../lib/accents'

export type Project = {
  title: string
  description: string
  tags: string[]
  color: Accent
  initial: string
  link?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Retro Rumble',
    description:
      'Jogo de plataforma 2D em pixel art com login, salvamento na nuvem, loja in-game, múltiplos chefes e suporte para computador e mobile. Publicado com Vercel.',
    tags: ['React', 'TypeScript', 'Vite', 'Firebase', 'Pixel Art'],
    color: 'mint',
    initial: 'R',
    link: '#contato',
    featured: true,
  },
  {
    title: 'Este Site',
    description:
      'Meu portfólio pessoal em pixel art: apresenta meus projetos, habilidades, experiências e formas de contato em um único lugar.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    color: 'cyber',
    initial: 'S',
    link: '#contato',
  },
  {
    title: 'Facebook Bot',
    description:
      'Bot em Python que faz postagens automáticas no Facebook, automatizando tarefas repetitivas e facilitando o gerenciamento de conteúdo.',
    tags: ['Python', 'Automação', 'API'],
    color: 'blast',
    initial: 'B',
    link: '#contato',
  },
  {
    title: 'DAVIXIA',
    description:
      'Inteligência artificial simples desenvolvida em Python, capaz de processar comandos e interagir com o usuário de forma inteligente.',
    tags: ['Python', 'IA', 'NLP'],
    color: 'amber',
    initial: 'D',
    link: '#contato',
  },
]
