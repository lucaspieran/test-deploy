import styles from './slider.module.css'

const SliderIngeniacracy = ({
  title,
  containerClassNames,
}: {
  title: string
  containerClassNames?: string
}) => {
  return (
    <div
      className={`${styles['logo-container']} border-b border-t py-2 lg:py-4 ${containerClassNames} `}
    >
      <div className={`${styles['logo-slide']} ${styles['logo-content']} mx-4 items-center gap-16`}>
        {[...Array(20)].map((_, index) => (
          <>
            <div key={index}>
              <svg
                width="39"
                height="38"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5785 34.7894C28.2988 34.7894 35.368 27.7202 35.368 18.9999C35.368 10.2796 28.2988 3.21045 19.5785 3.21045C10.8583 3.21045 3.78906 10.2796 3.78906 18.9999C3.78906 27.7202 10.8583 34.7894 19.5785 34.7894Z"
                  stroke="white"
                  stroke-width="1.05263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.78906 19H35.368"
                  stroke="white"
                  stroke-width="1.05263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5795 3.21045C23.5289 7.53416 25.7733 13.1452 25.8953 18.9999C25.7733 24.8546 23.5289 30.4657 19.5795 34.7894C15.6301 30.4657 13.3856 24.8546 13.2637 18.9999C13.3856 13.1452 15.6301 7.53416 19.5795 3.21045V3.21045Z"
                  stroke="white"
                  stroke-width="1.05263"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <p className="min-w-fit text-2xl tracking-widest text-white">{title?.toUpperCase()}</p>
          </>
        ))}
      </div>
    </div>
  )
}

export default SliderIngeniacracy
