'use client'
import Banner from '../../public/Images/laptopbanner.jpeg'
import TechBanner from '../../public/Images/techbanner.jpeg'

export default function Header() {
    return (
        <>
            <header>
                <div className='relative w-3xl'>
                    <img className='w-full max-h-100 rounded-t-xl rounded-b-xl' src="Images/techbanner.jpeg" />
                    <div className='absolute  bottom-5 left-3'>
                        <img className='rounded-full max-h-35' src="Images/profilePhoto.jpeg"/>
                    </div>
                </div>
            </header>
        </>
    )
}