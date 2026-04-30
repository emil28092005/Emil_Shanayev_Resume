'use client'

import { useEffect, useState } from 'react'

interface Props {
  phrases: readonly string[]
  speed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export function TypingText({
  phrases,
  speed = 75,
  deleteSpeed = 38,
  pauseDuration = 2200,
}: Props) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [pausing, setPausing] = useState(false)

  useEffect(() => {
    if (pausing) return
    const current = phrases[phraseIdx]

    if (!deleting) {
      if (charIdx < current.length) {
        const t = setTimeout(() => setCharIdx((i) => i + 1), speed)
        return () => clearTimeout(t)
      }
      if (phrases.length > 1) {
        const t = setTimeout(() => {
          setPausing(false)
          setDeleting(true)
        }, pauseDuration)
        setPausing(true)
        return () => clearTimeout(t)
      }
      return
    }

    if (charIdx > 0) {
      const t = setTimeout(() => setCharIdx((i) => i - 1), deleteSpeed)
      return () => clearTimeout(t)
    }

    setDeleting(false)
    setPhraseIdx((i) => (i + 1) % phrases.length)
  }, [charIdx, deleting, pausing, phraseIdx, phrases, speed, deleteSpeed, pauseDuration])

  useEffect(() => {
    setDisplayed(phrases[phraseIdx].slice(0, charIdx))
  }, [charIdx, phraseIdx, phrases])

  return (
    <span>
      {displayed}
      <span className="cursor-blink text-terminal-amber">█</span>
    </span>
  )
}
