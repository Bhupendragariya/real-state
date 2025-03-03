import React from 'react'
import imgone from "../assets/image/Rectangle11.png"
import imgtwo from "../assets/image/Rectangle12.png"
import imgthree from "../assets/image/Rectangle13.png"
import imgfour from "../assets/image/Rectangle14.png"
import imgfive from "../assets/image/Rectangle11.png"
import sell from "../assets/image/Home1.png"
import rent from "../assets/image/Home2.png"
import buy from "../assets/image/Home3.png"
import free from "../assets/image/Home4.png"
import fame from "../assets/image/Frame94.png"
import fametwo from "../assets/image/Frame95.png"
import fameThree from "../assets/image/Frame96.png"
import famefour from "../assets/image/Frame97.png"
import famefive from "../assets/image/Frame98.png"
import famesix from "../assets/image/Frame99.png"
import group7 from "../assets/image/Group7.png"
import group8 from "../assets/image/Group8.png"
import group9 from "../assets/image/Group9.png"
import group10 from "../assets/image/Group10.png"
import group11 from "../assets/image/Group11.png"
import leftbutton from "../assets/image/Frame104.png"
import rightbutton from "../assets/image/Frame103.png"
import bottom from "../assets/image/Calltoaction.png"




export default function Home() {
return (
    <>
        <div className='px-2 max-w-[1200px]  mx-auto '>
            <div className='lg:mt-20 md:mt-10 mt-10 '>
                <div className='text-center'>
                    <h2 className='font-bold text-xl'>Propertice by Are</h2>
                    <p className='md:w-xl justify-self-center pt-5 text-[0.9rem] font-stretch-50%'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
                </div>
                <div className='grid md:grid-cols-3 justify-items-center mt-10 gap-5  grid-cols-1'>
                    <div><img src={imgtwo} alt="img" /></div>
                    <div><img src={imgone} alt="img" /></div>
                    <div><img src={imgthree} alt="img" /></div>
                    <div className='md:col-span-2 md:w-[110%] hidden md:block '><img className='items-center justify-self-center -mt-6' src={imgfour} alt="img" /></div>
                    <div className='md:w-full pb-8'><img src={imgfive} alt="img" /></div>
                </div>
            </div>
        </div>
        <div className=' bg-[#EDEFF6]'>
            <div className=' pt-5 px-2 max-w-[1200px]  mx-auto pb-10'>
                <div className='text-center'>
                    <h3 className='font-bold text-xl'>Propertice by Are</h3>
                    <p className='md:w-xl justify-self-center pt-2 text-[0.9rem] font-stretch-50%  '>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
                </div>
                <div className='grid lg:grid-cols-4  md:grid-cols-2 text-center md:gap-10 md:pt-5 '>
                    <div className='lg:justify-items-start justify-items-center pt-7'>
                        <img className='w-[50px] ' src={sell} alt="" />
                        <p className='font-bold pt-3'>Sell your home</p>
                        <p className='md:text-start w-50  pt-3 text-[0.9rem] font-stretch-50% '>We do a free evaluation to be sure you want to start selling.</p>
                        <ul className='pt-4 text-[0.9rem] font-stretch-50%'>
                            <li><a href="">Learn more</a></li>
                        </ul>
                    </div>
                    <div className='lg:justify-items-start justify-items-center pt-7'>
                        <img className='w-[50px] ' src={rent} alt="" />
                        <p className='font-bold pt-3'>Rent your home</p>
                        <p className='md:text-start w-50  pt-3 text-[0.9rem] font-stretch-50%'>We do a free evaluation to be sure you want to start selling.</p>
                        <ul className='pt-4 text-[0.9rem] font-stretch-50%'>
                            <li><a href="">Learn more</a></li>
                        </ul>
                    </div>
                    <div className='lg:justify-items-start justify-items-center pt-7'>
                        <img className='w-[50px] ' src={buy} alt="" />
                        <p className='font-bold pt-3'>Buy a home</p>
                        <p className='md:text-start w-50 pt-3 text-[0.9rem] font-stretch-50% '>We do a free evaluation to be sure you want to start selling.</p>
                        <ul className='pt-4 text-[0.9rem] font-stretch-50%'>
                            <li><a href="">Learn more</a></li>
                        </ul>
                    </div>
                    <div className='lg:justify-items-start justify-items-center pt-7'>
                        <img className='w-[50px] ' src={free} alt="" />
                        <p className='font-bold pt-3'>Free marketing</p>
                        <p className='md:text-start w-50 pt-3 text-[0.9rem] font-stretch-50%'>We do a free evaluation to be sure you want to start selling.</p>
                        <ul className='pt-4 text-[0.9rem] font-stretch-50%'>
                            <li><a href="">Learn more</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          
        </div>
        <div className='px-2 max-w-[1200px]  mx-auto'>
            <div className='pt-10 '>
                <div className='text-center'>
                    <h4 className='font-bold text-xl'>Propertice by Are</h4>
                    <p className='md:w-xl justify-self-center pt-2 text-[0.9rem] font-stretch-50%'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
                </div>
                <div className=' pt-5 '>
                    <div className='md:flex justify-items-center  '>
                        <div className=''>
                            <img className='w-[90%] justify-self-center' src={fame} alt="" />
                        </div>
                        <div>
                            <img className='w-[90%] justify-self-center' src={fametwo} alt="" />
                        </div>
                        <div>
                        <img className='w-[90%] justify-self-center' src={fameThree} alt="" />
                        </div>
                    </div>
                    <div className='md:flex justify-items-center'>
                        <div>
                        <img className='w-[90%] justify-self-center' src={famefour} alt="" />
                        </div>
                        <div>
                        <img className='w-[90%] justify-self-center' src={famefive} alt="" />
                        </div>
                        <div>
                        <img className='w-[90%] justify-self-center' src={famesix} alt="" />
                        </div>
                    </div>
                    <div className='md:flex justify-items-center'>
                        <div>
                        <img className='w-[90%] justify-self-center' src={famefour} alt="" />
                        </div>
                        <div>
                        <img className='w-[90%] justify-self-center' src={famefive} alt="" />
                        </div>
                        <div>
                        <img className='w-[90%] justify-self-center' src={famesix} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='px-2 max-w-[1200px]  mx-auto'>
            <div className='pb-10 '>
                <div className='text-center'>
                    <h5 className='font-bold text-xl'>Propertice by Are</h5>
                    <p className='md:w-xl justify-self-center pt-2 text-[0.9rem] font-stretch-50%'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
                </div>
                <div className="w-full overflow-x-auto flex space-x-4 pt-9 no-scrollbar "> 
                    <img className="h-90 w-90 rounded-md" src={group7} alt="" />
                    <img className="h-70 w-80 rounded-md" src={group8} alt="" />
                    <img className="h-70 w-80 rounded-md" src={group9} alt="" />
                    <img className="h-70 w-80 rounded-md" src={group10} alt="" />
                    <img className="h-70 w-80 rounded-md" src={group11} alt="" />
                    <img className="h-70 w-80 rounded-md" src={group10} alt="" />
                </div> 
                <div >
                    <button className='flex justify-self-center md:gap-5  gap-2'>
                        <img className='md:w-[30px] md:h-[30px] w-[20px] h-[20px]' src={leftbutton} alt="" /> <img className='md:w-[30px] md:h-[30px] w-[20px] h-[20px]' src={rightbutton} alt="" />
                    </button>
                
                </div>
            </div>
        </div>
        <div>
            <img src={bottom} alt="" />
        </div>
    </>
)
}
