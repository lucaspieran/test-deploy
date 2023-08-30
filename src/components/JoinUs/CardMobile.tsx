import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Button from '../Button'
import { Positions } from '@/interfaces'
import Link from 'next/link'

interface Props {
  index: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>
  position: Positions
}

const CardMobile = ({ index, setCurrentIndex, position }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setCurrentIndex(index)
    }
  }, [inView])

  return (
    <div key={index} className="shrink-0 lg:mx-4 lg:h-[400px] 2xl:mx-10" ref={ref}>
      <div
        className={`${
          index !== 0 ? 'pl-6' : ''
        } relative flex h-[400px] max-w-[300px]  flex-col items-center justify-between  text-white`}
      >
        <div>
          <p className="text-[53px] ">{position?.attributes?.title}</p>
          <p className="text-[20px]">{position?.attributes?.description}</p>
        </div>
        <div className="flex w-full justify-start gap-5">
          <Link href={'/join-us/' + position?.attributes?.name}>
            <Button title="Apply now" />
          </Link>
          <div className="flex h-auto w-[40px] items-center justify-center rounded-full border border-white">
            +
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardMobile
