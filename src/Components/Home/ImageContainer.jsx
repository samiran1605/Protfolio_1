import React from 'react'

function ImageContainer({imageOrder, imageUrl}) {
  return (
    <>
    <div className="flex flex-row border-2 gap-6 p-16 m-8">
          <img className={`rounded object-cover border-2 h-[50vh] w-[40vw] transition ease-in-out delay-150 hover:scale-110 duration-500 ${imageOrder}`} src={imageUrl} alt='dev image' style={{scale:1.2}} />
          <div className="flex flex-col items-center border-2 p-16">
            <h2 className='text-4xl  text-[#F2E9E4] py-2'>Development</h2>
            <p className='items-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit a, optio maiores inventore voluptate consequuntur sapiente, atque quis vitae rem magnam deleniti.</p>
          </div>
        </div>
    </>
  )
}

export default ImageContainer