export type Social = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email'
}

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/seu-usuario', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/seu-usuario', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:seu@email.com', icon: 'email' },
]
