import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 確保 ScrollTrigger 插件已註冊
gsap.registerPlugin(ScrollTrigger)

export const useAnimations = () => {
  const fadeInUp = (elements, delay = 0) => {
    if (!elements) return

    gsap.fromTo(elements,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  const slideInLeft = (elements, delay = 0) => {
    if (!elements) return

    gsap.fromTo(elements,
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  const slideInRight = (elements, delay = 0) => {
    if (!elements) return

    gsap.fromTo(elements,
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  const scaleIn = (elements, delay = 0) => {
    if (!elements) return

    gsap.fromTo(elements,
      {
        scale: 0.8,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  const staggerAnimation = (elements, animation = fadeInUp, stagger = 0.2) => {
    if (!elements || !Array.isArray(elements)) return

    elements.forEach((element, index) => {
      if (element) {
        animation(element, index * stagger)
      }
    })
  }

  // 清理 ScrollTrigger 的方法
  const refreshScrollTrigger = () => {
    ScrollTrigger.refresh()
  }

  const killScrollTriggers = () => {
    ScrollTrigger.killAll()
  }

  return {
    fadeInUp,
    slideInLeft,
    slideInRight,
    scaleIn,
    staggerAnimation,
    refreshScrollTrigger,
    killScrollTriggers
  }
}
