import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-5 sm:px-8 pb-40">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
