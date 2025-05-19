import React from 'react'
import Image from 'next/image'
import { Kanit } from 'next/font/google'
 
const kanit = Kanit({
  subsets: ['latin'],
  weight: '700'
})

const Quote = () => {
  return (
    <section className="relative w-full h-100 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/akijuddin.jpg"
        alt="Founder Akij Uddin"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Quote Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 z-20">
        <div className="text-center">
          <p className={`${kanit.className} text-4xl tracking-[25px] md:text-9xl font-bold leading-snug font-playfair text-white`}>
            “Quality First”
          </p>
          <footer className="mt-6 text-xl font-light text-gray-200">
            — Sheikh Akij Uddin
          </footer>
        </div>
      </div>
    </section>
  )
}

export default Quote
