import { useState, useEffect, useRef } from 'react'

export function useLazyImage(src) {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (!src) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [src])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setError(true)
  }

  return {
    imageSrc,
    isLoaded,
    error,
    imgRef,
    handleLoad,
    handleError,
  }
}
