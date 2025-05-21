import localFont from 'next/font/local';
import React from 'react'


const groditaBold = localFont({
  src: '../app/fonts/Gordita-Bold.otf',
  display: 'swap',
});
const Footer = () => {
  return (
    <div className="footer relative flex  flex-col w-full h-[12vh] md:h-[16vh] lg:h-[50vh] bg-[#000] ">
      <div className={`${groditaBold.className} text-[#FCFFE7] flex items-center justify-center uppercase  lgo text-[15vw]`}>
        Akij group.
      </div>
    </div>
  )
}

export default Footer