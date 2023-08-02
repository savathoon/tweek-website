"`use client`"

import ParticleBackground from '@/components/background'
import Hero from '@/components/hero'
import NavBar from '@/components/nav'

export default function Home() {
  return (
    <>
      <NavBar />
      <ParticleBackground />
      <main className="flex max-h-screen flex-col items-center justify-between p-12 ">
        <Hero />
      </main>
    </>
  )
}
