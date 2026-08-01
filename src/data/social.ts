export type Social = {
  label: string
  href: string
  icon: 'github' | 'email'
}

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/davisilvagames', icon: 'github' },
  { label: 'Email', href: 'mailto:davi.adrianosilva13@gmail.com?subject=Contato pelo site', icon: 'email' },
]
