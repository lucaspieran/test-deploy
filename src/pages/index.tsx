/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Button from '@/components/Button'
import SliderIngeniacracy from '@/components/Ingeniacracy/Slider'
import {
  DownArrow,
  EmailIcon,
  Knowledge,
  PhoneIcon,
  Scalability,
  Sustainability,
  Thinking,
  TimeMarket,
} from '@/assets/icons'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Slider from '@/components/SliderHome/Slide'
import Router from 'next/router'
import SocialMedia from '@/components/Utils/SocialMedia'
import styles from '@/components/SliderHome/styles.module.css'
import KnowledgeSlider from '@/components/Ingeniacracy/KnowledgeSlider'
import homeGif from '../../public/bubble_video.gif'
import Link from 'next/link'
import CForm from '@/components/Forms/CForm'

export default function Home() {
  const [width, setWidth] = useState<number>()
  const [videoPlayed, setVideoPlayed] = useState(false)
  const videoContainerRef = useRef(null)

  const { t } = useTranslation('home')
  const [indexs, setIndexs] = useState({ currentIndex: 1, nextIndex: 2, prevIndex: 0 })

  const router = useRouter()
  const items = [
    {
      title: 'ourWork:sustainability',
      text: 'sustainabilityText',
      icon: Sustainability,
    },
    {
      title: 'ourWork:timeMarket',
      icon: TimeMarket,
    },
    {
      title: 'ourWork:scalability',
      icon: Scalability,
    },
    {
      title: 'ourWork:productThinking',
      icon: Thinking,
    },
    {
      title: 'ourWork:knowledgeCultivators',
      text: 'knowledgeCultivatorsText',
      icon: Knowledge,
    },
  ]
  const resources = [
    {
      img: router.locale === 'en' ? '/home/en/challengesallianz.jpg' : '/home/es/allianz.png',
      click: '/case-studies/allianz',
    },
    {
      img: router.locale === 'en' ? '/home/en/challengessantander.jpg' : '/home/es/santander.png',
      click: '/case-studies/santander',
    },
    {
      img: router.locale === 'en' ? '/home/en/challengesedenor.jpg' : '/home/es/edenor.png',
      click: '/case-studies/edenor',
    },
    {
      img:
        router.locale === 'en' ? '/home/en/challengescablevisión.jpg' : '/home/es/cablevision.png',
      click: '/case-studies/cablevision',
    },
    {
      img: router.locale === 'en' ? '/home/en/challengesank.jpg' : '/home/es/ank.jpg',
      click: '/case-studies/ank',
    },
    {
      img:
        router.locale === 'en'
          ? '/home/en/challengesbanco del sol.jpg'
          : '/home/es/banco del sol.png',
      click: '/case-studies/sol',
    },
    {
      img: router.locale === 'en' ? '/home/en/challengesgalicia.jpg' : '/home/es/galicia.png',
      click: '/case-studies/galicia',
    },
    {
      img: router.locale === 'en' ? '/home/en/challengesicbc.jpg' : '/home/es/icbc.png',
      click: '/case-studies/icbc',
    },
    {
      img: router.locale === 'en' ? '/home/en/challengesmol.jpg' : '/home/es/mol.png',
      click: '/case-studies/mol',
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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iframe = entry.target.querySelector('iframe')
          if (iframe) {
            if (!videoPlayed) {
              setVideoPlayed(true)
            }
          }
        }
      })
    }, options)

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [videoPlayed])

  return (
    <>
      <header className="gradient-background flex flex-col bg-black">
        <div className="nested-background  !z-11 h-full before:z-10 after:!z-10 lg:mt-20">
          <Image
            src={homeGif.src}
            width={500}
            height={500}
            className="absolute top-1 hidden lg:-right-[25%] lg:block lg:w-[400px] xl:-right-[10%] xl:w-[500px] "
            alt=""
          />

          <div className="custom-container relative z-20 flex h-full items-center  text-white">
            <div className="z-10 font-mono lg:basis-[75%]">
              <div className="flex h-full flex-col justify-center">
                <h1 className="mt-10 text-[32px] text-primary lg:text-[40px] 2xl:text-[57px]">
                  {t('title1')}
                </h1>

                <p className="mt-10 text-xl lg:hidden">
                  Solving the end-to-end of every strategic business needs with the right
                  technology-based solutions.
                </p>

                <Button
                  title={t('discoverMore')}
                  rightIcon
                  className="mt-5 w-fit font-nunito md:!px-12"
                  size="lg"
                  onClick={() => router.push('/about-us')}
                />

                <p className="ml-auto mt-10 hidden max-w-[500px] text-xl lg:block">{t('weHelp')}</p>
                <DownArrow className="mt-10 h-10 w-10 cursor-pointer fill-white/60 hover:fill-white lg:block" />
              </div>
            </div>
          </div>
        </div>
        <SliderIngeniacracy title="Leading the change" containerClassNames="z-10 bg-black" />
      </header>

      <section className="custom-container mt-20 lg:mt-32">
        <h2 className="text-center font-mono text-[28px] text-primary lg:text-[38px]">Drivers</h2>

        <div className="mt-10 grid grid-cols-2  gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {items.map((e, i) => (
            <div
              key={e.title}
              className={`flex cursor-pointer flex-col items-center ${
                i === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
              onClick={() => router.push('/our-work')}
            >
              <e.icon className="h-24 md:h-32" />

              <p className="mt-4 text-center text-[15px] text-white md:text-[20px]">{t(e.title)}</p>
            </div>
          ))}
        </div>

        <Link href={'/our-work'} target="_blank">
          <Button title={t('learnMore')} className="mx-auto mt-14" rightIcon />
        </Link>
      </section>

      <section>
        <div className="mt-40 text-center font-mono text-[24px] text-primary lg:text-[38px]">
          <p className="hidden sm:block ">Let our experience do the talking</p>

          <p className=" sm:hidden ">Let our experience</p>

          <p className="sm:hidden">do the talking</p>
        </div>

        <div className="mt-16 hidden lg:block">
          <Slider setIndexs={setIndexs}>
            {resources.map((resource, i) => {
              return (
                <Link
                  href={resource.click ?? ''}
                  key={i}
                  className={`${
                    i === indexs.prevIndex
                      ? styles.customCl
                      : i === indexs.nextIndex
                      ? styles.customCr
                      : styles.customC
                  } relative flex items-center justify-center md:flex-[0_0_32%] lg:mx-4 lg:h-[350px] 2xl:mx-10 2xl:h-[450px]`}
                >
                  <Image src={resource.img} fill alt="" className="h-[50%] w-full" />
                  <div className="z-40 pl-20"></div>
                </Link>
              )
            })}
          </Slider>
        </div>

        <div className="card-blend custom-container mt-10 flex flex-wrap justify-center gap-10 lg:hidden">
          {resources.map((resource, i) => {
            return (
              i < 3 && (
                <div
                  key={i}
                  className={`relative flex h-[250px] w-full items-center justify-start sm:max-w-[328px] `}
                >
                  <Image src={resource.img} fill alt="" className="h-[50%] w-full" />
                  <div className="z-40 pl-10"></div>
                </div>
              )
            )
          })}
        </div>

        <Button
          title={t('moreCases')}
          rightIcon
          className="mx-auto mt-10"
          onClick={() => Router.push('/case-studies')}
        />
      </section>

      <section className="custom-container mt-20 lg:!px-44">
        <h2 className="text-center font-mono text-[24px] text-primary lg:text-[38px]">
          Meet our solutions
        </h2>
        <div className="flex flex-col items-center lg:items-stretch">
          <div className="sticky top-20 mt-10 flex h-[400px] w-full max-w-[350px] flex-col-reverse  lg:max-w-full lg:flex-row">
            <div className="flex h-full basis-1/2 flex-col items-start justify-between rounded-b-[15px] bg-[#141414] p-4 lg:justify-between lg:!rounded-l-[15px] lg:rounded-b-none lg:p-10">
              <Image
                src={'/logos/startia.png'}
                height={200}
                width={400}
                alt="startia"
                className="w-[200px] lg:w-[400px]"
              />
              <div>
                <p className="text-lg font-semibold text-white">{t('startiaTitle')}</p>

                <p className="mt-2 hidden text-[14px] text-white lg:block">{t('startiaText')}</p>
              </div>

              <Button title={t('learnMore')} rightIcon variant="outline" />
            </div>

            <div className="relative h-[200px] grow lg:h-full">
              <Image
                src={'/home/solutions1.png'}
                alt="startia"
                fill
                className="rounded-t-[15px] object-cover lg:rounded-r-[15px] lg:rounded-tl-none"
              />
            </div>
          </div>
          <div className="sticky top-20 mt-10 flex h-[400px] w-full max-w-[350px] flex-col lg:mt-0  lg:max-w-full lg:flex-row">
            <div className="relative h-[200px] grow lg:h-full lg:basis-1/2">
              <Image
                src={'/home/solutions2.png'}
                fill
                alt="startia"
                className="rounded-t-[15px] object-cover lg:!rounded-l-[15px] lg:rounded-t-none"
              />
            </div>

            <div className="flex h-full basis-1/2 flex-col items-start justify-between rounded-b-[15px] bg-[#6B3686] p-4 lg:justify-between lg:!rounded-b-none lg:!rounded-r-[15px] lg:p-10">
              <Image
                src={'/logos/devify.png'}
                height={100}
                width={280}
                alt="devify"
                className="h-[50px] w-[150px] lg:h-[120px]  lg:w-[300px]"
              />
              <p className="text-lg font-semibold text-white">Ready to code.</p>

              <p className="hidden text-white lg:block">{t('devify')}</p>

              <Button title={t('learnMore')} rightIcon variant="outline" />
            </div>
          </div>
          <div className="sticky top-20 mt-10 flex h-[400px] w-full max-w-[350px] flex-col-reverse lg:mt-0  lg:max-w-full lg:flex-row">
            <div className="flex h-full basis-1/2 flex-col items-start justify-between rounded-b-[15px] bg-black p-4 lg:justify-between lg:!rounded-l-[15px] lg:rounded-b-none lg:p-10">
              <Image
                src={'/logos/goElevate.png'}
                height={150}
                width={280}
                alt="devify"
                className="w-[200px] lg:w-[340px]"
              />

              <p className="text-lg font-semibold text-white">{t('goElevateTitle')}</p>
              <p className="hidden text-white lg:block">{t('goElevateText')}</p>

              <Button title={t('learnMore')} rightIcon variant="outline" />
            </div>

            <div className="relative flex h-full  grow basis-1/2 items-center rounded-r-[15px] pl-10">
              <Image
                src={'/home/solutions3.png'}
                alt="startia"
                fill
                className="rounded-t-[15px] lg:rounded-l-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container rounded-[16px]">
        <div
          className="frame-container pointer-events-none mt-24 rounded-[16px] sm:!pt-0"
          ref={videoContainerRef}
        >
          {width && width > 640 ? (
            <iframe
              width="1280"
              height="720"
              src={`https://www.youtube.com/embed/${
                router.locale === 'en' ? 'lZoz9NjawF0' : 'Uem2A3YQKrI'
              }?autoplay=${
                !videoPlayed ? 0 : 1
              }&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${
                router.locale === 'en' ? 'lZoz9NjawF0' : 'Uem2A3YQKrI'
              }`}
              title="Ingenia - About us"
              className={`delay-700 duration-1000 ease-out sm:block ${
                !videoPlayed ? 'opacity-0' : 'opacity-100'
              }`}
            ></iframe>
          ) : (
            <iframe
              width="482"
              height="856"
              src={`https://www.youtube.com/embed/${
                router.locale === 'en' ? 'dtC-wUgKIt0' : 'IMdw97tX0o8'
              }?autoplay=${
                !videoPlayed ? 0 : 1
              }&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&loop=1&playlist=${
                router.locale === 'en' ? 'dtC-wUgKIt0' : 'IMdw97tX0o8'
              }`}
              title="Ingenia - About us"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className={` delay-700 duration-1000 ease-out sm:block ${
                !videoPlayed ? 'opacity-0' : 'opacity-100'
              }`}
            ></iframe>
          )}
        </div>
      </section>

      <h2 className="mt-20 text-center font-mono text-3xl text-primary">
        Trust technology advisor
      </h2>

      <div className="my-16">
        <KnowledgeSlider
          images={[
            '/caseStudies/allianz.png',
            '/caseStudies/ank.png',
            '/caseStudies/cablevision.png',
            '/caseStudies/edenor.png',
            '/caseStudies/galicia.png',
            '/caseStudies/icbc.png',
            '/caseStudies/mol.png',
            '/caseStudies/santander.png',
          ]}
        />
      </div>

      <section className="gradient-background  mt-10 !h-fit overflow-hidden bg-black">
        <div className="nested-background">
          <div className="custom-container z-20 flex flex-col py-20 lg:flex-row lg:py-56">
            <div className="z-20 flex basis-1/2 flex-col justify-between">
              <div>
                <p className="font-mono text-[30px] text-white lg:text-[38px]">
                  {t('thisIsWhere')}
                </p>

                <p className="mt-8 font-mono text-[28px] text-white">{t('letsTalk')}</p>
              </div>

              <div className="hidden flex-col gap-10 lg:flex">
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-1 text-white">
                    <PhoneIcon className="h-4" />
                    <p>+549 11 3645 8835</p>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <EmailIcon className="h-4" />
                    <p>info@ingenia.la</p>
                  </div>
                </div>

                <div className="w-1/3">
                  <SocialMedia className="gap-4" />
                </div>
              </div>
            </div>
            <div className="z-10 mt-10 lg:mx-auto lg:mt-0">
              <CForm />
            </div>
            <div className="mt-10 flex flex-col gap-4 lg:hidden">
              <div className="flex items-center gap-1 text-white">
                <PhoneIcon className="h-4" />
                <p>+549 11 3645 8835</p>
              </div>

              <div className="flex items-center gap-3 text-white">
                <EmailIcon className="h-4" />
                <p>info@ingenia.la</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['home', 'ourWork', 'common'])),
    },
  }
}
