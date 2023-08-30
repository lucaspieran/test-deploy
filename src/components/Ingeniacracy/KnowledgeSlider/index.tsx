import styles from './slider.module.css'
import Image from 'next/image'
// images
import img1 from '../../../assets/knowledgeSlider/Capa_1.png'
import img2 from '../../../assets/knowledgeSlider/Capa_2.png'
import img3 from '../../../assets/knowledgeSlider/Capa_3.png'
import img4 from '../../../assets/knowledgeSlider/Capa_4.png'

const SliderImages = ({ images }: { images?: string[] }) => {
  return (
    <>
      {images ? (
        images.map((e, i) => (
          <Image
            key={i}
            src={e}
            alt="img3"
            width={100}
            height={150}
            className={`fab h-auto w-[140px] lg:mr-24`}
          />
        ))
      ) : (
        <>
          <Image
            src={img3.src}
            alt="img3"
            width={50}
            height={50}
            className="fab mr-24 h-[20px] w-[60px] "
          />
          <Image
            src={img1.src}
            alt="img1"
            width={50}
            height={50}
            className="fab mr-24 h-[40px] w-[60px]"
          />
          <Image
            src={img2.src}
            alt="img2"
            width={50}
            height={20}
            className="fab mr-24 h-[15px] w-[80px]"
          />
          <Image src={img4.src} alt="img4" width={50} height={50} className="fab  mr-24" />
        </>
      )}
    </>
  )
}

const KnowledgeSlider = ({ images }: { images?: string[] }) => {
  return (
    <div className={`${styles['logo-container']} py-10 lg:py-4`}>
      <div
        className={`${styles['logo-slide']} ${styles['logo-content']} mx-4 flex items-center gap-2`}
      >
        <div className="flex items-center gap-8">
          <SliderImages images={images} />
          <SliderImages images={images} />
          <SliderImages images={images} />
          <SliderImages images={images} />
          <SliderImages images={images} />
          <SliderImages images={images} />
          <SliderImages images={images} />
        </div>
      </div>
    </div>
  )
}

export default KnowledgeSlider
