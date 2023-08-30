interface Props {
  currentIndex?: number | undefined
}

export const Step = ({ currentIndex }: Props) => {
  return (
    <div className="flex w-fit flex-col gap-1  px-4 pt-[55%] opacity-80">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-2xl duration-200 ease-in ${
            index === currentIndex ? 'h-5 bg-cyan-400' : 'bg-zinc-700'
          }`}
        />
      ))}
    </div>
  )
}
