import { InstagramIcon, LinkedinIcon, SpotifyIcon, TwitterIcon, YoutubeIcon } from '@/assets/icons'
import Link from 'next/link'

const SocialMedia = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex h-full cursor-pointer flex-row items-center justify-between lg:gap-8 ${className}`}
    >
      <Link href="https://www.linkedin.com/company/ingenia.la" target="_blank">
        <LinkedinIcon className="h-6" />
      </Link>
      <Link href="https://twitter.com/Ingenia_la" target="_blank">
        <TwitterIcon className="h-6" />
      </Link>
      <Link href="https://www.instagram.com/ingenia.la/" target="_blank">
        <InstagramIcon className="h-6" />
      </Link>
      <Link
        href="https://open.spotify.com/show/3XpDnidkR9dY8nlWF1FDQn?si=040efd1a646742eb"
        target="_blank"
      >
        <SpotifyIcon className="h-6" />
      </Link>

      <Link href="https://www.youtube.com/channel/UCzPv_AB78iJS6wf4se0Y_pw" target="_blank">
        <YoutubeIcon className="h-6" />
      </Link>
    </div>
  )
}

export default SocialMedia
