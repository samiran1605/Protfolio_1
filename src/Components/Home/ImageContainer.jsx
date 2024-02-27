import React from 'react'

function ImageContainer() {
  return (
    <>
    <div className="flex flex-row items-center gap-6 p-24">
          <img className='rounded-full h-40 w-40' src='https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='dev image' />
          <div className="flex flex-col items-start">
            <h2 className='text-3xl'>Development</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit a, optio maiores inventore voluptate consequuntur sapiente, atque quis vitae rem magnam deleniti.</p>
          </div>
        </div>
    </>
  )
}

export default ImageContainer