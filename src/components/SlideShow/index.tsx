import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  imageClassNames?: string
  containerClassNames?: string
  images: string[]
}

function SlideShow({ imageClassNames, containerClassNames, images }: Props) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [currentImage, images.length])

  return (
    <div
      className={`relative z-[-1] min-h-[300px]  rounded-[24px] sm:h-[347px] sm:w-[590px] ${containerClassNames} `}
    >
      {images.map((e, index) => (
        <Image
          key={e}
          src={e}
          alt="team1"
          fill
          quality={100}
          className={` min-h-[300px] min-w-[250px] rounded-[16px] p-2 transition-opacity duration-500 lg:p-4 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          } ${imageClassNames}`}
          style={{ transition: 'opacity 1s ease-in-out' }}
        />
      ))}
    </div>
  )
}

export default SlideShow
