import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './style.css'


const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, reset, getValues
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
    mode: "onSubmit"
  })


  const { errors } = formState;
  const [error, setError] = useState("")


  const onSubmit = (data) => {
    setError("")
    if (isLoading) {
      return;
    }
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;

    const templateParams = {

      from_name: data.username,
      from_email: data.email,
      to_name: 'Samiran Biswas',
      message: data.message

    }

    try {
      setIsLoading(true);
      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          reset()
          setIsLoading(false)
        },
        (error) => {
          setError("Failed to send the mail.")
        },
      );
      console.log('form submitted', data)
    } catch (error) {
      setError(error.message)
    } finally {
      console.log("form submitted finally")
    }
  }

  useEffect(() => {
    if (isLoading) {
      onSubmit(getValues());
    }
  }, [isLoading]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='flex flex-auto text-7xl items-center justify-center text-center p-4 text-[#4A4E69]'>Contact</div>

        <div className="flex flex-row border-2 rounded-2xl mx-8 mt-8 px-8">

          <div className="text-[rgb(201,173,167)] text-2xl flex flex-col w-[50%] h-[50vh] justify-evenly ">

            <div className="flex flex-row ">
              <div className="flex flex-row w-full content-between justify-between">
                <div className="flex flex-auto justify-center items-center w-1/2">
                  <div className="w-1/2 h-full"></div>
                  <div className="w-1/2 ">
                    <label htmlFor="username">Name</label>
                  </div>
                </div>
                <div className="w-1/2">
                  <input type="text" id='username' {...register('username', {
                    required: "Please Enter your name"
                  })} className='text-[#C9ADA7] text-base rounded-md h-[5vh] bg-[#15161E] border-2 border-[#4A4E69]' style={{ width: '100%' }} aria-labelledby="username" /><br />
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-evenly">
              <div className="flex flex-row w-full content-between justify-between">
                <div className="flex flex-auto justify-center w-1/2">
                  <div className="w-1/2"></div>
                  <div className="w-1/2">
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className=" w-1/2">
                  <input type="email" id='email' {...register('email', {
                    required: "email address required",
                    pattern: {
                      value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                      message: 'Please check email address'
                    },
                    validate: {
                      notAdmin: (fieldValue) => {
                        return (
                          fieldValue !== "admin@example.com" ||
                          "This email cannot be used."
                        );
                      },
                      notBlackListed: (fieldValue) => {
                        return (
                          !fieldValue.endsWith("baddomain.com") ||
                          "This domain is not supported."
                        )
                      }
                    }
                  })} className='text-[#C9ADA7] text-base rounded-md h-[5vh] bg-[#15161E] border-2 border-[#4A4E69]' style={{ width: '100%' }} aria-labelledby="email" /><br />
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-evenly">
              <div className="flex flex-row w-full items-center content-between justify-between">
                <div className="flex flex-auto justify-center w-1/2">
                  <div className="w-1/2"></div>
                  <div className="w-1/2">
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="flex justify-center items-start w-1/2">
                  <textarea name='message' id='message' {...register('message', {
                    required: "Message is required"
                  })} className='text-[#C9ADA7] text-base rounded-md bg-[#15161E] border-2 border-[#4A4E69]' rows={2} style={{ width: '100%', maxHeight: '5vh' }} aria-labelledby="message" /><br />
                </div>

              </div>
            </div>
          </div>

          <div className="flex flex-auto w-[50%] text-2xl text-center text-balance text-[#C9ADA7] items-center justify-center p-16">
            <h1>“Every new beginning comes from some other beginning’s end.”</h1>
          </div>
        </div>

        <div className="flex flex-auto w-full justify-center mt-8">

          <button type="submit" disabled={isLoading} className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group z-10">
            
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#F2E9E4] opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#F2E9E4] opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-[#F2E9E4] transition-colors duration-200 ease-in-out group-hover:text-[#101010] ">
                {
                  isLoading ?
                    (
                      <span className='h-8 w-8 group-hover:text-[#101010]'>
                        <svg className="h-6 w-14" viewBox="0 0 40 40">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="#9A8C98" stroke="#9A8C98" strokeWidth="20" width="30" height="30" x="25" y="50"><animate attributeName="y" calcMode="spline" dur="2.9" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></rect><rect fill="#9A8C98" stroke="#9A8C98" strokeWidth="20" width="30" height="30" x="85" y="50"><animate attributeName="y" calcMode="spline" dur="2.9" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></rect><rect fill="#9A8C98" stroke="#9A8C98" strokeWidth="20" width="30" height="30" x="145" y="50"><animate attributeName="y" calcMode="spline" dur="2.9" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></rect>
                          </svg>
                        </svg>
                      </span>
                    )
                    : "Submit" }
              </span>
              <span className="absolute inset-0 border-2 border-[#F2E9E4] rounded-full"></span>
            
          </button>


        </div>

        {(errors && (
          <div className='flex flex-col items-center justify-evenly text-left gap-3 mt-8'>
            {
              errors?.username && (
                <p className='text-[#C9ADA7] text-sm text-left	'>{errors.username?.message}</p>
              )}
            {
              !errors.username && errors.email && (
                <p className='text-[#C9ADA7] text-sm text-left	'>{errors.email?.message}</p>
              )}
            {
              !errors.username && !errors.email && errors.message && (
                <p className='text-[#C9ADA7] text-sm text-left	'>{errors.message?.message}</p>
              )}
          </div>
        ))}

      </form>
      <div className="flex flex-auto w-full items-center text-2xl text-center text-[#4A4E69] text-pretty mt-16 px-64 justify-center">

        <h1>"It's particularly challenging to turn away those who first uncover a body, as they bear the weight of not just rejecting others but also grappling with the profound impact it leaves on their hearts."</h1>

      </div>
    </>
  )
}

export default Contact