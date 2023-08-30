import Button from '@/components/Button'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Solutions() {
  const { t } = useTranslation('solutions')
  const items = [
    {
      name: 'startia',
      logo: '/startiaGIf.gif',
      img: '/home/solutions1.png',
      text: t('startiaText'),
    },
    {
      name: 'startia',
      logo: '/devifyGif.gif',
      img: '/home/solutions2.png',

      text: t('devifyText'),
    },
    {
      name: 'startia',
      logo: '/elevateGif.gif',
      img: '/home/solutions3.png',
      text: t('goELlevateText'),
    },
  ]

  return (
    <div className="flex flex-col gap-8 lg:gap-0">
      {items.map((card, i) => (
        <div
          key={card.name}
          className={`mx-auto  flex min-h-[560px] w-full max-w-[350px] flex-col-reverse rounded-[16px] lg:mt-0  lg:h-[700px] lg:max-w-full ${
            i !== 1 ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } lg:rounded-none lg:pt-0 ${i === 0 ? 'mt-24' : ''}`}
        >
          <div
            className={`flex  flex-col items-start justify-between gap-4  rounded-b-[15px] ${
              i === 0 ? 'bg-black' : i === 1 ? 'bg-white' : 'bg-[#171717]'
            } p-4 md:basis-1/2 lg:justify-center lg:rounded-b-none lg:p-10 lg:px-[100px]`}
          >
            <Image
              src={card.logo}
              height={300}
              width={200}
              alt="startia"
              className="w-[200px] lg:w-[400px] "
            />
            <div>
              <p className={`mt-2 text-[18px] ${i !== 1 ? 'text-white' : 'text-purple'} lg:block`}>
                {card.text}
              </p>
            </div>

            <Link
              href={
                i === 0
                  ? '/solutions/startia'
                  : i === 2
                  ? '/solutions/go-elevate'
                  : '/solutions/devify'
              }
            >
              <Button
                title="Get started"
                rightIcon
                rightArrowColor={
                  i === 0 ? 'stroke-black' : i === 1 ? 'stroke-white' : 'stroke-black'
                }
                className={i === 1 ? 'text-white' : ''}
                variant={i === 0 ? 'startia' : i === 1 ? 'devify' : 'white'}
              />
            </Link>
          </div>

          <div className="relative  h-[200px] shrink-0  grow lg:h-full">
            <Image
              src={card.img}
              alt="startia"
              fill
              className="rounded-t-[16px] object-cover lg:rounded-none"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['solutions'])),
    },
  }
}
