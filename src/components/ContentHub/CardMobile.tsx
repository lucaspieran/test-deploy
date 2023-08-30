import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Button from '../Button'
import { Note } from '@/interfaces'
import Link from 'next/link'

interface Props {
  index: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>
  note: Note
}

const CardMobile = ({ index, setCurrentIndex, note }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setCurrentIndex(index)
    }
  }, [inView])
  return (
    <div
      ref={ref}
      className="flex min-h-[430px] max-w-[300px] shrink-0 flex-col  rounded-[17px] p-6 lg:hidden"
      style={{
        background:
          'var(--blue-gradient-03, linear-gradient(141deg, rgba(32, 80, 115, 0.64) 0%, rgba(32, 80, 115, 0.00) 100%))',
      }}
      key={index}
    >
      <div className="relative w-full shrink-0 basis-[35%]">
        <Image
          src={note?.attributes?.img?.data?.attributes?.url ?? ''}
          fill
          alt=""
          className="h-auto w-auto rounded-[17px] object-cover"
        />
      </div>
      <div className="mt-4 flex grow flex-col justify-between text-white">
        <p className="text-xl font-bold">{note.attributes.title}</p>
        <p className="text-lg">{note.attributes.description}</p>
        <Link href={'/content-hub/' + note.attributes.name}>
          <Button title="Read more" rightIcon className="w-fit" />
        </Link>
      </div>
    </div>
  )
}

export default CardMobile
