import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

const WantoToChallenge = () => {
  const { t } = useTranslation(['aboutUs'])
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
  const text = t('wantToChallenge')
  const letters = text.split('')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex(prevIndex => (prevIndex + 1) % letters.length)
    }, 50)

    return () => clearInterval(interval)
  }, [letters.length])

  const renderAnimatedText = () => {
    return letters.map((letter, index) => {
      let color = 'rgba(255,255,255, 0.2)'

      if (index <= currentLetterIndex) {
        color = 'white'
      }

      return (
        <span key={index} style={{ color }}>
          {letter}
        </span>
      )
    })
  }

  return (
    <p className="mx-auto w-[65%] text-center font-mono text-[40px] font-bold uppercase lg:text-5xl">
      {renderAnimatedText()}
    </p>
  )
}

export default WantoToChallenge
