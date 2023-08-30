import { RightArrow, RightArrowBlack } from '@/assets/icons'
import { classNames } from '@/utils/functions'

interface Props {
  title: string
  size?: 'sm' | 'md' | 'lg'
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'white'
    | 'startia'
    | 'devify'
    | 'elevate'
    | 'form'
  className?: string
  rightIcon?: boolean
  rightArrowBlack?: boolean
  rightArrowColor?: string
  type?: 'button' | 'submit'
  loading?: boolean
  onClick?: () => void
}

const Button = ({
  title = '',
  size = 'md',
  variant = 'primary',
  className = '',
  rightIcon,
  type = 'button',
  loading,
  onClick,
  rightArrowBlack,
  rightArrowColor,
}: Props) => {
  const sizeButton =
    size === 'sm'
      ? 'px-2 py-2 text-xs'
      : size === 'md'
      ? 'px-5 py-2.5 text-sm'
      : size === 'lg'
      ? 'px-8 py-3 text-lg'
      : ''

  const variantColor =
    variant === 'primary'
      ? 'bg-[#08FFFF] text-black hover:bg-[#4CE8E8] sm:bg-transparent sm:text-white sm:border sm:border-white sm:hover:text-black sm:hover:border-transparent'
      : variant === 'secondary'
      ? 'bg-secondary text-white hover:border-white hover:opacity-90'
      : variant === 'outline'
      ? 'bg-transparent text-white border-2 hover:!border-white !border-white hover:bg-white hover:text-black'
      : variant === 'white'
      ? 'bg-white px-6 py-2 text-[#000228] text-[15px] leading-5 tracking-[0.6px] '
      : variant === 'startia'
      ? 'bg-[#E3FC29] hover:opacity-90'
      : variant === 'devify'
      ? 'bg-purple hover:opacity-90'
      : variant === 'form'
      ? 'bg-[#08FFFF] text-black border border-transparent'
      : variant === 'elevate'
      ? 'bg-black text-white hover:opacity-90'
      : ''
  return (
    <button
      type={type}
      className={classNames(
        'group flex items-center justify-center gap-3 rounded-[35px] font-bold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        sizeButton,
        variantColor,
        className
      )}
      disabled={!!loading}
      onClick={onClick}
    >
      {title}

      {rightIcon ? (
        <RightArrow
          className={`h-3 ${
            rightArrowColor
              ? rightArrowColor
              : variant === 'primary'
              ? 'stroke-black group-hover:stroke-white sm:stroke-white sm:group-hover:stroke-black'
              : variant === 'outline'
              ? 'stroke-white group-hover:stroke-black'
              : 'stroke-black'
          }`}
        />
      ) : null}
      {rightArrowBlack && <RightArrowBlack className="h-3 !stroke-black" />}

      {loading && (
        <div
          className={`h-4 w-4 animate-spin rounded-full border-2 border-solid border-black border-t-transparent`}
        ></div>
      )}
    </button>
  )
}

export default Button
