import { WhatsappIcon } from '@/assets/icons/elevate'

const Whatsapp = () => {
  return (
    <div className="fixed bottom-10 right-10 z-40 flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-full bg-[#00CB64] duration-100 ease-linear hover:scale-110">
      <WhatsappIcon className="h-12" />
    </div>
  )
}

export default Whatsapp
