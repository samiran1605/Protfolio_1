import React from 'react'
import ImageContainer from './ImageContainer'
import TitleIntro from './TitleIntro'
import Button from '../Button/Button'


function Home() {
  
  return (
    <div className="relative">
      <div className='absolute scroll-smooth top-5 left-64 p-4 text-[#C9ADA7] m-2'>


        <TitleIntro MegaTitle="INTRO" subtitle="Web Design and development" para="We love crafting websites that not only look amazing but also work seamlessly. Let's team up to make your online vision a reality!" />



        <TitleIntro MegaTitle="DESIGN" subtitle="Specially tailored to your brand" para="Crafted with precision, our designs are tailored to uniquely reflect and elevate your brand, ensuring a distinct and impactful online presence." />


        <TitleIntro MegaTitle="TIME" subtitle="We value your time as much you do!" para="We understand and respect your time, ensuring our services are as efficient and effective as possible to match your expectations!" />

        <div className="mt-24 mb-24">
          <h2 className='text-4xl text-[#F2E9E4] mb-4'>Development</h2>
          <p className='text-lg text-[#C9ADA7]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit a, optio maiores inventore voluptate consequuntur sapiente, atque quis vitae rem magnam deleniti.</p>
        </div>

        <ImageContainer imageOrder="order-none" imageUrl="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageContainer imageOrder="order-last" imageUrl="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageContainer imageOrder="order-none" imageUrl="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

        <div className="text-center mb-24">
          <Button linkto="contact"/>
        </div>

      </div>
    </div >
  )
}

export default Home