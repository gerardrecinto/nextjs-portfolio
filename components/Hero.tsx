import React from 'react'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-[92vh] flex flex-col justify-center items-center relative" aria-label="Hero">
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
      <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill="purple" />
      <Spotlight className='-top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />

      <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white dark:bg-opacity-20 bg-opacity-20">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100 bg-white" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)' }}></div>
      </div>

      <div className='flex flex-col items-center justify-center relative z-10 max-w-4xl px-4'>
        <p className="text-center uppercase tracking-[0.28em] text-xs text-blue-100">
          Apple CI / Developer Tooling / Release Engineering
        </p>
        <TextGenerateEffect
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words='Building reliable CI/CD platforms for product teams'
        />
        <p className='text-center mb-4 max-w-2xl text-sm leading-6 text-white-200 md:text-lg lg:text-xl'>
          Hi, I&apos;m Gerard, a Senior Software Engineer in San Diego. I build CI/CD pipelines, release automation, developer tooling, and reliability workflows for large-scale cloud platforms.
        </p>
        <a href="#about" className="mt-4">
          <MagicButton 
            title="Show my work"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
    </section>
  )
}

export default Hero
