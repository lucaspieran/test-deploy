import { DownArrow } from '@/assets/icons'
import Button from '@/components/Button'
import CardMobile from '@/components/ContentHub/CardMobile'
import KnowledgeSlider from '@/components/Ingeniacracy/KnowledgeSlider'
import useScroll from '@/hooks/useScroll'
import { Note } from '@/interfaces'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ContentHub = ({ notes }: { notes: Note[] }) => {
  const { query } = useRouter()
  const { ref, scroll } = useScroll()
  const { ref: podcast, scroll: podcastScroll } = useScroll()

  const [newsNotes] = useState(notes.filter(notes => notes.attributes.news))
  useEffect(() => {
    const scrollToSection: { [key: string]: () => void } = {
      news: scroll,
      podcast: podcastScroll,
    }
    for (const key in query) {
      if (query[key] && scrollToSection[key]) {
        scrollToSection[key]()
      }
    }
  }, [query])

  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [cardsToShow, setCardsToShow] = useState(8)
  const cards = [
    {
      img: '/contentHub/break1.png',
      text: 'Platform Engineering',
      click: 'https://open.spotify.com/episode/23BZvUQqU7rnsxgGAKoE0Q?si=7frQG41PRviuHUYMV5frww',
    },
    {
      img: '/contentHub/break2.png',
      text: 'Experiencia Developer',
      click: 'https://open.spotify.com/episode/00UCxx1KfuX8GPSZftoSBr?si=b086ad0d4c924155',
    },
    {
      img: '/contentHub/break3.png',
      text: 'Api as product',
      click: 'https://open.spotify.com/episode/715gfBCryfoNFwxcsITmP9?si=7bf38d30b4db406d',
    },
    {
      img: '/contentHub/break4.png',
      text: 'Ciberseguridad',
      click: 'https://open.spotify.com/episode/4rH3zro1CFiygAUKOJ5c3F?si=c01e03bb3f0d4943',
    },
  ]
  return (
    <>
      <div className="gradient-background !h-auto !min-h-screen before:left-[-200px] before:top-[400px] before:opacity-50 after:top-[500px] after:z-[-1] after:opacity-50">
        <section className="relative h-screen bg-black/40">
          <Image src={'/Noise-Animation.png'} fill alt="" className="-z-10" />

          <div className="custom-container flex h-full flex-col md:flex-row">
            <div className="z-10 mt-20 flex basis-1/2 flex-col justify-center lg:mt-0 ">
              <p className="font-mono text-[32px] text-white md:text-[67px]">Stay updated</p>
              <p className="mt-5 font-mono text-xl text-white md:w-[70%]  lg:mt-10">
                with Ingenia news
              </p>

              <DownArrow
                className="mt-16 h-10 w-10 cursor-pointer fill-white/60 hover:fill-white lg:block"
                onClick={scroll}
              />
            </div>

            <div className="relative left-5 flex items-center justify-center lg:basis-1/2">
              <Image
                src="/contentHub/header1.png"
                width={200}
                height={200}
                alt=""
                className="w-[150px] skew-x-[10deg] lg:w-[200px]"
              />
              <Image
                src="/contentHub/header2.png"
                width={200}
                height={200}
                alt=""
                className="relative -left-10 -top-10 w-[150px] -skew-x-12 lg:w-[200px]"
              />
            </div>
          </div>
        </section>

        <section className="relative bg-black/40 pb-20 text-white" ref={ref}>
          <Image src={'/Noise-Animation.png'} fill alt="" className="-z-10" />

          <div className="custom-container flex flex-col pt-20 lg:flex-row lg:gap-10">
            <div className="no-scrollbar flex gap-14 overflow-x-auto">
              {notes.map((_, i) => (
                <CardMobile key={i} index={i} setCurrentIndex={setCurrentIndex} note={_} />
              ))}
            </div>
            <div className="mx-auto mt-10 flex w-fit gap-1 px-4 opacity-80 lg:hidden">
              {notes.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-2xl duration-200 ease-in ${
                    index === currentIndex ? 'w-5 bg-cyan-400' : 'bg-zinc-700'
                  }`}
                />
              ))}
            </div>
            <div
              className="hidden min-h-[470px] max-w-[500px] flex-col rounded-[17px]  border border-white/30 p-6 lg:flex"
              style={{
                background:
                  '#205073, linear-gradient(141deg, rgba(32, 80, 115, 0.64) 0%, rgba(32, 80, 115, 0.00) 100%))',
              }}
            >
              <div className="relative w-full shrink-0 basis-[50%]">
                <Image
                  src={
                    notes?.[0]?.attributes?.img?.data?.attributes?.url ?? '/contentHub/chile.jpeg'
                  }
                  fill
                  alt=""
                  className="h-auto w-auto rounded-[17px] object-cover"
                />
              </div>
              <div className="mt-4 flex grow flex-col justify-between text-white">
                <p className="text-xl font-bold">{newsNotes?.[0]?.attributes?.title}</p>
                <p className="text-lg">{newsNotes?.[0]?.attributes?.description}</p>
                <Link href={'/content-hub/' + newsNotes?.[0]?.attributes?.name}>
                  <Button title="Read more" rightIcon className="w-fit" />
                </Link>
              </div>
            </div>

            <div className="hidden grow flex-col lg:flex">
              {newsNotes[1] && (
                <div className="flex basis-1/2 flex-col gap-4 border-b border-white/30">
                  <p className="text-lg font-bold">{newsNotes[1]?.attributes?.title}</p>
                  <p className="text-base">{newsNotes[1].attributes?.description}</p>

                  <Link href={'/content-hub/' + newsNotes[1]?.attributes.name}>
                    <Button title="Read more" rightIcon className="w-fit" />
                  </Link>
                </div>
              )}

              {newsNotes[2] && (
                <div className="mt-10 flex basis-1/2 flex-col gap-4 border-b border-white/30">
                  <p className="text-lg font-bold">{newsNotes[2]?.attributes?.title}</p>
                  <p className="text-base">{newsNotes[2]?.attributes?.description}</p>

                  <Link href={'/content-hub/' + newsNotes[2]?.attributes?.name}>
                    <Button title="Read more" rightIcon className="w-fit" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <section className="relative bg-black/40 pb-20 pt-20">
        <Image src={'/Noise-Animation.png'} fill alt="" className="-z-10" />

        <div className="custom-container ">
          <div className="flex justify-center gap-10 overflow-auto pb-4  lg:flex-wrap ">
            {notes?.slice(0, cardsToShow).map(
              note =>
                !note.attributes.news && (
                  <Link
                    href={'/content-hub/' + note?.attributes?.name}
                    key={note.id}
                    className="flex h-[390px] w-[310px] shrink-0 flex-col rounded-[17px] p-5"
                    style={{
                      background:
                        'var(--blue-gradient-03, linear-gradient(141deg, rgba(32, 80, 115, 0.64) 0%, rgba(32, 80, 115, 0.00) 100%))',
                    }}
                  >
                    <div className="relative basis-[65%]">
                      <Image
                        src={note?.attributes?.img.data?.attributes?.url ?? ''}
                        fill
                        alt=""
                        className="rounded-[11px] object-cover"
                      />
                    </div>

                    <div className="mt-2 flex grow flex-col justify-between px-2 text-white">
                      <p>{note?.attributes.title}</p>

                      <div className="flex items-center gap-4">
                        <div className="relative h-[40px] w-[40px] overflow-hidden rounded-full">
                          <Image
                            src={note?.attributes?.author_img.data?.attributes?.url ?? ''}
                            alt=""
                            fill
                            className="object-cover object-[0_0px]"
                          />
                        </div>
                        <div className="">
                          <p className="text-xs text-[#6F9097]">Author</p>
                          <p className="text-sm">{note?.attributes.author}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
          {cardsToShow < notes.length && (
            <div className="mt-20 hidden items-center justify-between lg:flex">
              <div className="mr-20 h-[1px] w-full bg-white/20" />

              <Button
                title="Load more"
                className="shrink-0"
                onClick={() => setCardsToShow(cardsToShow + 6)}
              />
              <div className="ml-20 h-[1px] w-full bg-white/20" />
            </div>
          )}
        </div>
      </section>
      <section className="relative bg-black/40 pb-20 pt-20" ref={podcast}>
        <Image src={'/Noise-Animation.png'} fill alt="" className="-z-10" />

        <div className="custom-container">
          <h3 className="mb-20 text-center font-mono text-3xl text-white/70">
            Ingenia in the media!
          </h3>
        </div>

        <KnowledgeSlider
          images={[
            '/logos/cnn.png',
            '/logos/clarin.png',
            '/logos/cronista.png',
            '/logos/forbes.png',
            '/logos/info.png',
            '/logos/infobae.png',
            '/logos/ipro.png',
            '/logos/lanacion.png',
            '/logos/profesional.png',
            '/logos/tn.png',
          ]}
        />
      </section>

      <section className="mt-40 min-h-screen pb-32 text-white">
        <div className="custom-container min-h-screen">
          <div className="flex h-full flex-col lg:flex-row">
            <div className="flex h-full basis-1/2 flex-col justify-center">
              <h3 className="font-mono text-[53px] lg:text-[67px]">
                Ingenial <br /> Break
              </h3>

              <Link href={'https://open.spotify.com/show/3XpDnidkR9dY8nlWF1FDQn'} target="_blank">
                <Button title="Check our Spotify" rightIcon className="mt-10 w-fit" size="lg" />
              </Link>
            </div>

            <div className="mt-32 grid grow grid-cols-2 gap-y-20 lg:mt-0">
              {cards.map((card, i) => (
                <Link href={card.click} key={i} target="_blank" className="w-fit">
                  <div
                    className={`${
                      i === 1
                        ? 'top-12 self-center'
                        : i === 2
                        ? 'left-4 lg:left-12'
                        : i === 3
                        ? 'left-3 top-12 lg:left-12'
                        : ' self-center'
                    } relative`}
                  >
                    <div className="flex h-[115px] w-[100px] flex-col justify-end rounded-[12px] border border-white lg:h-[246px] lg:w-[196px]">
                      <p className="pb-2 text-center text-[10px] lg:pb-7 lg:text-base">
                        {card.text}
                      </p>
                    </div>
                    <div className="absolute left-4 top-[-50px] lg:left-14">
                      <div className="relative h-[115px] w-[115px] lg:h-[246px] lg:w-[230px]">
                        <Image
                          src={card.img}
                          alt=""
                          fill
                          className="rounded-[20px] border-[10px] border-[#202020] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <iframe
            src="https://open.spotify.com/embed/show/3XpDnidkR9dY8nlWF1FDQn?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="mt-32 rounded-[12px]"
          ></iframe>
        </div>
      </section>

      {/* <section
        className="min-h-screen"
        style={{ background: 'linear-gradient(180deg, #6953FF 0%, #202020 100%)' }}
      >
        <div className="custom-container pt-32 text-white">
          <h3 className="text-center font-mono text-[28px] lg:text-[38px]">Follow us</h3>
        </div>
      </section> */}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const dat = await fetch(`https://admin.ingenia.la/api/notes?locale=en&populate=*`)
  const { data } = await dat.json()
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['joinUs', 'common'])),
      notes: data ?? [],
    },
    revalidate: 30,
  }
}
export default ContentHub
