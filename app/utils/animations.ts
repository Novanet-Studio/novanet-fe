import { easeInOut } from "motion-v";

export const animations = {
   header: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 0.5,
         ease: easeInOut,
      },
   },
   footer: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 1,
         ease: easeInOut,
      },
   },
   mainTitle: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
         duration: 0.8,
         delay: 1.5,
         ease: easeInOut,
      },
   }
}