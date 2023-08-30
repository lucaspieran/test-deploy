import { DownArrowEl } from '@/assets/icons/elevate'
import Button from '@/components/Button'
import useScroll from '@/hooks/useScroll'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { Course } from '@/interfaces'
interface Props {
  courses: Course[]
}

const GoElevate = (props: Props) => {
  const { ref, scroll } = useScroll()
  console.log(props)
  return (
    <>
      <header className="custom-container flex h-[50vh] flex-col justify-between lg:h-screen">
        <Image
          src={'/elevateGif.gif'}
          width={600}
          height={100}
          alt=""
          className="mx-auto w-[350px] lg:w-[600px]"
        />

        <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white lg:hidden">
          <DownArrowEl />
        </div>

        <div className=" mb-4 hidden items-end pb-20 lg:flex">
          <Button
            title="Check our products"
            rightArrowBlack
            variant="primary"
            size="lg"
            className="hidden lg:flex"
            onClick={scroll}
          />
        </div>
      </header>

      <div className="relative h-[250px] w-full lg:h-[700px]">
        <Image
          src="/solutions/elevateCover.jpeg"
          fill
          alt="elevate"
          className="object-cover object-[0px_-100px] 2xl:object-[0px_-730px]"
        />
      </div>

      <section className="min-h-screen bg-white pb-10" ref={ref}>
        <h4 className="pt-20 text-center text-[15px] font-bold text-[#141414] lg:text-2xl">
          High level courses for technological experts looking for continuous training <br /> and
          updating on emerging technologies driving impact in the IT world.
        </h4>

        <div className="custom-container mt-10 flex flex-wrap justify-center gap-10 sm:justify-between">
          {props.courses.map(card => (
            <div
              className="flex h-[480px] w-[320px] flex-col justify-between rounded-[40px] bg-[#1A1A1A] p-6 font-popins lg:h-[520px]"
              key={card.id}
            >
              <div className="flex flex-col">
                <div className="relative h-[235px] w-full">
                  <Image src={card.attributes.img.data?.attributes?.url ?? ''} fill alt="" />
                </div>

                <p className="text-center text-xl font-bold text-white">{card.attributes?.title}</p>

                <p className="mt-4 px-5 text-center text-xs text-white">
                  {card.attributes?.description}
                </p>
              </div>

              <Link href={'/solutions/go-elevate/' + card.attributes?.name} className="w-full">
                <Button
                  title="More info"
                  className="w-full !bg-[#08FFFF] font-popins !text-[20px] !font-bold !text-black hover:!opacity-90"
                  onClick={() => Router.push('/solutions/go-elevate/' + card?.attributes.name)}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="flex min-h-[500px] items-center justify-center bg-black">
        <div className="custom-container">
          <h4 className="text-center text-[32px] font-bold text-white lg:text-[40px]">
            In Company training
          </h4>

          <h5 className="mt-4 text-center text-[20px] text-white lg:text-[30px]">
            IT training alternatives to companies.
          </h5>

          <p className="mt-10 text-center text-[16px] text-white lg:px-[20%] lg:text-[21px]">
            We provide support to organizations so that, through a virtuous investment in their
            human resources training, they can successfully achieve their business objectives.
          </p>

          <Link href={'/solutions/go-elevate/in-company'}>
            <Button title="More info" className="mx-auto mt-10 w-[80%] lg:w-[10%]" />
          </Link>
        </div>
      </section>

      <div className="relative h-[250px] w-full lg:h-[700px]">
        <Image
          src="/solutions/elevateCover2.jpeg"
          fill
          alt="elevate"
          className="object-cover 2xl:object-[0px_-730px]"
        />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const list = await fetch('https://admin.ingenia.la/api/courses?populate=*')
  const { data } = await list.json()
  return {
    props: {
      courses: data,
    },
    revalidate: 30,
  }
}

export default GoElevate
