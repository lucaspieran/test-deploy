import { DownArrow } from '@/assets/icons'
import Button from '@/components/Button'
import JoinForm from '@/components/Forms/JoinForm'
import SliderIngeniacracy from '@/components/Ingeniacracy/Slider'
import CardMobile from '@/components/JoinUs/CardMobile'
import Slider from '@/components/SliderHome/Slide'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import BenefitsAccordion from '@/components/JoinUs/BenefitsAccordion'
import { Positions } from '@/interfaces'
import useScroll from '@/hooks/useScroll'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import WantoToChallenge from '@/components/Utils/WantoToChallenge'
import { useRouter } from 'next/router'

const Benefits = dynamic(() => import('@/components/JoinUs/Benefits'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})
const JoinUs = ({ positions }: { positions: Positions[] }) => {
  const { query } = useRouter()
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [checkPositions, setCheckPositions] = useState<Positions[] | null>(positions)
  const { ref, scroll } = useScroll()
  const { ref: benefits, scroll: scrollBenefits } = useScroll()

  const { t } = useTranslation('joinUs')

  useEffect(() => {
    const scrollToSection: { [key: string]: () => void } = {
      join: scroll,
      benefits: scrollBenefits,
    }
    for (const key in query) {
      if (query[key] && scrollToSection[key]) {
        scrollToSection[key]()
      }
    }
  }, [query])

  useEffect(() => {
    if (positions) {
      setCheckPositions([{}, ...positions, {}])
    }
  }, [positions])
  return (
    <>
      <header className="relative h-screen">
        <Image src="/Noise-Animation.png" fill alt="" className="z-[-2]" />
        <Image src="/particles.gif" fill alt="" className="z-[-2] object-cover" />
        <div className="custom-container flex h-full flex-col justify-center lg:flex-row lg:items-center">
          <div className="lg:basis-[30%]">
            <h1 className="font-mono text-[32px] text-white lg:text-[67px]">Join us</h1>
            <DownArrow
              className="mt-10 hidden h-6 cursor-pointer fill-white hover:opacity-80 lg:block lg:h-10"
              onClick={scroll}
            />
          </div>

          <div className="lg:grow">
            <Image src="/joinUs/header.png" alt="" width={1500} height={500} />
          </div>
          <DownArrow
            className="hover:opacity-80lg:h-10 mr-auto mt-10 h-7 cursor-pointer fill-white lg:hidden"
            onClick={scroll}
          />
        </div>
      </header>

      <section className="min-h-[50vh] pb-20" ref={ref}>
        <div className="custom-container no-scrollbar mt-20 flex overflow-auto lg:hidden">
          {positions?.length === 0 ? (
            <p className="text-[33px] text-white">Currently, there are no active searches.</p>
          ) : (
            positions?.map((position, i) => (
              <CardMobile key={i} index={i} setCurrentIndex={setCurrentIndex} position={position} />
            ))
          )}
        </div>
        {positions?.length > 0 && (
          <div className="mx-auto mt-10 flex w-fit gap-1 px-4 opacity-80 lg:hidden">
            {positions?.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-2xl duration-200 ease-in ${
                  index === currentIndex ? 'w-5 bg-cyan-400' : 'bg-zinc-700'
                }`}
              />
            ))}
          </div>
        )}

        {positions?.length === 0 ? (
          <div className="flex min-h-[50vh] items-center justify-center">
            <p className="hidden text-center text-[33px] text-white lg:block">
              Currently, there are no active searches.
            </p>
          </div>
        ) : (
          <div className="card-blend-horizontal mt-16 hidden overflow-auto px-20 py-20 lg:block">
            <Slider options={{ loop: false }}>
              {checkPositions?.map((position, i) => (
                <div key={i} className=" md:flex-[0_0_32%] lg:mx-4 lg:h-[400px]  2xl:mx-10 ">
                  <div className="relative flex h-[400px] max-w-[411px]  flex-col items-center justify-between pl-10 text-white">
                    <div>
                      <p className="text-[53px] ">{position?.attributes?.title}</p>
                      <p className="text-[20px]">{position?.attributes?.description}</p>
                    </div>
                    {position.attributes && (
                      <div className="flex w-full justify-start gap-5">
                        <Link href={'/join-us/' + position.attributes.name}>
                          <Button title="Apply now" />
                        </Link>
                        <div className="flex h-auto w-[40px] items-center justify-center rounded-full border border-white">
                          +
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}

        <div className="mt-32">
          <SliderIngeniacracy title="BENEFITS" />
        </div>
      </section>

      <section className="custom-container pt-20 text-white" ref={benefits}>
        <h2 className="text-[30px] lg:text-[40px]">The ingenial way</h2>

        <div className="mt-4 flex flex-col gap-6 text-[17px] lg:text-[22px]">
          {t('joinUs:ingenialWay')
            .split('\n')
            .map(e => (
              <p key={e}>{e}</p>
            ))}
        </div>
        <div className="lg:pb-32">
          <BenefitsAccordion />
          <Benefits />
        </div>
      </section>

      <section className="gradient-background mt-40 !h-auto overflow-hidden pt-20 before:z-[-1] after:z-[-1]">
        <div className="nested-background before:z-[-2] after:z-[-2]">
          <div className="custom-container ">
            <WantoToChallenge />

            <div className="mt-20">
              <JoinForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await fetch(`https://admin.ingenia.la/api/positions?locale=${locale}`)
  const positions = await data.json()
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['aboutUs', 'joinUs', 'common'])),
      positions: positions?.data,
    },
    revalidate: 30,
  }
}

export default JoinUs
