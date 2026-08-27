'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const ROTATION_MS = 3800

export default function HeroCarousel({ slides = [], locale }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const total = slides.length

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncPreference = () => setReduceMotion(media.matches)
    syncPreference()
    media.addEventListener('change', syncPreference)
    return () => media.removeEventListener('change', syncPreference)
  }, [])

  useEffect(() => {
    if (paused || reduceMotion || total < 2) return undefined
    const timer = window.setInterval(() => setActive((current) => (current + 1) % total), ROTATION_MS)
    return () => window.clearInterval(timer)
  }, [paused, reduceMotion, total])

  if (!total) return null

  const labels = locale === 'es'
    ? { region: 'Galería de portada', previous: 'Imagen anterior', next: 'Imagen siguiente', goTo: 'Mostrar imagen' }
    : { region: 'Homepage gallery', previous: 'Previous image', next: 'Next image', goTo: 'Show image' }
  const displayIndex = active % total
  const current = slides[displayIndex]

  const move = (direction) => {
    setActive((index) => (index + direction + total) % total)
    setPaused(true)
  }

  return (
    <figure
      className="hero__visual hero-carousel"
      role="region"
      aria-label={labels.region}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => !event.currentTarget.contains(event.relatedTarget) && setPaused(false)}
    >
      <div className="hero__image-wrap">
        {slides.map((slide, index) => (
          <div className={`hero-carousel__slide ${index === displayIndex ? 'is-active' : ''}`} aria-hidden={index !== displayIndex} key={slide._key || slide.src}>
            <Image
              src={slide.src}
              alt={index === displayIndex ? slide.alt : ''}
              fill
              priority={index === 0}
              sizes="(max-width: 820px) 92vw, 46vw"
              className="hero__image"
            />
          </div>
        ))}
        <div className="material-tag"><span>sp²</span><strong>Carbon</strong><small>2D lattice</small></div>
        {total > 1 && (
          <div className="hero-carousel__controls">
            <button type="button" onClick={() => move(-1)} aria-label={labels.previous}>←</button>
            <div className="hero-carousel__dots">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  className={index === displayIndex ? 'is-active' : ''}
                  aria-label={`${labels.goTo} ${index + 1}`}
                  aria-current={index === displayIndex ? 'true' : undefined}
                  onClick={() => { setActive(index); setPaused(true) }}
                  key={slide._key || slide.src}
                />
              ))}
            </div>
            <button type="button" onClick={() => move(1)} aria-label={labels.next}>→</button>
          </div>
        )}
      </div>
      <figcaption aria-live="off">{current.caption}</figcaption>
    </figure>
  )
}
