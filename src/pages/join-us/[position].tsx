import { DownArrow } from '@/assets/icons'
import Button from '@/components/Button'
import JoinForm from '@/components/Forms/JoinForm'
import WantoToChallenge from '@/components/Utils/WantoToChallenge'
import useScroll from '@/hooks/useScroll'
import { Positions } from '@/interfaces'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

const Position = ({ position }: { position: Positions }) => {
  const { ref, scroll } = useScroll()
  return (
    <>
      <header className="gradient-background relative !h-[50vh] overflow-hidden before:left-[-25%] after:hidden">
        <Image src={'/Noise-Animation.png'} fill alt="" className="z-[0]" />
        <div className="custom-container z-50 flex h-full flex-col items-start justify-center text-white">
          <h1 className="z-10 font-mono text-[32px] lg:text-[67px]">Join us</h1>
          <DownArrow className="z-10 mt-3 h-7 cursor-pointer fill-white lg:h-10" />
        </div>
      </header>

      <section className="pt-20">
        <div className="custom-container text-white">
          <h1 className="text-[32px] font-bold lg:text-[53px]">{position?.attributes?.title}</h1>

          <p className="mt-20 text-[24px] font-bold lg:text-[31px]">Role description</p>
          <p className="text-[20px]">{position?.attributes?.role_description}</p>

          <p className="mt-20 text-[18px] font-bold lg:text-[31px]">With understainding of :</p>
          <ul className="list-disc pl-7 text-[18px] lg:text-[20px]">
            {position?.attributes?.knowledge.split('\n').map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>

          <div className="flex flex-col justify-between lg:flex-row">
            <div>
              <p className="mt-20 text-[18px] font-bold lg:text-[31px]">
                Other skills that interest us
              </p>

              <ul className="text-[18px] lg:text-[20px]">
                {position?.attributes?.skills?.split('\n').map((el, i) => (
                  <li key={i}>- {el}</li>
                ))}
              </ul>
            </div>

            <Button
              title="Apply now"
              className="mt-10 h-fit lg:mt-auto"
              size="lg"
              onClick={scroll}
            />
          </div>
        </div>
      </section>

      <section
        className="gradient-background mt-40 !h-auto overflow-hidden pt-20 before:z-[-1] after:z-[-1]"
        ref={ref}
      >
        <div className="nested-background before:-z-10 after:-z-10">
          <div className="custom-container ">
            <WantoToChallenge />

            <div className="mt-20">
              <JoinForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const dat = await fetch(`https://admin.ingenia.la/api/positions?fields[0]=name`)
  const { data } = await dat.json()
  const supportedLanguages = ['es', 'en']
  return {
    paths: data.flatMap((el: any) =>
      supportedLanguages.map(lang => ({ params: { position: el.attributes.name }, locale: lang }))
    ),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const dat = await fetch(
    `https://admin.ingenia.la/api/positions?locale=${locale}&filters[name][$eq]=${params?.position}`
  )
  const { data } = await dat.json()
  if (!data || data.length === 0) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['meetOurTeam', 'aboutUs', 'common'])),
      position: data[0] ?? {},
    },
    revalidate: 30,
  }
}

export default Position
