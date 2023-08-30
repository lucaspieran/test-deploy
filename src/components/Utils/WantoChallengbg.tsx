import Image from 'next/image'
import Button from '../Button'
import WantoToChallenge from './WantoToChallenge'
import SocialMedia from './SocialMedia'
import { EmailIcon } from '@/assets/icons'

const WantoChallengbg = () => {
  const colors = [
    'bg-primary',
    'bg-[#6953ff]',
    'bg-[#ff53b8]',
    'bg-[#1abc9c]',
    'bg-[#ed1846]',
    'bg-[#08ffff]',
  ]
  const getRandomColorIndex = () => Math.floor(Math.random() * colors.length)
  return (
    <section className="gradient-background relative flex !h-auto items-center overflow-hidden lg:h-[1000px] lg:min-h-[700px] lg:py-0 lg:before:!bg-none lg:after:!bg-none">
      <Image src={'/Noise-Animation.png'} fill alt="" />
      <section className="absolute inset-0 z-[1] hidden min-h-[60vh] grid-cols-8 grid-rows-6 lg:grid">
        {[...Array(48)].map((el, i) => {
          return (
            <div
              key={i}
              className={`rounded-full opacity-0 blur-3xl transition-opacity  duration-1000 ease-in-out hover:opacity-100 hover:transition-all ${
                colors[getRandomColorIndex()]
              }`}
            />
          )
        })}
      </section>
      <div className="nested-background nested-mobile lg:before:!bg-none lg:after:!bg-none">
        <div className="pt-10 lg:pt-0 ">
          <WantoToChallenge />
        </div>

        <div className="relative z-30 pt-5 text-center lg:pt-20">
          <Button
            title="Join us"
            size="lg"
            variant="outline"
            rightIcon
            className="mx-auto hidden lg:flex"
          />
          <Button
            title="Join us"
            size="lg"
            variant="primary"
            rightArrowBlack
            className="mx-auto lg:hidden"
          />
        </div>

        <div className="mt-14 justify-between px-14 lg:mx-auto lg:mt-20 lg:flex lg:w-1/2">
          <div className="lg:w-1/4">
            <SocialMedia />
          </div>
          <div className="flex items-center gap-4 p-6">
            <EmailIcon className="h-6" />

            <p className="text-base font-normal text-white">careers@ingenia.la</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WantoChallengbg
