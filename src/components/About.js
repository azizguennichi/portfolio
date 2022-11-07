import React from 'react'
import fb from '../assets/fb.jpg'
import cv from '../assets/cv.png'


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300' >
<div className='flex flex-col justify-center items-center w-full h-full' >
<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
    <div className='sm:text-right pb-8 pl-4'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
    </div>
    <div>

    </div>
    <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
<div className='sm:text-right text-4xl sm:text-2xl font-bold'>
    <p>Hi, I'm Client, nice to meet you. Please take a look arround.</p>
</div>
<div>
    <p>
    I am a freshman web designer .
     I dedicate myself to continuously learning about new web design trends and concepts . 
    I am determined to help customers modernize with websites and appeal to expanding customer populations.

    </p>
    

</div>

    </div>
</div>
</div>
<div class ="guennichi">
    
<img src={cv} alt="téléchargement Image" />
    <a href="CV Aziz vf2.pdf" download="CV Aziz vf2.pdf">
    <button type="button" class="aziz">Download Cv</button>
        </a>
        </div>
    </div>
    
  )
}

export default About