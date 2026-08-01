import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { SectionHeading } from './SectionHeading'
import { SocialIcon } from './SocialIcon'
import { socials } from '../data/social'

const SERVICE_ID = 'seu_service_id'
const TEMPLATE_ID = 'seu_template_id'
const PUBLIC_KEY = 'sua_public_key'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.currentTarget, PUBLIC_KEY)
      setStatus('sent')
      event.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="05" title="CONTATO" accent="amber" />

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="leading-relaxed text-ghost">
              Estou aberto a oportunidades, projetos e colaborações. Escolha um
              canal e me chame!
            </p>

            <ul className="mt-6 space-y-4">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target={social.icon === 'email' ? undefined : '_blank'}
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-frost hover:text-mint"
                  >
                    <span className="pixel-button bg-panel-2 p-2 text-frost">
                      <SocialIcon name={social.icon} className="h-5 w-5" />
                    </span>
                    {social.label}
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

          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="pixel-card space-y-4 p-5 sm:p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm text-ghost">Nome</span>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Seu nome"
                    className="mt-1.5 w-full border-2 border-line bg-night px-3 py-2 text-sm text-frost placeholder:text-ghost/60 focus:border-cyber focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-ghost">Email</span>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="seu@email.com"
                    className="mt-1.5 w-full border-2 border-line bg-night px-3 py-2 text-sm text-frost placeholder:text-ghost/60 focus:border-cyber focus:outline-none"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm text-ghost">Mensagem</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Escreva sua mensagem..."
                  className="mt-1.5 w-full resize-none border-2 border-line bg-night px-3 py-2 text-sm text-frost placeholder:text-ghost/60 focus:border-cyber focus:outline-none"
                />
              </label>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="pixel-button w-full bg-mint px-5 py-3 font-pixel text-xs text-night sm:w-auto disabled:opacity-60"
              >
                {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
              </button>
              {status === 'sent' && (
                <p className="text-sm text-mint">
                  Mensagem enviada com sucesso!
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-blast">
                  Erro ao enviar. Tente novamente ou me escreva pelo email.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
