import { useForm } from 'react-hook-form'
import ContatctAccordion from './ContatctAccordion'

type FormData = {
  firstName: string
  lastName: string
  email: string
  company: string
  title: string
  phone: string
  comments: string
  hearAbout: string
}

const Contactform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <section className='bg-white py-16'>
      <div className='max-w-7xl mx-auto px-5 md:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* Left Content */}
          <div>
            {/* <h2 className='text-3xl md:text-4xl font-light text-[#19332C] mb-6'>
              Get Started
            </h2>

            <p className='text-sm text-[#19332C]/80 leading-relaxed mb-8'>
              Designed to meet the evolving demands of the textile industry, our
              cotton card clothing ensures precision, durability, and
              operational consistency. We help spinning mills maximize
              efficiency while maintaining superior yarn quality at every stage
              of production.
            </p> */}

            {/* Accordion */}
            <ContatctAccordion />

            {/* Location */}
            <div className='mt-10'>
              <a href='https://maps.app.goo.gl/Rpd7B4QHFFkFndtRA'>
                <button className='bg-[#19332C] py-3 px-5 text-white text-sm cursor-pointer'>
                  Land Our Location
                </button>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className='bg-[#0D241D]  p-6 md:p-8'>
            <p className='text-white mb-8 text-sm'>
              * These fields are required to submit the form.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              {/* First & Last Name */}
              <div className='grid md:grid-cols-2 gap-5'>
                <div>
                  <label className='text-gray-300 text-xs uppercase block mb-2'>
                    First Name*
                  </label>

                  <input
                    {...register('firstName', {
                      required: 'First name is required'
                    })}
                    placeholder='Enter your first name'
                    className='w-full bg-[#17372E] border border-[#17372E]  px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-green-500'
                  />

                  {errors.firstName && (
                    <p className='text-red-400 text-xs mt-1'>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className='text-gray-300 text-xs uppercase block mb-2'>
                    Last Name*
                  </label>

                  <input
                    {...register('lastName', {
                      required: 'Last name is required'
                    })}
                    placeholder='Enter your last name'
                    className='w-full bg-[#17372E] border border-[#17372E]  px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-green-500'
                  />

                  {errors.lastName && (
                    <p className='text-red-400 text-xs mt-1'>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className='text-gray-300 text-xs uppercase block mb-2'>
                  Email*
                </label>

                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder='yourname@company.com'
                  className='w-full bg-[#17372E] border border-[#17372E]  px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-green-500'
                />

                {errors.email && (
                  <p className='text-red-400 text-xs mt-1'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Company & Title */}
              <div className='grid md:grid-cols-2 gap-5'>
                <div>
                  <label className='text-gray-300 text-xs uppercase block mb-2'>
                    Company*
                  </label>

                  <input
                    {...register('company', {
                      required: 'Company name is required'
                    })}
                    placeholder='Enter your company name'
                    className='w-full bg-[#17372E] border border-[#17372E]  px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-green-500'
                  />
                </div>

                <div>
                  <label className='text-gray-300 text-xs uppercase block mb-2'>
                    Title*
                  </label>

                  <input
                    {...register('title', {
                      required: 'Job title is required'
                    })}
                    placeholder='Enter your job title'
                    className='w-full bg-[#17372E] border border-[#17372E]  px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-green-500'
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className='text-gray-300 text-xs uppercase block mb-2'>
                  Phone
                </label>

                <input
                  {...register('phone')}
                  placeholder='Enter your phone number'
                  className='w-full bg-[#17372E] border border-[#17372E]  px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-green-500'
                />
              </div>

              {/* Comments */}
              <div>
                <label className='text-gray-300 text-xs uppercase block mb-2'>
                  Comments
                </label>

                <textarea
                  {...register('comments')}
                  rows={4}
                  placeholder='Enter your comments here'
                  className='w-full bg-[#17372E] border border-[#17372E]  px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-green-500 resize-none'
                />
              </div>

              {/* Submit */}
              <button
                type='submit'
                className='bg-green-500 hover:bg-green-600 transition-all text-black font-medium px-8 py-4 rounded-full'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactform
