import AboutUsSlider from '@/components/Sliders/AboutUsSlider'
import KnowledgeSlider from '@/components/Ingeniacracy/KnowledgeSlider'
import SliderIngeniacracy from '@/components/Ingeniacracy/Slider'
import SlideShow from '@/components/SlideShow'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import WantoChallengbg from '@/components/Utils/WantoChallengbg'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useScroll from '@/hooks/useScroll'

const Ingeniacracy = () => {
  const [width, setWidth] = useState<number>()
  const { t } = useTranslation(['aboutUs'])
  const { locale, query } = useRouter()
  const { ref: refSlider, scroll: scrollSlider } = useScroll()
  const { ref: ingeniacracy, scroll: scrollIng } = useScroll()
  const { ref: knowledge, scroll: scrollKnowledge } = useScroll()
  const { ref: join, scroll: scrollJoins } = useScroll()

  useEffect(() => {
    const scrollToSection: { [key: string]: () => void } = {
      timeline: scrollSlider,
      ingeniacracy: scrollIng,
      network: scrollKnowledge,
      join: scrollJoins,
    }
    for (const key in query) {
      if (query[key] && scrollToSection[key]) {
        scrollToSection[key]()
      }
    }
  }, [query])

  const slideOneImages = [
    '/ourTeam/slide2-1.png',
    '/ourTeam/slide2-2.png',
    '/ourTeam/slide2-3.png',
    '/ourTeam/slide2-4.png',
  ]

  const items = [
    {
      icon: '/home/peopleFIrst.png',
      title: 'thePerson',
      alt: 'people first',
    },
    {
      icon: '/home/selfManagment.png',
      title: 'selfManagment',
      alt: 'self managment',
    },
    {
      icon: '/home/openProccess.png',
      title: 'openProcesses',
      alt: 'open process',
    },
    {
      icon: '/home/collaborativeWork.png',
      title: 'colaborativeWork',
      alt: 'colaborative work',
    },
    {
      icon: '/home/activeLearning.png',
      title: 'learnability',
      alt: 'learnability',
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)

      window.onload = () => {
        handleResize()
      }
      handleResize()
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header className="relative flex h-screen overflow-hidden">
        <div className="frame-container pointer-events-none">
          {width && width > 640 ? (
            <iframe
              width="1280"
              height="720"
              src={`https://www.youtube.com/embed/${
                locale === 'en' ? 'aq8ylLNgbI8' : '52CoNwEhW14'
              }?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${
                locale === 'en' ? 'aq8ylLNgbI8' : '52CoNwEhW14'
              }`}
              title="Ingenia - About us"
              className="hidden sm:block"
            ></iframe>
          ) : (
            <iframe
              width="482"
              height="856"
              src={`https://www.youtube.com/embed/${
                locale === 'en' ? 'V20Fl1oM4JI' : '2xqGQsLF2O0'
              }?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${
                locale === 'en' ? 'V20Fl1oM4JI' : '2xqGQsLF2O0'
              }`}
              title="Ingenia - About us"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="sm:hidden"
            ></iframe>
          )}
        </div>
      </header>
      <section
        ref={refSlider}
        className="gradient-background relative flex !h-full flex-col overflow-hidden bg-black/25 text-white before:hidden after:!-right-[203px]  after:left-auto lg:h-[1100px] lg:justify-between lg:px-0 lg:py-0 lg:after:!-right-[403px]"
      >
        <Image src={'/Noise-Animation.png'} fill alt="" className="-z-10" />
        <div className="z-10 flex flex-col sm:px-6 lg:px-16">
          <div className="flex flex-col">
            <p
              className={`top-[120px] mt-20 px-4 pb-10 font-mono text-[32px] leading-[117.1%]  text-white lg:text-[56px] xl:absolute ${
                locale === 'en' ? 'xl:translate-x-[85%]' : 'xl:translate-x-[95%] '
              } xl:px-3`}
            >
              {t('onceUpon')}
            </p>
          </div>
          <div className="overflow-hidden sm:basis-full">
            <AboutUsSlider />
          </div>
        </div>
        <div className="mx-4 items-center justify-center gap-14 pb-10 lg:my-14 lg:mt-24 lg:flex">
          <Image
            alt="Ingenia"
            className="hidden lg:block"
            src={'/ingenia_logo.gif'}
            width={330}
            height={130}
          />
          <p className="mt-14 text-[18px] !leading-normal opacity-80 lg:mt-0 lg:w-1/4 lg:leading-5">
            {t('weAre')}
          </p>
        </div>
        <Image src={'/particles.gif'} fill className="-z-10 object-cover" alt="" />
      </section>
      <SliderIngeniacracy title="LEADING THE CHANGE" />
      <section className="mx-4 mt-24 " ref={ingeniacracy}>
        <p className="px-2 text-[18px] -tracking-tighter text-white lg:mx-auto lg:w-1/2 lg:px-0 lg:text-3xl">
          {t('weCommitment')}
        </p>
        <div className="mx-4 mt-10 flex flex-col justify-center gap-14 lg:flex-row">
          <SlideShow images={slideOneImages} />
          <div className="flex flex-col gap-9">
            {items.map(e => (
              <div className="flex items-center gap-4" key={e.title}>
                <Image src={e.icon} width={40} height={40} alt={e.alt} />
                <p className="text-lg text-white">{t(e.title)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-20 text-center  text-2xl text-[#08FFFF] lg:mt-auto lg:hidden">
          <p className="px-8 text-center  text-2xl text-[#08FFFF] lg:mt-auto">
            {t('weChoose').slice(0, 18)}
          </p>
          <p className=" text-2xl text-[#08FFFF] lg:mt-auto">{t('weChoose').slice(18, 43)}</p>
          <p className=" text-2xl text-[#08FFFF] lg:mt-auto">{t('weChoose').slice(43)}</p>
        </div>
        <div className="mt-20 hidden text-center text-2xl  text-[#08FFFF] lg:block">
          <p className="px-8 text-center  text-2xl text-[#08FFFF] lg:mt-auto">{t('weChoose')}</p>
        </div>
        <div className=" border-b border-b-white/[0.15] p-10" />
      </section>
      {/* Carrousel ntworks */}
      <section className=" mb-20 overflow-hidden lg:mb-28 lg:overflow-auto " ref={knowledge}>
        <p className="mt-20 text-center font-mono text-3xl text-white/[.70] lg:pb-[50px]">
          {t('knowledgeNetwork')}
        </p>
        <KnowledgeSlider />
      </section>
      <div ref={join as any}>
        <WantoChallengbg />
      </div>
    </>
  )
}

export default Ingeniacracy

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['aboutUs'])),
    },
  }
}
