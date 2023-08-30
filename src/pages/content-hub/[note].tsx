import { LinkedinIcon } from '@/assets/icons'
import { ChevronLeft } from '@/assets/icons/elevate'
import Button from '@/components/Button'
import { Note } from '@/interfaces'
import { classNames } from '@/utils/functions'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Router from 'next/router'

const Note = ({ note }: { note: Note }) => {
  const router = useRouter()
  const paragraphs = note?.attributes?.body?.split(/\n{1,2}/)
  return (
    <>
      <header className="relative h-screen">
        <Image
          src={note?.attributes?.header_img?.data?.attributes?.url ?? ''}
          fill
          alt=""
          className="z-[-2] object-cover"
        />
        <Image src="/caseStudies/filtro.png" fill alt="" className="z-[-1] object-cover" />

        <div className="custom-container z-10 flex h-screen flex-col justify-between pb-16 pt-20 text-white lg:justify-end lg:pt-0">
          <div className="flex w-fit cursor-pointer items-center gap-2">
            <ChevronLeft />
            <p className="text-xl" onClick={() => Router.back()}>
              Content Hub
            </p>
          </div>

          <div>
            <h1 className="py-10 font-mono text-[22px] lg:text-[44px]">
              {note?.attributes?.title}
            </h1>

            <div className="flex flex-col justify-between lg:flex-row lg:items-center">
              <div className="flex items-center gap-5">
                <div className="relative h-[60px] w-[60px] ">
                  <Image
                    src={note?.attributes?.author_img?.data?.attributes?.url ?? ''}
                    alt=""
                    fill
                    className="rounded-[15px] object-cover  object-top"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div className="">
                  <p className="text-xl">Author</p>
                  <p className="text-xl font-bold">{note?.attributes?.author}</p>
                </div>
              </div>

              <Link href={note?.attributes?.link_article ?? '/'} target="_blank">
                <Button
                  title="Read the original article"
                  rightIcon
                  variant="outline"
                  className="mt-5 w-fit"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <article className="py-20 text-[18px] text-white lg:text-xl">
        <div className="custom-container  flex flex-col gap-10 pb-20 lg:px-40">
          {paragraphs?.map((text, i) => i < 4 && <p key={i}>{text}</p>)}
        </div>

        <div className="relative h-[250px] w-full lg:h-[700px]">
          <Image
            src={note?.attributes?.body_img?.data?.[0]?.attributes?.url ?? ''}
            fill
            alt="elevate"
            className="object-cover saturate-0"
          />
        </div>

        <div
          className={classNames(
            'custom-container gradient-background flex !h-auto flex-col gap-10 py-20 lg:px-40',
            'before:h- before:left-[-30%] before:top-0 before:!z-[-1] before:h-[40%] before:opacity-40 after:!z-[-1] after:hidden'
          )}
        >
          {paragraphs?.map((p, i) => i > 4 && i < 10 && <p key={p}>{p}</p>)}

          <div className="flex flex-col gap-6 rounded-[16px] border border-white bg-white/10 p-7 text-[18px] lg:text-xl">
            {note?.attributes?.body_box?.split(/\n{1,2}/).map(e => (
              <p key={e}>{e}</p>
            ))}
            <p className="mt-2 font-bold"> Thank you; have a nice day!</p>
          </div>

          {paragraphs?.map((p, i) => i >= 10 && <p key={i}>{p}</p>)}

          <div className="flex rounded-[16px] border border-white bg-white/10 p-10 text-[14px] lg:px-24 lg:py-16 lg:text-[18px] lg:text-xl">
            <div className="flex grow flex-col justify-between">
              <p className="text-white/80">Author</p>
              <div className="text-[24px] lg:text-[32px]">
                <p className="font-bold">{note?.attributes?.author}</p>
                <p className="font-light lg:mt-4">{note?.attributes?.author_role}</p>
              </div>
              <div className="mt-5 w-fit cursor-pointer rounded-full border p-2 hover:opacity-80 lg:mt-0">
                <LinkedinIcon className="h-5" />
              </div>
            </div>
            <div className="relative hidden h-[230px] w-[230px] lg:block">
              <Image
                src={note?.attributes?.author_img?.data?.attributes?.url ?? ''}
                alt=""
                fill
                className="rounded-full object-cover object-top"
              />
            </div>
          </div>

          <Button
            title="Go back to case studies"
            className="mx-auto w-fit"
            onClick={() => router.back()}
          />
        </div>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const dat = await fetch(`https://admin.ingenia.la/api/notes?fields[0]=name`)
  const { data } = await dat.json()
  const supportedLanguages = ['es', 'en']
  return {
    paths: data.flatMap((el: any) =>
      supportedLanguages.map(lang => ({ params: { note: el?.attributes?.name }, locale: lang }))
    ),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const dat = await fetch(
    `https://admin.ingenia.la/api/notes?locale=en&filters[name][$eq]=${params?.note}&populate=*`
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
      note: data[0] ?? {},
    },
  }
}

export default Note
