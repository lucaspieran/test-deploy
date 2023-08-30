import { DownArrow, DownArrowWithoutBorder } from '@/assets/icons'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

export default function AboutUsSlider({}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false })
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const { t } = useTranslation(['aboutUs'])

  useEffect(() => {
    if (emblaApi) {
      const updateIndex = () => {
        const current = emblaApi.selectedScrollSnap()
        setCurrentIndex(current)
      }

      emblaApi.on('scroll', updateIndex)
      return () => {
        emblaApi.off('scroll', updateIndex)
      }
    }
  }, [emblaApi])

  const slides = [
    {
      title: t('slide1'),
      img: '/about-us/slider1.png',
      year: 1999,
    },
    {
      title: t('slide2'),
      img: '/about-us/slider2.jpeg',
      year: 2004,
    },
    {
      title: t('slide3'),
      img: '/about-us/slider3.jpeg',
      year: 2014,
    },
    {
      title: t('slide4'),
      img: '/about-us/slider4.png',
      year: 2015,
    },
    {
      title: t('slide5'),
      img: '/about-us/slider5.jpeg',
      year: 2020,
    },
    {
      title: t('slide6'),
      img: '/about-us/slider6.jpeg',
      year: 2020,
    },
    {
      title: t('slide7'),
      img: '/about-us/slider7.jpeg',
      year: 2021,
    },
    {
      title: t('slide8'),
      img: '/about-us/slider8.jpeg',
      year: 2022,
    },
    {
      title: t('slide9'),
      img: '/about-us/slider9.jpeg',
      year: 2023,
    },
    {
      title: t('slide10'),
      img: '/about-us/slider10.jpeg',
      year: 2023,
    },
    {
      title: t('slide11'),
      img: '/about-us/slider11.jpeg',
      year: 2023,
    },
    {
      title: '',
      img: '',
      year: '',
    },
  ]

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <div className={`w-full lg:max-w-[90rem] xl:mt-28`}>
      <div
        onClick={scrollNext}
        className="absolute z-20 hidden h-7 w-[100px] cursor-pointer rounded-3xl  border  border-white sm:top-[330px]  sm:translate-x-[330px] lg:top-[500px] lg:block  lg:translate-x-[560px] xl:top-[400px]"
      >
        <div className="relative">
          <DownArrowWithoutBorder className="absolute left-2 top-[9px] h-2 w-3 rotate-[-90deg] cursor-pointer !fill-white stroke-white lg:block" />
        </div>
      </div>
      <div className="embla_viewport" ref={emblaRef}>
        <div
          className={`flex h-[380px] items-end lg:h-[700px]`}
          style={{ backfaceVisibility: 'hidden', touchAction: 'pan-y' }}
        >
          {slides.map((slide, i) => {
            return slide.title ? (
              <div className={`relative min-w-0 shrink-0 lg:pr-10`} key={i} onClick={scrollNext}>
                <div
                  style={{
                    background:
                      currentIndex === i
                        ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%)'
                        : 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #171717 90.33%)',
                  }}
                  className={`relative mx-2 rounded-[14.3px] duration-500 ${
                    currentIndex === i ? 'basis-[10%]' : 'lg:w-[300px] lg:!basis-[10%]'
                  }  ${
                    currentIndex === i
                      ? 'h-[360px] w-[280px] lg:min-h-[650px] lg:w-[500px]'
                      : 'h-[180px] w-[154px] lg:min-h-[346px] lg:w-[300px]'
                  } ${i === 10 && 'mr-560'}`}
                >
                  <div
                    className={`flex h-full flex-col  p-5 opacity-100  ease-in ${
                      currentIndex === i ? 'opacity-100 duration-500' : 'duration-100'
                    } ${currentIndex === i ? 'justify-between' : 'justify-end '}`}
                  >
                    <p
                      className={`${
                        currentIndex === i ? '' : 'hidden'
                      } text-[18px] font-bold text-white lg:text-[30px] lg:leading-[45px]`}
                    >
                      {slide.title}
                    </p>
                    <div
                      className={` mx-auto w-fit rounded-[18px] border border-white bg-black/60 py-1 font-mono text-base font-bold text-white md:text-[18px] lg:px-14 ${
                        currentIndex !== i
                          ? 'mx-0 justify-end px-6 text-[8px] lg:mx-auto'
                          : 'px-14 '
                      } ${i === currentIndex + 3 && 'lg:hidden'}
                      ${i === currentIndex + 1 && 'ml-0 pl-4 sm:ml-auto sm:px-6'}
                      `}
                    >
                      <span>{slide.year}</span>
                    </div>
                  </div>
                  <Image src={slide.img} fill alt="" className="-z-10 rounded-[15px]" />
                </div>
              </div>
            ) : (
              <div className="flex-[0_0_500px] lg:flex-[0_0_850px]"></div>
            )
          })}
        </div>
        <div
          className="absolute translate-x-[310px] translate-y-[-230px] lg:right-[20%] lg:hidden"
          onClick={scrollNext}
        >
          <DownArrow className=" h-7 w-7 translate-y-1 -rotate-90 cursor-pointer fill-white/60 hover:fill-white lg:block" />
        </div>
      </div>
    </div>
  )
}
