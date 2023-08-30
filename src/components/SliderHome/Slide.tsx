import { NextArrow, PrevArrow } from '@/assets/icons'
import useEmblaCarousel from 'embla-carousel-react'

import { useCallback, useEffect } from 'react'

const Slider = ({ children, options, setIndexs }: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'center',
    loop: true,
    startIndex: 1,
    ...options,
  })
  useEffect(() => {
    if (emblaApi && setIndexs) {
      const updateStyles = () => {
        const newIndex = emblaApi.selectedScrollSnap()
        const slideCount = emblaApi.slideNodes().length
        const newNextIndex = (newIndex + 1) % slideCount
        const newPrevIndex = (newIndex - 1 + slideCount) % slideCount
        setIndexs({ curentIndex: newIndex, nextIndex: newNextIndex, prevIndex: newPrevIndex })
      }

      emblaApi.on('scroll', updateStyles)
      return () => {
        emblaApi.off('scroll', updateStyles)
      }
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <PrevArrow
        className="absolute left-10 top-[40%] z-10 h-8 cursor-pointer"
        onClick={scrollPrev}
      />
      <NextArrow
        className="absolute right-10 top-[40%] z-10 h-16 cursor-pointer"
        onClick={scrollNext}
      />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
    </div>
  )
}

export default Slider
