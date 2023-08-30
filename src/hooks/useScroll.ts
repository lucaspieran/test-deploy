import { useRef } from 'react'

const useScroll = () => {
  const ref = useRef<HTMLElement | HTMLDivElement>(null)

  const scroll = () => ref?.current?.scrollIntoView({ behavior: 'smooth' })

  return { ref, scroll }
}

export default useScroll
