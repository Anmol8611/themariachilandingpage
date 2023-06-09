import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section id="hero" className=' bg-[url(/assets/heroImage.png)] h-[calc(100vh-96px)] bg-cover bg-fixed bg-center text-[var(--secondary-cream)] flex flex-col flex-start pl-20 pt-32'>
        <div>
            <img src="/assets/logo.png" alt="logo" />
        </div>
        <h1 className='text-8xl font-bold mt-5'>MARIACHI</h1>
        <p className='text-xl max-w-2xl mt-20 mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eaque sapiente odit quod, voluptas at deserunt nesciunt aliquid debitis soluta?</p>
        <div className='text-[var(--primary-brown)]'><Button text={`ORDER NOW`} bg={`--secondary-cream`}/></div>
    </section>
  )
}

export default Hero