import React from 'react'

function ImageContainer({imageOrder, imageUrl}) {
  return (
    <>
    <div className="flex flex-row items-center gap-6 p-16">
          <img className={`rounded object-cover h-40 w-40 ${imageOrder}`} src={imageUrl} alt='dev image' />
          <div className="flex flex-col items-start">
            <h2 className='text-4xl text-[#F2E9E4] py-2'>Development</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit a, optio maiores inventore voluptate consequuntur sapiente, atque quis vitae rem magnam deleniti.</p>
          </div>
        </div>
    </>
  )
}

export default ImageContainer