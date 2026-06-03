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
        <p className="text-center uppercase tracking-[0.28em] text-xs text-blue-100 mb-4">
          XCTest · AI-Assisted CI Triage · Platform Engineering
        </p>
        <TextGenerateEffect
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words='CI/CD systems that recover fast and fail loud'
        />
        <p className='text-center mb-4 max-w-2xl text-sm leading-6 text-white-200 md:text-lg lg:text-xl'>
          Senior Engineer with 8 years across platform automation. I build automation frameworks, AI-assisted failure triage tools,
          and release pipelines. MTTR 30 min → 2 min across 475+ Jenkins pipelines.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-6 text-xs text-white-200">
          <span className="rounded-full border border-white/[0.15] px-3 py-1">Swift 6 · XCTest · xcresulttool</span>
          <span className="rounded-full border border-white/[0.15] px-3 py-1">Python · Claude API · MCP</span>
          <span className="rounded-full border border-white/[0.15] px-3 py-1">Jenkins · K8s · Ansible · Terraform</span>
        </div>
        <a href="#projects" className="mt-2">
          <MagicButton
            title="See the work"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
    </section>
  )
}

export default Hero
