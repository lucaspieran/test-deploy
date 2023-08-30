import {
  Img1,
  Img2,
  Img3,
  LetsCode,
  LoveSticker,
  NerdSticker,
  Sticker1Dev,
  Sticker2Dev,
  StickerCoding,
} from '@/assets/icons/devify'
import Button from '@/components/Button'
import useScroll from '@/hooks/useScroll'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Devify = () => {
  const { ref, scroll } = useScroll()
  const { t } = useTranslation('solutions')
  const items = [
    {
      img: '/solutions/card1.png',
      title: 'Code for it',
      text: t('devify.codeForIt'),
    },
    {
      img: '/solutions/card2.png',
      title: 'Squad as a Service',
      text: t('devify.deliverify'),
    },
    {
      img: '/solutions/card3.png',
      title: 'Deliverify',
      text: t('devify.sqaas'),
    },
  ]
  return (
    <>
      <header className="flex h-[300px] items-center bg-white pt-20 lg:h-[400px]">
        <div className="custom-container flex w-full items-center md:justify-between">
          <div className="relative hidden lg:block lg:basis-[230px]">
            <Sticker1Dev className="" />
            <Sticker2Dev className="relative left-16 top-[-20px]" />
            <StickerCoding className="absolute left-[70px] top-2" />
          </div>
          <Image src={'/devifyGif.gif'} width={250} height={200} alt="devify" className="mx-auto" />

          <div className="relative hidden items-center lg:flex">
            <LetsCode />
            <LoveSticker className="absolute left-10 top-[-80px]" />
            <NerdSticker className="ml-4" />
          </div>
        </div>
      </header>

      <section className="bg-[#6BCEB2] lg:h-[650px]">
        <div className="custom-container flex h-full flex-col justify-center lg:flex-row-reverse lg:items-center">
          <div className="flex justify-end md:hidden">
            <Sticker1Dev className="relative -top-12 right-[-4px]" />
            <Sticker2Dev className="relative -top-2 right-5" />
          </div>

          <div className="font-montserrat text-lg font-medium text-[#6B3686] lg:basis-[30%]">
            <p>{t('devify.materializing')}</p>
            <p className="lg:mt-10">{t('devify.through')}</p>

            <Button
              title="CHECK OUR PRODUCTS"
              variant="devify"
              className="mt-10 w-full !bg-[#FF5C35] text-white lg:w-[80%]"
              size="lg"
              onClick={scroll}
            />
          </div>
          <div className="relative mt-32 h-[400px] lg:basis-1/2">
            <Img1 className="absolute left-4 z-[3]" />
            <Img2 className="absolute -top-10 left-6 z-[2]" />
            <Img3 className="absolute -top-20 left-5 z-[1]" />
          </div>
        </div>
      </section>
      <div className="relative h-[300px] lg:h-[700px]">
        <Image
          src={'/solutions/devify1.jpeg'}
          alt="Picture of the author"
          fill
          className="object-cover saturate-0"
        />
      </div>

      <section className="min-h-screen  bg-devify pb-10" ref={ref}>
        <div>
          <h4 className="pt-14 text-center font-neue text-[41px] text-white">CHECK OUR PRODUCTS</h4>
        </div>

        <div className="custom-container mt-10">
          <div className="flex gap-3 overflow-x-scroll lg:justify-between lg:overflow-auto">
            {items.map(el => (
              <div
                className="flex h-[500px] w-[311px] shrink-0 flex-col justify-between rounded-[12px] bg-white p-3 lg:h-[650px] lg:w-[350px]"
                key={el.img}
              >
                <div className="flex flex-col">
                  <div className="relative flex h-[150px] items-center justify-center rounded-[8px] bg-[#6BCEB2] lg:h-[250px]">
                    <Image src={el.img} width={300} height={300} alt="" />
                  </div>

                  <p className="mt-4 text-center font-neue text-[41px] text-[#6B3686]">
                    {el.title}
                  </p>

                  <p className="text-center font-montserrat text-sm text-[#6B3686]">{el.text}</p>
                </div>

                <Link href="/contact-us" className="w-full font-montserrat text-white">
                  <Button title="More info" variant="devify" className="w-full" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['solutions'])),
    },
  }
}

export default Devify
