import { Disclosure, Transition } from '@headlessui/react'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

const BenefitsAccordion = () => {
  const [openPanel, setOpenPanel] = useState(null)
  const { t } = useTranslation('joinUs')

  const handleDisclosureChange = (panelIndex: any) => {
    setOpenPanel(prevPanelIndex => (prevPanelIndex === panelIndex ? null : panelIndex))
  }
  const items = [
    {
      title: 'Life & work balance',
      content: [
        t('flexibleHours'),
        t('remoteFirst'),
        t('workFromAnywhere'),
        t('selfManagementOfYourTime'),
        t('customizableHolidays'),
        t('unlimitedVacations'),
        t('yourBirthdayIsYours'),
        t('extendedWorkLeaves'),
      ],
    },
    {
      title: 'Wellness & Wellbeing',
      content: [
        t('personalizedOnboardingProgram'),
        t('englishLanguageTraining'),
        t('customizedUpskillingPlan'),
        t('unlimitedAccessToPlatforms'),
        t('certifications'),
        t('communityWork'),
        t('personalBranding'),
      ],
    },
    {
      title: 'Learneability',
      content: [
        t('legalAndAccountingAdvice'),
        t('careOfYourHealth'),
        t('personalizedCoaching'),
        t('ingenialGiftsForIngenials'),
      ],
    },
    {
      title: 'Compensations',
      content: [
        t('salariesAndSkillsGoHandInHand'),
        t('quarterlySalaryReviews'),
        t('profitSharing'),
        t('purchaseOrRenewalOfEquipmentBonus'),
        t('rewardsForAddingIngenialsToTheTeam'),
        t('cuponstarMembership'),
      ],
    },
  ]
  return (
    <div className="w-full pt-16 lg:hidden">
      <div className="w-full rounded-2xl p-2">
        {items.map((item, index) => (
          <Disclosure key={item.title}>
            {() => {
              const isPanelOpen = index === openPanel

              return (
                <div className="border-b ">
                  <Disclosure.Button
                    onClick={() => handleDisclosureChange(index)}
                    className="bg-purple-100 hover:bg-purple-200  flex w-full justify-between rounded-lg  py-4 text-left text-[26px] font-medium focus:outline-none"
                  >
                    <span className="text-white">{item.title}</span>
                    {isPanelOpen ? '-' : '+'}
                  </Disclosure.Button>
                  <Transition
                    show={isPanelOpen}
                    className="overflow-hidden"
                    enter="transition transition-[max-height] duration-500 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-500 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    {' '}
                    <Disclosure.Panel className="pb-2 pt-4 text-[17px] text-white">
                      <ul className="list-disc pl-5">
                        {item.content.map(el => (
                          <li key={el}>{el}</li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )
            }}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}

export default BenefitsAccordion
