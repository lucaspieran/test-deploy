import { EmailIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/assets/icons'
import {
  Certifications,
  ChevronLeft,
  ExclusiveMaterial,
  Experts,
  FollowUp,
  LiveClasses,
  LogoElevate,
} from '@/assets/icons/elevate'
import Button from '@/components/Button'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'

const InCompany = () => {
  const { t } = useTranslation('solutions')
  const elements = [
    {
      icon: LiveClasses,
      title: t('inCompany.liveClasses'),
      text: t('inCompany.liveText'),
    },
    {
      icon: ExclusiveMaterial,
      title: t('inCompany.exclusiveMaterial'),
      text: t('inCompany.materialText'),
    },
    {
      icon: FollowUp,
      title: t('inCompany.follow'),
      text: t('inCompany.followText'),
    },
    {
      icon: Certifications,
      title: t('inCompany.evaluations'),
      text: t('inCompany.evaluationText'),
    },
    {
      icon: Experts,
      title: t('inCompany.qualified'),
      text: t('inCompany.qualifiedText'),
    },
  ]
  return (
    <>
      <header className="h-[50vh] bg-black font-popins text-white lg:h-[40vh]">
        <div className="custom-container pt-20">
          <Link href="/solutions/go-elevate" className="flex">
            <ChevronLeft />
            <p>Go back</p>
          </Link>
          <h1 className="mt-10 text-[32px] font-bold">{t('inCompany.incompany')}</h1>

          <p className="mt-5 text-[20px] font-light">{t('inCompany.ourDriving')}</p>
        </div>
      </header>

      <div className="relative h-[250px] w-full lg:h-[700px]">
        <Image
          src="/solutions/incompany.jpeg"
          fill
          alt="elevate"
          className="object-cover  2xl:object-[0px_-200px]"
        />
      </div>

      <section className="bg-black pb-32 font-popins">
        <div className="custom-container text-white">
          <div className="lg:flex lg:items-center lg:py-20">
            <div className="lg:basis-[60%]">
              <p className="pt-16 lg:text-[21px]">{t('inCompany.continuousTrain')}</p>

              <p className="mt-10 lg:text-[21px]">{t('inCompany.weBelieve')}</p>
            </div>

            <LogoElevate className="mx-auto hidden lg:block" />
          </div>

          <div className="flex flex-col items-center justify-center gap-20 lg:flex-row">
            <div className="mt-10 flex h-[480px] w-[327px] flex-col justify-between rounded-[37px] bg-[#08FFFF] p-5 text-center text-black lg:w-full lg:max-w-[450px]">
              <p className="mt-8 text-[32px] font-bold">{t('inCompany.openCourses')}</p>

              <p className="text-[18px]">{t('inCompany.coursesText')}</p>

              <Link href={'/contact-us'}>
                <Button title={t('inCompany.getInfo')} variant="elevate" className="w-full" />
              </Link>
            </div>

            <div className="mt-10 flex h-[480px] w-[327px] flex-col justify-between rounded-[37px] bg-[#08FFFF] p-5 text-center text-black lg:w-full lg:max-w-[450px]">
              <p className="mt-8 text-[32px] font-bold">{t('inCompany.customizedTrain')}</p>

              <p className="text-[18px]">{t('inCompany.customizedText')}</p>

              <Link href={'/contact-us'}>
                <Button title={t('inCompany.getInfo')} variant="elevate" className="w-full" />
              </Link>
            </div>
          </div>
        </div>

        <h2 className="mt-14 text-center text-[32px] font-bold text-white lg:mt-40">
          {t('inCompany.whyGoelevate')}
        </h2>

        <div className="custom-container mt-14 flex flex-col items-center gap-10 text-white lg:grid lg:grid-cols-6 ">
          {elements.map((el, i) => (
            <div
              className={` flex h-full flex-col items-center gap-3 text-center  ${
                i > 2 ? 'col-span-3 mx-auto' : 'col-span-2'
              }`}
              key={el.title}
            >
              <el.icon />
              <p className="text-xl font-bold">{el.title}</p>
              <p className={`${i > 2 ? 'lg:px-20 2xl:px-40' : ''} text-center`}>{el.text}</p>
            </div>
          ))}
        </div>

        <div className="custom-container text-white">
          <p className="mt-32 text-center text-[22px] font-bold text-white">
            {t('inCompany.itMarket')}
          </p>
          <div className="items-center justify-center gap-40 lg:flex">
            <div className="mt-10 flex items-center justify-center gap-4">
              <EmailIcon className="h-4" />
              <p className="text-[21px]">info@goelevate.it</p>
            </div>

            <div className="mt-10 flex justify-center gap-5 lg:gap-10">
              <TwitterIcon className="h-6" />
              <LinkedinIcon className="h-6" />
              <InstagramIcon className="h-6" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['solutions'])),
    },
  }
}

export default InCompany
