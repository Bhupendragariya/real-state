import React from 'react'
import socialone from "../assets/image/SocialMediacard(1).png"
import socialtwo from "../assets/image/SocialMediacard(2).png"
import socialthree from "../assets/image/SocialMediacard(3).png"
import socialfour from "../assets/image/SocialMediacard(4).png"
import line from "../assets/image/line(1).png"
import logotop from "../assets/image/logo(1).png"
import { NavLink } from 'react-router'


export default function Header() {
    function hendelemenu(){
        document.getElementById('nave-dail').classList.toggle('hidden')
    }
    

    return (
        <>
            <div className='pb-3'>
                <div className='bg-[#2C3A61]'>
                    <div className=' pt-3 justify-between flex items-center max-w-[1200px]  mx-auto text-white  p-2 '>
                        <a href="" className='items-center text-[0.8rem] font-stretch-50%'>Email us at : exaple@email.com</a>

                        <div className='flex md:gap-10 gap-1 items-center'>
                            <a href="#" > <img src={socialone} alt="social" /></a>
                            <a href="#"><img src={socialtwo} alt="social" /></a>
                            <a href="#"><img src={socialthree} alt="social" /></a>
                            <a href="#"><img src={socialfour} alt="social" /></a>
                        </div>
                    </div>

                </div>
                <div>
                    <img src={line} alt="" />
                </div>
                <div className='pt-3 justify-between flex max-w-[1200px]  mx-auto bg-white items-center p-2'>
                    <div>
                       <a  href=""><img className='w-15 md:w-20' src={logotop} alt="logo" /></a>
                    </div>
                    <div className='hidden lg:flex lg:gap-5 items-center capitalize'>
                        <NavLink to="/">home</NavLink>
                        <NavLink to="/">about us</NavLink>
                        <NavLink to="/">our agents</NavLink>
                        <NavLink to="/galleary">galleary</NavLink>
                        <NavLink to="/blog">blog</NavLink>
                        <NavLink to="/">contactus</NavLink>
                        <NavLink to="/">serach</NavLink>
                    </div>
                    <button className='lg:hidden  ' onClick={hendelemenu}>
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className=' lg:hidden fixed bg-white inset-0 px-3' id='nave-dail'  >
                    <div className='flex justify-between pt-3 '>
                        <a className='w-20' href=""><img src={logotop} alt="logotop" /></a>
                        <button className=' ' type='button' onClick={hendelemenu}>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div >
                        <ul className='pt-7 text-center capitalize'>
                            <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/">home</NavLink></li>
                            <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/">about us</NavLink></li>
                            <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/">our agents</NavLink></li>
                            <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/galleary">galleary</NavLink></li>
                            <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/blog">blog</NavLink></li>
                            <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/">contactus</NavLink></li>
                            <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/">serach</NavLink></li>
                            <li className='m-3 p-3 hover:bg-amber-200 rounded-xl capitalize '><NavLink to="/"><button type='button'>addlisting</button></NavLink></li>
                        </ul>
                    </div>
                </div>


            </div>

        </>
    )
}
