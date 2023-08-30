import { Knowledge, Scalability, Sustainability, Thinking, TimeMarket } from '@/assets/icons'
import Button from '../Button'
import Router from 'next/router'
import { useTranslation } from 'next-i18next'

function Driver() {
  const { t } = useTranslation('ourWork')

  const items = [
    {
      title: 'sustainability',
      text: 'sustainabilityText',
      icon: Sustainability,
      right: true,
    },
    {
      title: 'timeMarket',
      text: 'timeMarketText',
      icon: TimeMarket,
      right: false,
    },
    {
      title: 'scalability',
      text: 'scalabilityText',
      icon: Scalability,
      right: true,
    },
    {
      title: 'productThinking',
      text: 'productThinkingText',
      icon: Thinking,
      right: false,
    },
    {
      title: 'knowledgeCultivators',
      text: 'knowledgeCultivatorsText',
      icon: Knowledge,
      right: true,
    },
  ]

  return (
    <div>
      <div className="hidden flex-col gap-10 sm:flex">
        {items.map((e, i) =>
          e.right ? (
            <div className="flex" key={i}>
              <div className="flex basis-1/2 justify-center self-center">
                {e.icon && <e.icon className="h-full w-[250px]" />}
              </div>
              <div className="basis-1/2">
                <p className="font-mono text-[40px] text-[#08FFFF]">{t(e.title)}</p>
                <p className="mt-4 text-[20px] text-white">{t(e.text)}</p>
                <Button
                  title="See Case Studies"
                  rightIcon
                  variant="outline"
                  className="mt-8"
                  onClick={() => Router.push('/case-studies')}
                />
              </div>
            </div>
          ) : (
            <div className="lg:flex" key={i}>
              <div className="basis-1/2">
                <p className="font-mono text-[40px] text-[#08FFFF]">{t(e.title)}</p>
                <p className="mt-4 text-[20px] text-white">{t(e.text)}</p>
                <Button title="See Case Studies" rightIcon variant="outline" className="mt-8" />
              </div>
              <div className="flex basis-1/2 justify-center self-center">
                {e.icon && <e.icon className="h-full w-[250px]" />}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Driver
