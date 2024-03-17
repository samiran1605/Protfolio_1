import React from 'react'
import ImageContainer from './ImageContainer'
import TitleIntro from './TitleIntro'
import Button from '../Button/Button'


const titles = [
  { MegaTitle: "INTRO", subtitle: "Web Design and development", para: "We love crafting websites that not only look amazing but also work seamlessly. Let's team up to make your online vision a reality!" },
  { MegaTitle: "DESIGN", subtitle: "Specially tailored to your brand", para: "We love crafting websites that not only look amazing but also work seamlessly. Let's team up to make your online vision a reality!" },
  { MegaTitle: "TIME", subtitle: "We value your time as much you do!", para: "We love crafting websites that not only look amazing but also work seamlessly. Let's team up to make your online vision a reality!" }
];

const imageData = [
  {
    imageOrder:"order-none",imageUrl:"https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    imageOrder:"order-last", imageUrl:"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    imageOrder:"order-none", imageUrl:"https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }

]


function Home() {

  return (
    <div className="relative -z-20">
      <div className='absolute scroll-smooth top-5 p-4 text-[#C9ADA7] m-2'>

        {titles.map((title, index) => (
          <TitleIntro key={index} MegaTitle={title.MegaTitle} subtitle={title.subtitle} para={title.para} />
        ))}

        <div className="border-2 m-8">
          <h1 className='text-9xl text-[#F2E9E4] w-max p-8'>Work</h1>
        </div>


        {imageData.map((data, index) => (
          <ImageContainer key={index} imageOrder={data.imageOrder} imageUrl={data.imageUrl} />
        ))}

        

        <div className="text-center mb-24">
          <Button linkto="contact" />
        </div>

      </div>
    </div >
  )
}

export default Home