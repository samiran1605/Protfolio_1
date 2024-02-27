import React from 'react'
import ImageContainer from './ImageContainer'

function Home() {
  return (
    <div className="relative">
      <div className='absolute top-5 left-64 p-4 text-[#C9ADA7] m-2'>

        <div className="mb-24">
          <div className="relative">
            <h1 className='text-center text-9xl text-[#4A4E69]'>INTRO</h1>
            <div className="absolute py-3 bottom-0 inset-x-0 text-center">
              <h2 className='text-center text-5xl text-[#F2E9E4]'>
                Web Design and development</h2>
            </div>
          </div>
          <p className='text-center text-lg text-[#C9ADA7]'>We love crafting websites that not only look amazing but also work seamlessly. Let's team up to make your online vision a reality!</p>
        </div>
        <div className="text-center">-----------------------------------------------------------</div>
        <div className="my-24">
          <div className="relative">
            <h1 className='text-center text-9xl text-[#4A4E69]'>DESIGN</h1>
            <div className="absolute py-3 bottom-0 inset-x-0 text-center">
              <h2 className='text-center text-4xl text-[#F2E9E4]'>Specially tailored to your brand</h2>
            </div>
          </div>
          <p className='text-center text-lg text-[#C9ADA7]'>Crafted with precision, our designs are tailored to uniquely reflect and elevate your brand, ensuring a distinct and impactful online presence.</p>
        </div>

        <div className="text-center">-----------------------------------------------------------</div>

        <div className="my-24">
          <div className="relative">
            <h1 className='text-center text-9xl text-[#4A4E69]'>TIME</h1>
            <div className="absolute py-3 bottom-0 inset-x-0 text-center">
              <h2 className='text-center text-4xl text-[#F2E9E4]'>We value your time as much you do!</h2>
            </div>
          </div>
          <p className='text-center text-lg text-[#C9ADA7]'>We understand and respect your time, ensuring our services are as efficient and effective as possible to match your expectations!</p>
        </div>

        <div className="text-center">-----------------------------------------------------------</div>

        <div className="mt-24 mb-24">
          <h2 className='text-4xl text-[#F2E9E4] mb-4'>Development</h2>
          <p className='text-lg text-[#C9ADA7]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit a, optio maiores inventore voluptate consequuntur sapiente, atque quis vitae rem magnam deleniti.</p>
        </div>

        <ImageContainer/>
        <ImageContainer/>
        <ImageContainer/>

      </div>
    </div >
  )
}

export default Home