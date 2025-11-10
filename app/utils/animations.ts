import { easeInOut } from "motion-v";

export const animations = {
   emblem: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1, rotate: 360 },
      transition: {
         duration: 0.8,
         delay: 1,
         ease: easeInOut,
      },
   },
   header: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 0.25,
         ease: easeInOut,
      },
   },
   footer: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 0.75,
         ease: easeInOut,
      },
   },
   mainTitle: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 1,
         ease: easeInOut,
      },
   },
   description: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 1.25,
         ease: easeInOut,
      },
   },
   cta: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 1.5,
         ease: easeInOut,
      },
   },
   mainImage: {
      initial: { x: 500, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: {
         duration: 1,
         delay: 1,
         ease: easeInOut,
      },
   },
   ThirdElement: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 1.5,
         ease: easeInOut,
      },
   },
   FourthElement: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 1.75,
         ease: easeInOut,
      },
   },
   FifthElement: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 2,
         ease: easeInOut,
      },
   },

}