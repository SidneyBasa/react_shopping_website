import React from 'react'
import HeroSection from './HeroSection'
import iphone from '../../assets/iphone-14-pro.webp';
import mac from '../../assets/mac-system-cut.jfif';

const HomePage = () => {
  return (
    <div>
        <HeroSection 
        title="Buy iPhone 14 Pro" 
        subtitle="Experience the power of the latest iPhone 14 with our most Pro camera ever."
        Link="/" image={iphone}/>
        {/* Featured Products */}
        {/* Hero section */}
        <HeroSection 
        title="Build the Ultimate setup" 
        subtitle="You can add Studio Display and color matched magic accessories to your bag after you conficure your mac mini."
        Link="/" image={mac}/>
    </div>
  )
}

export default HomePage