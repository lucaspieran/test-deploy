/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Button from '@/components/Button'
import SliderIngeniacracy from '@/components/Ingeniacracy/Slider'
import { EmailIcon, PhoneIcon } from '@/assets/icons'
import Image from 'next/image'
import SocialMedia from '@/components/Utils/SocialMedia'
import { Case } from '@/interfaces'
import VerticalSlider from '@/components/Sliders/VerticalSlider'
import CForm from '@/components/Forms/CForm'
import Link from 'next/link'
import useScroll from '@/hooks/useScroll'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function CaseStudies({ cases }: { cases: Case[] }) {
  const { query } = useRouter()
  const { ref: casesStudies, scroll: casesScroll } = useScroll()
  const { ref: industries, scroll: industriesScroll } = useScroll()

  useEffect(() => {
    const scrollToSection: { [key: string]: () => void } = {
      cases: casesScroll,
      industry: industriesScroll,
    }
    for (const key in query) {
      if (query[key] && scrollToSection[key]) {
        scrollToSection[key]()
      }
    }
  }, [query])

  const { t } = useTranslation(['caseStudies'])

  return (
    <>
      <section className="gradient-background relative h-screen bg-black/40">
        <Image src={'/Noise-Animation.png'} fill alt="" className="-z-10" />
        <Image src={'/particles.gif'} fill alt="" className="z-10 object-cover" />

        <div className="nested-background">
          <div className="custom-container flex h-full flex-col md:flex-row">
            <div className="z-10 mt-20 grid basis-1/2 place-content-center lg:mt-0">
              <p className="font-mono text-[32px] text-white md:text-[67px]">{t('caseStudies')}</p>
              <p className="mt-5 font-mono text-xl text-white md:w-[70%]  lg:mt-10">
                {t('trustTheTeam')}
              </p>
            </div>

            <div className="z-10 grid place-content-center lg:basis-1/2">
              <Image src={'/caseStudies/img1.png'} width={700} height={300} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container" ref={casesStudies}>
        {cases?.map(({ attributes }, i) => (
          <div
            key={i}
            className="flex flex-col justify-center gap-10 border-b border-b-white/[0.11] py-20 text-white lg:flex-row lg:items-center"
          >
            <Image
              src={attributes?.logo?.data?.attributes?.url ?? ''}
              width={200}
              height={50}
              alt={attributes.name}
              className="h-[62px] w-[170px] shrink-0"
              style={{ maxHeight: 80 }}
            />

            <div className="basis-[30%] text-[17px] lg:w-[50%]">
              <p className="font-bold">{t(attributes.title)}</p>

              <p className="mt-4">{t(attributes.body)}</p>

              <Link href={'/case-studies/' + attributes?.name}>
                <Button
                  title="Learn more"
                  rightIcon
                  variant="outline"
                  className="mt-4 duration-150 ease-in hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        ))}
      </section>
      <SliderIngeniacracy title="INDUSTRIES" />

      <div className="mx-auto pt-20" ref={industries as any}>
        <VerticalSlider />
      </div>

      <section
        className="py-36"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(32, 32, 32, 0) 29%, #6953FF 100%)',
        }}
      >
        <div className="custom-container flex flex-col lg:flex-row">
          <div className="flex basis-1/2 flex-col justify-between">
            <div>
              <p className="font-mono text-[30px] text-white lg:text-[38px]">
                This is where <br /> your journey begins
              </p>

              <p className="mt-10 font-mono text-[24px] text-white lg:text-[28px]">Lets talk!</p>
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
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="mt-10 basis-1/2">
            <CForm />

            <div className="mt-14 flex flex-col gap-4 lg:hidden">
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
  const response = await fetch(
    `https://admin.ingenia.la/api/case-studies-lists?locale=${locale}&populate=logo`
  )
  const { data } = await response.json()
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['caseStudies', 'common'])),
      cases: data,
    },
    revalidate: 30,
  }
}

export default CaseStudies
