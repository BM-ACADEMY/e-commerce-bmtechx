import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    var date=new Date().getFullYear();
  return (
    <footer className='border-t'>
        <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
            <p>All Rights Reserved © <a href="https://bmtechx.in/" target='_block'> BMtechx.in</a> {date}.</p>

            {/* <div className='flex items-center gap-4 justify-center text-2xl'>
                <a href='' className='hover:text-primary-100'>
                    <FaFacebook/>
                </a>
                <a href='' className='hover:text-primary-100'>
                    <FaInstagram/>
                </a>
                <a href='' className='hover:text-primary-100'>
                    <FaLinkedin/>
                </a>
            </div> */}
        </div>
    </footer>
  )
}

export default Footer
