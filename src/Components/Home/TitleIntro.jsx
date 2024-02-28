import React from 'react'

function TitleIntro({MegaTitle, subtitle, para}) {
    return (
        <>
        <div className="mb-24">
            <div className="relative">
                <h1 className='text-center text-9xl text-[#4A4E69]'>{MegaTitle}</h1>
                <div className="absolute py-3 bottom-0 inset-x-0 text-center">
                    <h2 className='text-center text-5xl text-[#F2E9E4]'>
                        {subtitle}</h2>
                </div>
            </div>
            <p className='text-center text-lg text-[#C9ADA7]'>{para}</p>
        </div>
        <div className="text-center mb-16">-----------------------------------------------------------</div>
        </>
    )
}

export default TitleIntro