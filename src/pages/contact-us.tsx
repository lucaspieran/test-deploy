import { DownArrow, EmailIcon, PhoneIcon } from '@/assets/icons'
import CForm from '@/components/Forms/CForm'
import SocialMedia from '@/components/Utils/SocialMedia'
import useScroll from '@/hooks/useScroll'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function ContactUs({}: Props) {
  const { ref, scroll } = useScroll()
  return (
    <>
      <header className="gradient-background bg-black">
        <div className="nested-background flex h-full items-center before:!z-10 after:!z-10">
          <Image src={'/Noise-Animation.png'} fill alt="" className="-z-200" />
          <div className="custom-container flex w-full shrink-0 items-center justify-between">
            <div className="z-10">
              <p className="font-mono text-[30px] text-white lg:text-[40px]">
                This is where <br /> your journey begins
              </p>

              <p className="mt-8 font-mono text-[28px] text-white">Lets talk!</p>

              <DownArrow
                className="mt-20 h-10 cursor-pointer fill-white hover:opacity-80"
                onClick={scroll}
              />
            </div>

            <Image
              src={'bubble_video.gif'}
              height={600}
              width={600}
              className="relative hidden lg:-right-[400px] lg:block xl:-right-[50px]"
              alt=""
            />
          </div>
        </div>
      </header>

      <section className="custom-container" ref={ref}>
        <div className="flex flex-col-reverse justify-center lg:flex-row-reverse lg:items-center lg:justify-between">
          <CForm />
          <div className="mt-14 flex gap-6 pb-16 md:pb-0">
            <svg
              width="6"
              height="635"
              viewBox="0 0 6 635"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-10"
            >
              <line
                x1="3.25"
                y1="4"
                x2="3.25003"
                y2="635"
                stroke="url(#paint0_linear_0_1)"
                stroke-width="0.5"
              />
              <circle cx="3" cy="3" r="3" fill="white" />

              <circle cx="3" cy="219.5" r="3" fill="white" />

              <circle cx="3" cy="480" r="3" fill="white" />

              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="2.99663"
                  y1="430.968"
                  x2="3.00142"
                  y2="638.259"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div>
              <div className="text-xs text-white">
                <p className="font-mono text-[49px] font-bold leading-[167%] text-white">ARG</p>
                <p>Castillo 1366 (1414) CABA</p>
                <p className="mt-1">Argentina</p>
                <p className="mt-4">info@ingenia.la</p>
                <p className="mt-1">+549 11 3645 8835</p>
              </div>

              <div className="mt-12 text-xs text-white">
                <p className="font-mono text-[49px] font-bold leading-[167%] text-white">UY</p>
                <p>Santana 1730, Apt 4.Montevideo (11400)</p>
                <p className="mt-1">Uruguay</p>
                <p className="mt-4">info-uy@ingenia.la</p>
                <p className="mt-1">+59891478726</p>
              </div>

              <div className="mt-[70px] text-xs text-white">
                <p className="font-mono text-[49px] font-bold leading-[167%] text-white">CL</p>
                <p>Av. El Bosque Norte 0211 - Las Condes</p>
                <p className="mt-1">Santiago de Chile</p>
                <p className="mt-4">info-cl@ingenia.la</p>
                <p className="mt-1">+562-2402-4924</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-14 flex items-center lg:my-24 lg:justify-center lg:gap-[200px]">
          <SocialMedia className="hidden lg:flex" />

          <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-10">
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
      </section>
    </>
  )
}
