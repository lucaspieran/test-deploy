import React, { FormEvent, useEffect, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import { useTranslation } from 'next-i18next'

interface State {
  name: string
  lastName: string
  email: string
  phone: string
  message: string
}

const CForm = () => {
  const { t } = useTranslation('common')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)
  const [state, setState] = useState<State>({
    name: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (status) {
      const timeoutId = setTimeout(() => {
        setStatus(null)
      }, 8000)

      return () => clearTimeout(timeoutId)
    }
  }, [status])

  const handleInputChange = (name: string, value: string) => {
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const requiredFields: (keyof State)[] = ['name', 'lastName', 'email', 'phone']
    const areAllFieldsCompleted = requiredFields.every(field => state[field].trim() !== '')
    setIsSubmitted(true)
    if (!areAllFieldsCompleted) {
      return
    }

    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(state.email)) {
      return
    }

    try {
      setLoading(true)
      const response = await fetch(process.env.NEXT_PUBLIC_URL + 'api/form', {
        method: 'POST',
        body: JSON.stringify(state),
      })
      if (!response.ok) {
        setStatus('error')
        return
      }
      setStatus('success')
      setState({
        name: '',
        lastName: '',
        email: '',
        message: '',
        phone: '',
      })
    } catch (error) {
      setStatus('error')
    } finally {
      setLoading(false)
      setIsSubmitted(false)
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex h-auto max-h-[700px] w-full max-w-[600px] flex-col justify-between rounded-[24px] bg-white px-6 py-8 md:w-[500px] md:basis-1/2 md:p-12 lg:mx-1"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 md:flex-row">
          <Input
            required
            label={t('firstName') as string}
            name="name"
            value={state.name}
            onChange={handleInputChange}
            isSubmitted={isSubmitted}
          />

          <Input
            required
            label={t('lastName') as string}
            name="lastName"
            value={state.lastName}
            onChange={handleInputChange}
            isSubmitted={isSubmitted}
          />
        </div>

        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <Input
            required
            label="Email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            isSubmitted={isSubmitted}
          />

          <Input
            required
            label={t('phoneNumber') as string}
            name="phone"
            value={state.phone}
            onChange={handleInputChange}
            isSubmitted={isSubmitted}
          />
        </div>

        <Input
          label={t('message') as string}
          name="message"
          value={state.message}
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-10 flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex gap-2">
          {status === 'success' && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.667969 8.0013C0.667969 3.95121 3.95121 0.667969 8.0013 0.667969C12.0514 0.667969 15.3346 3.95121 15.3346 8.0013C15.3346 12.0514 12.0514 15.3346 8.0013 15.3346C3.95121 15.3346 0.667969 12.0514 0.667969 8.0013ZM11.4727 5.5299C11.7331 5.79025 11.7331 6.21236 11.4727 6.47271L7.47271 10.4727C7.21236 10.7331 6.79025 10.7331 6.5299 10.4727L4.5299 8.47271C4.26955 8.21236 4.26955 7.79025 4.5299 7.5299C4.79025 7.26955 5.21236 7.26955 5.47271 7.5299L7.0013 9.05849L10.5299 5.5299C10.7902 5.26955 11.2124 5.26955 11.4727 5.5299Z"
                fill="#49BA9A"
              />
            </svg>
          )}
          {status === 'error' && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.84272 1.33464C7.35592 0.445748 8.63892 0.445745 9.15212 1.33464L15.503 12.3346C16.0162 13.2235 15.3747 14.3346 14.3483 14.3346H1.64657C0.620167 14.3346 -0.0213356 13.2235 0.491865 12.3346L6.84272 1.33464ZM7.30857 6.00132C7.30857 5.63313 7.60705 5.33466 7.97524 5.33466C8.34343 5.33466 8.6419 5.63313 8.6419 6.00132V8.66799C8.6419 9.03618 8.34343 9.33466 7.97524 9.33466C7.60705 9.33466 7.30857 9.03618 7.30857 8.66799V6.00132ZM7.97524 10.668C8.34343 10.668 8.6419 10.9665 8.6419 11.3347C8.6419 11.7028 8.34343 12.0013 7.97524 12.0013H7.96857C7.60038 12.0013 7.3019 11.7028 7.3019 11.3347C7.3019 10.9665 7.60038 10.668 7.96857 10.668H7.97524Z"
                fill="#ED1846"
              />
            </svg>
          )}

          {status === 'success' ? (
            <p className="font-nunito text-sm text-[#49BA9A]">
              Thank you! Your message was <br /> sent successfully
            </p>
          ) : status === 'error' ? (
            <p className="font-nunito text-sm text-red-800">
              There was an error sending your <br />
              message. Please try again.
            </p>
          ) : null}
        </div>

        <Button
          title={t('sendMessage')}
          type="submit"
          variant="form"
          className="ml-auto h-fit w-full font-medium md:w-fit md:self-end"
          loading={loading}
        />
      </div>
    </form>
  )
}

export default CForm
