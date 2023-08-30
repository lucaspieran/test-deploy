import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

export default function VerticalSlider() {
  const [emblaRef] = useEmblaCarousel(
    {
      axis: 'y',
      align: 'center',
      dragFree: true,
    },
    [WheelGesturesPlugin() as any]
  )
  const words = [
    'insurance',
    'bank',
    'finance',
    'fintech',
    'tech startups',
    'education',
    'energy',
    'mining',
    'agro',
    'port',
    'telco',
    'oil & gas',
    'health',
    'logistic',
    'e-commerce',
    'public sector',
  ]
  return (
    <div className="emblaC card-blend-vertical">
      <div className={`embla__viewport h-[20rem] lg:h-[27rem]`} ref={emblaRef}>
        <div className="embla__container  items-center gap-10">
          <p className="font-mono text-[50px] text-[#202020] lg:text-[82px]">_ </p>
          {words.map((e, i) => (
            <p key={i} className="font-mono text-[50px] capitalize text-white lg:text-[82px]">
              {e}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
