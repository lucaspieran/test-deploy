import { CardLinkedin, RightArrow } from '@/assets/icons'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

export interface Team {
  name: string
  image: string
  role: string
  circles: string[]
  linkedin: string
  bioEsp: string
  bioEng: string
}

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  data?: Team
}

export default function Modal({ setIsOpen, isOpen = true, data }: Props) {
  const { locale } = useRouter()
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center px-[5vw] py-[10vh] text-center lg:min-h-full lg:p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="relative mt-2 h-[258px] lg:h-[325px]">
                    <Image
                      src={data?.image ?? ''}
                      alt=""
                      fill
                      className="pointer-events-none object-cover object-top"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="font-bold text-[#343434]">{data?.name}</p>
                    <p className="text-[14px] font-bold text-[#505050]/60">{data?.role}</p>

                    <div className="mt-1 max-h-[100px] overflow-auto lg:max-h-[200px]">
                      <p className="text-[12px] text-[#505050]">
                        {locale === 'en' ? data?.bioEng : data?.bioEsp}
                      </p>
                    </div>
                    <div className="mt-4  flex gap-4">
                      <div className="flex w-fit cursor-pointer items-center gap-2 rounded-[28px] border border-[#323232] px-4 py-1 text-[12px] text-[#323232] hover:!border-white/[0.2]">
                        Read me
                        <RightArrow className="h-3 stroke-[#323232]" />
                      </div>

                      <div className="grid cursor-pointer place-items-center rounded-full border border-[#323232] p-2 hover:border-white/[0.2]">
                        <a href={data?.linkedin}>
                          <CardLinkedin className="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
