import { Knowledge, Scalability, Sustainability, Thinking, TimeMarket } from '@/assets/icons'
import Button from '../Button'
import Router from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Step } from '../Driver/Step'

export const Carousel = () => {
  const [indexs, setIndexs] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'y',
    align: 'start',
  })

  const { t } = useTranslation('ourWork')

  useEffect(() => {
    if (emblaApi) {
      const updateStyles = () => {
        const newIndex = emblaApi.selectedScrollSnap()
        setIndexs(newIndex)
      }

      emblaApi.on('scroll', updateStyles)
      return () => {
        emblaApi.off('scroll', updateStyles)
      }
    }
  }, [emblaApi])

  const items = [
    {
      title: 'sustainability',
      text: 'sustainabilityText',
      icon: Sustainability,
      right: true,
    },
    {
      title: 'timeMarket',
      text: 'timeMarketText',
      icon: TimeMarket,
      right: false,
    },
    {
      title: 'scalability',
      text: 'scalabilityText',
      icon: Scalability,
      right: true,
    },
    {
      title: 'productThinking',
      text: 'productThinkingText',
      icon: Thinking,
      right: false,
    },
    {
      title: 'knowledgeCultivators',
      text: 'knowledgeCultivatorsText',
      icon: Knowledge,
      right: true,
    },
  ]

  return (
    <div className="embla mt-10 flex min-h-[500px] !p-0 sm:hidden">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container min-h-[500px] gap-16">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${
                item.title === 'sustainability'
                  ? '!pt-6'
                  : item.title === 'scalability'
                  ? '!pt-2'
                  : item.title === 'productThinking'
                  ? '!pt-10'
                  : ''
              } embla__slide flex`}
            >
              <div className="">
                <item.icon
                  className={`${
                    item.title === 'productThinking' && 'pt-8'
                  } h-[118px] w-[121px] object-cover`}
                />
                <div>
                  <p className="font-mono text-[24px] text-[#08FFFF]">{t(item.title)}</p>
                  <div className={`mt-6 flex gap-[29px]`}>
                    <p className="text-[18px] leading-[161%] text-white">{t(item.text)}</p>
                  </div>
                  <Button
                    title="See Case Studies"
                    rightArrowBlack
                    variant="primary"
                    className="mt-10"
                    onClick={() => Router.push('/case-studies')}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Step currentIndex={indexs} />
    </div>
  )
}
