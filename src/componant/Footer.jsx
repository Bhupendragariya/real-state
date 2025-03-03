import React from 'react'
import logo from "../assets/image/logo(1).png"
import logoone from "../assets/image/SocialMediacard(5).png"
import logotwo from "../assets/image/SocialMediacard(6).png"
import logothree from "../assets/image/SocialMediacard(7).png"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <div className=' max-w-[1200px]  mx-auto p-3  mt-10 '>
            <div className='  lg:gap-0  md:grid-cols-4 grid gap-15 grid-cols-2'>
                <div className='md:justify-items-start capitalize flex flex-col gap-4 items-center '>
                    <a href=""><img src={logo} alt="" /></a>
                    <p className='md:text-xl  '>contactus</p>
                    <p>call: 123456789</p>
                    <p className='lg:w-[10rem] w-[10rem]  text-[0.8rem] font-stretch-50% text-center' >Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis. </p>

                    <p className='text-[0.8rem] font-stretch-50% text-center'><Link href="">Email:exampal@email.com</Link></p>
                </div>
                <div className='md:justify-items-center items-center  capitalize flex flex-col gap-4'>
                    <p className=' md:text-xl '>fetures</p>
                    <p className='text-[0.9rem] font-stretch-50%'>home</p>
                    <p className='text-[0.9rem] font-stretch-50%'>become a host</p>
                    <p className='text-[0.9rem] font-stretch-50%'>pricing</p>
                    <p className='text-[0.9rem] font-stretch-50%'>blog</p>
                    <p className='text-[0.9rem] font-stretch-50%'>contact</p>
                </div>
                <div className='md:justify-items-center items-center capitalize flex flex-col gap-4'>
                    <p className='md:text-xl '>company</p>
                    <p className='text-[0.9rem] font-stretch-50%'>about us</p>
                    <p className='text-[0.9rem] font-stretch-50%'>press</p>
                    <p className='text-[0.9rem] font-stretch-50%'>contact </p>
                    <p className='text-[0.9rem] font-stretch-50%'>careers</p>
                    <p className='text-[0.9rem] font-stretch-50%'>blog</p>
                </div>

                <div className='md:justify-items-center items-center capitalize flex flex-col gap-4 '>
                    <p className='md:text-xl '>team and police</p>
                    <p className='text-[0.9rem] font-stretch-50%'>terms of service</p>
                    <p className='text-[0.9rem] font-stretch-50%'>privacy policy</p>
                    <p className='text-[0.9rem] font-stretch-50%'>securcty</p>
                </div>
            </div>
            <div className='pt-5  flex justify-center gap-2'>
                <a href=""><img src={logoone} alt="" /></a>
                <a href=""><img src={logotwo} alt="" /></a>
                <a href=""><img src={logothree} alt="" /></a>
            </div>

        </div>

    </>
  )
}
