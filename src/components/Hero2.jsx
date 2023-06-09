import React from 'react'

const Hero2 = () => {
  return (
    <section className='bg-[url(/assets/Banner2.png)] bg-cover bg-center h-screen text-[--font-cream] bg-[#2e0f22d5] bg-blend-multiply flex flex-col justify-center items-center gap-16'>
        <div>
            <img src="/assets/logo2.png" alt="logo" />
        </div>
        <p className='text-3xl font-semibold max-w-5xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum sapiente accusantium aliquid sequi officiis?</p>
        <h4 className='text-5xl font-bold'>Anchal Raj</h4>
    </section>
  )
}

export default Hero2