import React from 'react'
import contact from "../assets/image/Calltoaction.png"
import { useForm } from "react-hook-form"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Contactus() {


    const {handleSubmit,  formState: { errors } } = useForm();

    const onSubmit = data => console.log(data)
        
    

    const containerStyle = {
        width: "100%",
        height: "350px",
      };
      
      const center = {
        lat: 28.7041, 
        lng: 77.1025,
      };


    return (
        <div>
            <div >
                <img src={contact} alt="" />
            </div>
            <div  className='max-w-[1200px] h-auto mx-auto pt-5  lg:grid lg:grid-cols-2 items-center px-3 gap-5'>
                <div className='mt-7'>
                    <LoadScript googleMapsApiKey="https://www.google.com/maps/dir/30.3345808,78.0537807/601+Geary+St+San+Francisco,+CA+94102,+USA/@32.5957084,109.6324514,6.11z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80858091daf92ce5:0x9f0eeebcc98eb6d6!2m2!1d-122.4133208!2d37.7866226?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                   
                </div>
                <div className='items-center  pt-5'>
                    <h2 className='font-bold text-xl'>Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div >
                        <input type="text" placeholder='Your Name' className=' w-full rounded border mt-5 px-2 ' />
                        </div>
                        <div >
                        <input type="email" placeholder='Your Email' className='w-full rounded border mt-5 px-2'/>
                        </div>
                        <div >
                        <input type="text"  placeholder='Your Contact' className='w-full rounded-sm border mt-5 px-2'/>
                        </div>
                        <div>
                        <textarea name="massage" rows={4} placeholder='text your massage' className='w-full rounded border mt-5 px-2'></textarea>
                        </div>
                        
                        <div>
                        <input type="submit" className='w-full rounded-xl bg-amber-500 mt-5 pt-1 pb-1' />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
