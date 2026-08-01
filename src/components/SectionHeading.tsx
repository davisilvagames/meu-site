import type { Accent } from '../lib/accents'
import { accentText } from '../lib/accents'

type Props = {
  index: string
  title: string
  accent?: Accent
}

export function SectionHeading({ index, title, accent = 'mint' }: Props) {
  return (
    <div className="mb-10">
      <p className={`font-pixel text-[10px] sm:text-xs ${accentText[accent]}`}>
        {'//'} {index}
      </p>
      <h2 className="mt-3 font-pixel text-lg text-frost sm:text-2xl">{title}</h2>
    </div>
  )
}
