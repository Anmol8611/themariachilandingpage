import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex justify-around bg-[--primary-brown] text-[--secondary-cream] h-screen pt-[25vh]'>

        <div className='flex flex-col items-start gap-20'>
          <h4 className='text-4xl font-bold'>Mariachi</h4>
          <p className='text-lg max-w-xl font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ullam aperiam explicabo quasi placeat rem recusandae officia facere ut saepe!</p>
          <div className='flex items-center gap-10'>
            <FaFacebook className='text-5xl hover:text-sky-500 transition-all'/>
            <FaInstagram className='text-5xl hover:text-sky-500 transition-all' />
            <FaTwitter className='text-5xl hover:text-sky-500 transition-all'/>
            <FaWhatsapp className='text-5xl hover:text-sky-500 transition-all'/>
          </div>
        </div>

        <div className='flex flex-col items-start gap-20'>
          <h4 className='text-4xl font-bold'>About</h4>
          <ul className='flex flex-col gap-8'>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>History</li>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all' cursor-pointer>Our Team</li>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>Brand Guidlines</li>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>Terms & Conditions</li>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        <div className='flex flex-col items-start gap-20'>
          <h4 className='text-4xl font-bold'>Services</h4>
          <ul className='flex flex-col gap-8'>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>How to order</li>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>Our Product</li>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>Offer</li>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>Promo</li>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>Payment Method</li>
          </ul>
        </div>

        <div className='flex flex-col items-start gap-20'>
          <h4 className='text-4xl font-bold'>Other</h4>
          <ul className='flex flex-col gap-8'>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>Contact Us</li>
            <li className='text-lg font-semibold hover:text-sky-500 transition-all cursor-pointer'>Help</li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer