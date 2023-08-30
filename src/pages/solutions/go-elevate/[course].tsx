import { ChevronLeft } from '@/assets/icons/elevate'
import Button from '@/components/Button'
import Whatsapp from '@/components/Utils/Whatsapp'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Router from 'next/router'

import { Course } from '@/interfaces'

interface Props {
  course: Course
}

const Course = ({ course }: Props) => {
  return (
    <section className="bg-black">
      <Whatsapp />
      <div className="custom-container gap-10 text-white lg:flex">
        <div className="lg:basis-[100%]">
          <header className="min-h-[50vh] bg-black">
            <div className="flex flex-col gap-10 pt-20 lg:flex-row">
              <div className="flex-col lg:flex lg:grow">
                <div className="flex items-center gap-2 pt-10 font-popins text-white">
                  Trainings
                  <svg
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.504 0.48H2.344L6.216 4.144L2.344 7.824H0.504L4.376 4.144L0.504 0.48Z"
                      fill="white"
                    />
                  </svg>
                  {course?.attributes?.title}
                </div>

                <h1 className="mt-4 h-fit font-popins text-[32px] text-white">
                  {course?.attributes?.title}
                </h1>

                {course?.attributes?.video ? (
                  <div className="mt-24 rounded-[16px] sm:!pt-0">
                    <iframe
                      width="100%"
                      height="720"
                      src={`${course?.attributes?.video}?autoplay=0&mute=1&loop=1&color=white&controls=1&modestbranding=1&playsinline=0&rel=0&enablejsapi=0`}
                      title="Ingenia - About us"
                      className={`delay-700 duration-1000 ease-out sm:block`}
                    ></iframe>
                  </div>
                ) : (
                  <div className="mt-10 h-[530px] max-w-[900px] grow bg-gray-300"></div>
                )}
              </div>

              <div className="sticky top-20 mt-10 rounded-[16px] bg-[#1a1a1a] px-4 py-8 lg:hidden">
                <Button title="Contact us" className="w-full font-popins !text-[20px]" />

                <div className="mt-8 flex gap-5">
                  <Image src="/solutions/elevate-card.png" width={25} height={25} alt="" />
                  <div className="mt-1 flex flex-col gap-[22px] font-popins text-white">
                    <p>{course?.attributes?.data?.live}</p>
                    <p>{course?.attributes?.data?.time}</p>
                    <p>{course?.attributes?.data?.hours}</p>
                    <p>{course?.attributes?.data?.audio}</p>
                    {course?.attributes?.data?.downloadable_material && (
                      <p>Downloadable material</p>
                    )}
                    {course?.attributes?.data?.hands_on_activities && <p>Hands on activities</p>}
                    {course?.attributes?.data?.graduation_certificate && (
                      <p>Graduation certificate</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="pt-20">
            <h5 className="mt-20">Description</h5>

            <div className="mt-5 flex flex-col gap-10 lg:text-[21px]">
              {course?.attributes?.description_course &&
                course?.attributes?.description_course
                  ?.split('\n')
                  ?.map(el => <p key={el}>{el}</p>)}
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 hidden h-[700px] max-h-[80vh] min-w-[360px] grow basis-[20%] rounded-[16px] bg-[#1a1a1a] px-4 py-8 lg:flex lg:flex-col lg:justify-center lg:px-8">
          <Button title="Contact us" className="w-full font-popins !text-[20px]" />

          <div className="mt-8 flex gap-5">
            <Image src="/solutions/elevate-card.png" width={25} height={25} alt="" />
            <div className="mt-1 flex flex-col gap-[22px] font-popins text-white">
              <p>{course?.attributes?.data?.live}</p>
              <p>{course?.attributes?.data?.time}</p>
              <p>{course?.attributes?.data?.hours}</p>
              <p>{course?.attributes?.data?.audio}</p>
              {course?.attributes?.data?.downloadable_material && <p>Downloadable material</p>}
              {course?.attributes?.data?.hands_on_activities && <p>Hands on activities</p>}
              {course?.attributes?.data?.graduation_certificate && <p>Graduation certificate</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="custom-container text-white">
        <div className="mt-20 rounded-[16px] border border-[#08fff] bg-[#1a1a1a] p-7">
          <p className="font-bold">“..{course?.attributes?.quote}…”</p>

          <p className="mt-4"> {course?.attributes?.quote_author}</p>
        </div>

        <div className="flex w-fit cursor-pointer items-center py-20" onClick={() => Router.back()}>
          <ChevronLeft />

          <p>Go back to trainings</p>
        </div>
      </div>
    </section>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const list = await fetch('https://admin.ingenia.la/api/courses?fields[0]=name')
  const { data } = await list.json()
  const supportedLanguages = ['es', 'en']
  return {
    paths: data.flatMap((el: any) =>
      supportedLanguages.map(lang => ({ params: { course: el.attributes.name }, locale: lang }))
    ),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const dat = await fetch(
    `https://admin.ingenia.la/api/courses?locale=${locale}&filters[name][$eq]=${params?.course}`
  )
  const { data } = await dat.json()
  if (!data || data.length === 0) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      course: data[0] ?? {},
    },
    revalidate: 30,
  }
}

export default Course
