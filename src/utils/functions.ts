import { Knowledge, Scalability, Sustainability, Thinking, TimeMarket } from '@/assets/icons'

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const checkDrivers = (driver: string): string | undefined => {
  const driverMap: { [key: string]: string } = {
    sustainability: Sustainability,
    scalability: Scalability,
    time: TimeMarket,
    knowledge: Knowledge,
    thinking: Thinking,
  }

  const normalizedDriver = driver.toLowerCase()

  const foundDrivers = Object.keys(driverMap).filter(key => normalizedDriver.includes(key))

  if (foundDrivers.length > 0) {
    return driverMap[foundDrivers[0]]
  }

  return undefined
}
