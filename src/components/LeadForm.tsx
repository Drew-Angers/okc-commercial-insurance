import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ShieldCheck, Lock, BellOff, Clock, CheckCircle2 } from 'lucide-react'
import type { LeadFormData } from '../types'

const PROPERTY_TYPES = [
  'Office building',
  'Retail / strip mall',
  'Warehouse / industrial',
  'Restaurant',
  'Other',
]

const PROPERTY_VALUES = [
  'Under $500K',
  '$500K–$1M',
  '$1M–$5M',
  '$5M+',
]

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="mt-1 text-sm text-red-600">{message}</p>
}

function InputClass(hasError: boolean) {
  return [
    'w-full px-3 py-2.5 text-sm border rounded',
    'focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]/30 focus:border-[#1a3a5c]',
    'transition-colors placeholder:text-gray-400',
    hasError ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white',
  ].join(' ')
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  )
}

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>()

  function onSubmit(data: LeadFormData) {
    console.log('Lead form submission:', data)
    setSubmitted(true)
  }

  return (
    <div className="relative -mt-28 sm:-mt-36 z-10 max-w-2xl mx-auto mb-16">
      <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
        {submitted ? (
          <SuccessState />
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a5c]">Get your free quote</h2>
              <p className="text-gray-500 text-sm mt-1">
                Takes less than 2 minutes — a broker will follow up within 1 business day.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First name */}
                <div>
                  <Label required>First name</Label>
                  <input
                    type="text"
                    placeholder="Jane"
                    autoComplete="given-name"
                    className={InputClass(!!errors.firstName)}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  <FieldError message={errors.firstName?.message} />
                </div>

                {/* Last name */}
                <div>
                  <Label required>Last name</Label>
                  <input
                    type="text"
                    placeholder="Smith"
                    autoComplete="family-name"
                    className={InputClass(!!errors.lastName)}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  <FieldError message={errors.lastName?.message} />
                </div>

                {/* Email */}
                <div>
                  <Label required>Email address</Label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    autoComplete="email"
                    className={InputClass(!!errors.email)}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email address',
                      },
                    })}
                  />
                  <FieldError message={errors.email?.message} />
                </div>

                {/* Phone */}
                <div>
                  <Label required>Phone number</Label>
                  <input
                    type="tel"
                    placeholder="(405) 555-0100"
                    autoComplete="tel"
                    className={InputClass(!!errors.phone)}
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[\d\s\-().+]{7,}$/,
                        message: 'Enter a valid phone number',
                      },
                    })}
                  />
                  <FieldError message={errors.phone?.message} />
                </div>

                {/* Property type */}
                <div>
                  <Label required>Property type</Label>
                  <select
                    className={InputClass(!!errors.propertyType)}
                    {...register('propertyType', { required: 'Select a property type' })}
                  >
                    <option value="">Select type…</option>
                    {PROPERTY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <FieldError message={errors.propertyType?.message} />
                </div>

                {/* Property value */}
                <div>
                  <Label required>Estimated property value</Label>
                  <select
                    className={InputClass(!!errors.propertyValue)}
                    {...register('propertyValue', { required: 'Select a property value range' })}
                  >
                    <option value="">Select range…</option>
                    {PROPERTY_VALUES.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                  <FieldError message={errors.propertyValue?.message} />
                </div>

                {/* Property address — full width, optional */}
                <div className="sm:col-span-2">
                  <Label>Property address <span className="text-gray-400 font-normal text-xs">(optional)</span></Label>
                  <input
                    type="text"
                    placeholder="123 N Broadway Ave, Oklahoma City, OK 73102"
                    autoComplete="street-address"
                    className={InputClass(false)}
                    {...register('propertyAddress')}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-[#1a3a5c] hover:bg-[#142d47] text-white font-semibold py-3 px-6 rounded transition-colors disabled:opacity-60"
              >
                <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                Connect me with a broker
              </button>

              <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-gray-500">
                <TrustSignal icon={<Lock className="w-3.5 h-3.5" />} label="Your info is private" />
                <TrustSignal icon={<BellOff className="w-3.5 h-3.5" />} label="No spam, ever" />
                <TrustSignal icon={<Clock className="w-3.5 h-3.5" />} label="1 business day response" />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function TrustSignal({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-gray-500">
      {icon}
      <span>{label}</span>
    </div>
  )
}

function SuccessState() {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 border border-green-200 rounded-full mb-4">
        <CheckCircle2 className="w-8 h-8 text-green-600" strokeWidth={1.5} />
      </div>
      <h2 className="text-xl font-bold text-[#1a3a5c] mb-2">You're all set!</h2>
      <p className="text-gray-600 text-sm max-w-sm mx-auto">
        A licensed OKC broker will reach out within 1 business day to discuss your coverage options.
      </p>
      <p className="text-gray-400 text-xs mt-4">
        Have a question in the meantime? Call us at{' '}
        <a href="tel:+14055550100" className="text-[#1a3a5c] font-medium hover:underline">
          (405) 555-0100
        </a>
      </p>
    </div>
  )
}
