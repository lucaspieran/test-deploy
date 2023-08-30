import {
  DownArrow,
  StartiaArchAttack,
  StartiaArrow,
  StartiaCloudIcon,
  StartiaComputerIcon,
  StartiaIconList,
} from '@/assets/icons'
import {
  ApiAsProduct,
  Cd,
  CloudAdoption,
  CloudNative,
  ContainerBusiness,
  DataDriver,
  DataTuning,
  DevSecOps,
  DeveloperExpe,
  DigitalTransformation,
  IAM,
  ItStrategy,
  MeshAdoption,
  OrgFramework,
  ScaledAgile,
  Srepractices,
} from '@/assets/icons/startia'
import Button from '@/components/Button'
import useScroll from '@/hooks/useScroll'
import { classNames } from '@/utils/functions'
import { Transition } from '@headlessui/react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { useState } from 'react'

const Startia = () => {
  const { ref, scroll } = useScroll()
  const { ref: ref2, scroll: scroll2 } = useScroll()

  const { t } = useTranslation('solutions')
  const [products, setProducts] = useState(true)
  const techDirection = [
    {
      icon: CloudNative,
      title: 'Cloud-Native Architecture',
      text: t('startia.cloudNativeArchitecture'),
    },
    {
      icon: StartiaCloudIcon,
      title: 'Cloud Tuning',
      text: t('startia.cloudTuning'),
    },
    {
      icon: ContainerBusiness,
      title: 'Containerizing the Business',
      text: t('startia.containerizingTheBusiness'),
    },
    {
      icon: Cd,
      title: 'Continuous Delivery',
      text: t('startia.continuousDelivery'),
    },
    {
      icon: DataTuning,
      title: 'Data Tuning',
      text: t('startia.dataTuning'),
    },
    {
      icon: DeveloperExpe,
      title: 'Developer Experience',
      text: t('startia.developerExperience'),
    },
    {
      icon: MeshAdoption,
      title: 'Mesh Adoption',
      text: t('startia.meshAdoption'),
    },
    {
      icon: IAM,
      title: 'Security Model (IAM)',
      text: t('startia.securityModelIAM'),
    },
    {
      icon: Srepractices,
      title: 'SRE Practices',
      text: t('startia.srePractices'),
    },
  ]
  const strategicEvolutions = [
    {
      icon: ApiAsProduct,
      title: 'API as product',
      text: t('startia.apiProduct'),
    },
    {
      icon: CloudAdoption,
      title: 'Cloud Adoption Readiness',
      text: t('startia.cloudAdoption'),
    },
    {
      icon: DataDriver,
      title: 'Data-driven Strategy',
      text: t('startia.dataDriven'),
    },
    {
      icon: DevSecOps,
      title: 'DevSecOps Framework',
      text: t('startia.devSecOps'),
    },
    {
      icon: DigitalTransformation,
      title: 'Digital Transformation Readiness',
      text: t('startia.digitalTransform'),
    },
    {
      icon: ItStrategy,
      title: 'IT Strategy',
      text: t('startia.itStrategy'),
    },
    {
      icon: OrgFramework,
      title: 'Organizational Framework',
      text: t('startia.orgFramework'),
    },
    {
      icon: ScaledAgile,
      title: 'Scaled Agile',
      text: t('startia.scaledAgile'),
    },
  ]

  const renderItems = (items: { [key: string]: string | any }[]) => {
    return items.map(({ text, icon: Icon, title }) => (
      <div
        className="flex h-[360px] max-w-[160px] flex-col justify-between rounded-[35px] bg-black p-3 md:w-[295px] md:max-w-none md:p-4"
        key={title}
      >
        <div className="text-white md:text-center">
          <Icon className="h-8 md:mx-auto md:mt-4 md:h-10" />
          <p className="text-[16px] md:mt-6 md:px-10 md:text-[21px]">{title}</p>
          <p className="mt-2 text-[12px] md:mt-4 md:px-4 md:text-[13px]">{text}</p>
        </div>
        <Button title="Contact us" variant="startia" />
      </div>
    ))
  }
  return (
    <>
      <header
        className={classNames(
          'relative h-screen overflow-hidden bg-black after:absolute after:-bottom-[300px] after:right-[-60px] after:h-[790px]',
          'after:hidden after:w-[790px] after:rounded-full after:border-[0.5px] after:border-[#f2f2f2] lg:after:block',
          'before:absolute before:bottom-[-40px] before:right-[-300px] before:hidden before:h-[790px] before:w-[790px] before:rounded-full before:border-[0.5px] before:border-[#f2f2f2] lg:before:block'
        )}
      >
        <div className="custom-container flex  h-full items-center">
          <div className="flex h-full flex-col lg:justify-center">
            <div className="relative flex basis-1/2 items-end lg:basis-auto">
              <Image
                src="/startiaGIf.gif"
                alt=""
                width={800}
                height={500}
                className="relative left-[-20px] lg:left-[-75px]"
              />
              <p className="absolute right-[18%] animate-text-animated text-[5vw] text-white lg:bottom-4 lg:right-[190px] lg:text-[37px]">
                where the future begins
              </p>
            </div>
            <div className="flex h-full basis-1/2 lg:h-auto lg:basis-auto">
              <StartiaArrow
                className="mt-[20vh] h-10 cursor-pointer lg:m-0 lg:h-14 "
                onClick={scroll}
              />
            </div>
          </div>
        </div>
      </header>

      <section className="min-h-screen bg-[#F2F2F2] lg:h-screen" ref={ref}>
        <div className="custom-container flex h-full flex-col items-center lg:flex-row">
          <div className="lg:basis-1/2">
            <p className="mt-14 text-[24px] lg:mt-0">{t('startia.startiaPhrase')}</p>

            <Button
              title={t('startia.checkProducts')}
              variant="startia"
              className="mt-10 w-full font-normal lg:w-auto"
              size="lg"
              onClick={scroll2}
            />
          </div>

          <div className="mx-auto py-10 lg:basis-1/2">
            <div
              className={classNames(
                'mx-auto w-fit animate-phone-img after:absolute after:bottom-[-40px]',
                'after:left-0 after:h-[20px] after:w-full after:rounded-[50%] after:bg-black/30 after:blur-[12px]'
              )}
            >
              <Image
                src="/solutions/startiaMobile.png"
                width={400}
                height={200}
                alt=""
                className="relative !left-[-20px] w-[300px] lg:left-0 lg:w-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-[699px] w-full">
        <Image
          src="/solutions/startiaCover.jpeg"
          fill
          alt=""
          className="object-cover object-left saturate-0 lg:object-cover"
        />
      </div>

      <section className="min-h-screen bg-[#F2F2F2] pb-20" ref={ref2}>
        <div className="custom-container pt-20">
          <h4 className="text-[26px] font-bold lg:text-[64px]">Check our products</h4>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-10">
            <div
              className={classNames(
                'group flex max-w-[388px] cursor-pointer flex-col items-center justify-between rounded-[35px] border-2 border-black p-6 md:h-[435px] md:p-14',
                '!fill-red-900 !duration-300 hover:bg-black hover:text-white hover:transition-all'
              )}
              onClick={() => setProducts(true)}
            >
              <StartiaIconList className="h-10 fill-black group-hover:fill-startia md:h-20" />
              <div className="text-center">
                <p className="text-[26px]">Strategic Evolution</p>
                <p className="mt-4 text-center text-[14px]">{t('startia.strategicEvolution')}</p>
              </div>
              <DownArrow className="hidden h-10 fill-black group-hover:fill-startia md:block" />
            </div>

            <Transition
              show={products}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-50"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="md:hidden"
            >
              <div className="mt-4 flex flex-wrap justify-center gap-x-1 gap-y-2  md:hidden">
                {renderItems(strategicEvolutions)}
              </div>
            </Transition>

            <div
              className={classNames(
                'group flex max-w-[388px] cursor-pointer flex-col items-center justify-between rounded-[35px] border-2 border-black p-6 md:h-[435px] md:p-14',
                '!fill-red-900 !duration-300 hover:bg-black hover:text-white hover:transition-all'
              )}
              onClick={() => setProducts(false)}
            >
              <StartiaComputerIcon className="h-10 fill-black group-hover:fill-startia md:h-20" />
              <div className="text-center">
                <p className="text-[26px]">Tech Direction</p>
                <p className="mt-4 text-center text-[14px]">{t('startia.techDirection')}</p>
              </div>
              <DownArrow className="hidden h-10 fill-black group-hover:fill-startia md:block" />
            </div>
          </div>
          <Transition
            show={!products}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="mt-4 flex flex-wrap justify-center gap-x-1 gap-y-2  md:hidden">
              {renderItems(techDirection)}
            </div>
          </Transition>

          <Transition
            show={products}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="mt-28 hidden flex-wrap justify-between gap-10 md:flex">
              {renderItems(strategicEvolutions)}
            </div>
          </Transition>

          <Transition
            show={!products}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="mt-28 hidden flex-wrap justify-between gap-10 md:flex">
              {renderItems(techDirection)}
            </div>
          </Transition>
        </div>
      </section>

      <section className="h-[50vh] bg-black px-[7vh] py-[4vh] md:p-[14vh] lg:h-screen 3xl:p-[200px]">
        <div className="flex h-full flex-col items-center justify-between gap-2 rounded-[35px] bg-[#f2f2f2] p-6 text-center md:p-[5vh] lg:gap-10 3xl:p-20">
          <StartiaArchAttack className="h-10 shrink-0 lg:h-20" />

          <h4 className="text-[18px] lg:text-[46px]">Arch Attach</h4>

          <p className="text-[12px] lg:px-32 lg:text-[27px]">{t('startia.archAttack')}</p>

          <Button
            title="More info"
            className="bg-black text-[20px] font-medium text-white hover:bg-black hover:opacity-80 lg:w-[40%]"
          />
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

export default Startia
