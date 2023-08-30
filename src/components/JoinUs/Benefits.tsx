import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useState } from 'react'
import { ArcherContainer, ArcherElement } from 'react-archer'

const Benefits = () => {
  const [work, setWork] = useState(false)
  const [wellness, setWellness] = useState(false)
  const [learneability, setLearneability] = useState(false)
  const [compensations, setCompensations] = useState(false)
  const { t } = useTranslation('joinUs')

  const leftCards = [
    {
      title: 'Life & work balance',
      name: 'work',
      section: work,
      set: setWork,
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
      name: 'wellness',
      section: wellness,
      set: setWellness,
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
  ]

  const rightCards = [
    {
      title: 'Learneability',
      name: 'learneability',
      section: learneability,
      set: setLearneability,
      content: [
        t('legalAndAccountingAdvice'),
        t('careOfYourHealth'),
        t('personalizedCoaching'),
        t('ingenialGiftsForIngenials'),
      ],
    },
    {
      title: 'Compensations',
      name: 'compensations',
      section: compensations,
      set: setCompensations,
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
    <ArcherContainer
      strokeColor="white"
      strokeWidth={1}
      endShape={{ arrow: { arrowLength: 0 } }}
      lineStyle="straight"
    >
      <div className="mx-auto mt-20 hidden h-[500px] max-w-[1200px] justify-between lg:flex ">
        <div className="flex grow flex-col justify-between">
          {leftCards.map(section => (
            <ArcherElement id={section.name} key={Math.random()}>
              <div className="relative w-fit">
                <div
                  className={`${
                    section.section && 'invisible'
                  } flex w-fit min-w-[222px] cursor-pointer justify-center rounded-[50px] border border-white px-6 py-2 hover:bg-[#08FFFF] hover:text-black`}
                  onClick={() => section.set(true)}
                >
                  <p>{section.title}</p>
                </div>

                <div
                  className={`${
                    !section.section ? ' invisible opacity-0' : '!opacity-100 '
                  } absolute top-0 flex w-fit !min-w-[222px] cursor-pointer flex-col justify-center rounded-[11px] border border-white bg-black px-6 py-2 text-white transition-all duration-300 ease-out`}
                  onClick={() => section.set(false)}
                >
                  <p className="text-center">{section.title}</p>
                  <ul className="list-disc px-4 text-[12px]">
                    {section.content.map(el => (
                      <li key={el}>{el}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ArcherElement>
          ))}
        </div>
        <div className="relative shrink-0 self-center">
          <ArcherElement
            id="1"
            relations={[
              {
                targetId: 'work',
                targetAnchor: 'right',
                sourceAnchor: 'bottom',
              },
            ]}
          >
            <div className="absolute left-[74px] top-[32px] bg-white" id="work" />
          </ArcherElement>
          <ArcherElement
            id="2"
            relations={[
              {
                targetId: 'wellness',
                targetAnchor: 'right',
                sourceAnchor: 'bottom',
              },
            ]}
          >
            <div className="absolute bottom-7 left-[74px] bg-white" />
          </ArcherElement>

          <Image src="/joinUs/benefits.png" width={350} height={200} alt="benefits" />

          <ArcherElement
            id="3"
            relations={[
              {
                targetId: 'learneability',
                targetAnchor: 'left',
                sourceAnchor: 'bottom',
              },
            ]}
          >
            <div className="absolute right-[72px] top-[28px]  bg-white" id="work" />
          </ArcherElement>

          <ArcherElement
            id="4"
            relations={[
              {
                targetId: 'compensations',
                targetAnchor: 'left',
                sourceAnchor: 'bottom',
              },
            ]}
          >
            <div className="absolute bottom-[28px] right-[70px]  bg-white" id="work" />
          </ArcherElement>
        </div>
        <div className="flex grow flex-col justify-between">
          {rightCards.map(section => (
            <ArcherElement id={section.name} key={Math.random()}>
              <div className="relative ml-auto w-fit">
                <div
                  className={`${
                    section.section && 'invisible'
                  } flex w-fit min-w-[222px] cursor-pointer justify-center rounded-[50px] border border-white px-6 py-2 hover:bg-[#08FFFF] hover:text-black`}
                  onClick={() => section.set(true)}
                >
                  <p>{section.title}</p>
                </div>

                <div
                  className={`${
                    !section.section ? ' invisible opacity-0' : '!opacity-100 '
                  } absolute top-0 flex w-fit !min-w-[222px] cursor-pointer flex-col justify-center rounded-[11px] border border-white bg-black px-6 py-2 text-white transition-all duration-300 ease-out`}
                  onClick={() => section.set(false)}
                >
                  <p className="text-center">{section.title}</p>
                  <ul className="list-disc px-4 text-[12px]">
                    {section.content.map(el => (
                      <li key={el}>{el}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ArcherElement>
          ))}
        </div>
      </div>
    </ArcherContainer>
  )
}

export default Benefits
