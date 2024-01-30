import React from 'react'

const HeroSection = () => {
    return (
        <div className="slide-container">
            <div className='h-[70vh] sm:h-[100vh] sm:pt-20 ' style={{
                backgroundImage: "url(" + "/bgImg.webp" + ")",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.633),rgba(2, 2, 2, 0.633))',
            }}>
                <div className='flex flex-col justify-start items-center h-full w-full' style={{
                    // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.533), rgba(2, 2, 2, 0.533))'
                }}>
                    <div className='flex text-black items-center justify-center pt-28 md:pt-32'>
                        <div className='flex flex-col items-center justify-center '>
                            <h2 className='text-4xl sm:text-5xl md:text-7xl font-semibold my-4 sm:my-16 text-center' >Welcome to Notes Zipper</h2>
                            <h3 className='text-xl sm:text-2xl font-medium' >One Safe Place For Your Notes</h3>
                            <div className='flex gap-x-8 my-5'>
                                <button className='border-orange-600 border-2 hover:text-white hover:bg-orange-500 text-black sm:w-40 p-2 py-1 sm:py-2 mt-5 rounded'  >Sign up</button>
                                <button className='border-orange-600 border-2 hover:text-white hover:bg-orange-500 text-black sm:w-40 p-2 py-1 sm:py-2 mt-5 rounded'  >Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection
