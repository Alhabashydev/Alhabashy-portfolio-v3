// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// export default function CustomCursor() {
//   const [pos, setPos] = useState({ x: -100, y: -100 })
//   const [follower, setFollower] = useState({ x: -100, y: -100 })
//   const [isHovering, setIsHovering] = useState(false)
//   const [isTouch, setIsTouch] = useState(false)

//   useEffect(() => {
//     if ('ontouchstart' in window) {
//       setIsTouch(true)
//       return
//     }

//     let animId: number
//     let followerX = -100
//     let followerY = -100

//     const onMove = (e: MouseEvent) => {
//       setPos({ x: e.clientX, y: e.clientY })
//     }

//     const animate = () => {
//       followerX += (pos.x - followerX) * 0.12
//       followerY += (pos.y - followerY) * 0.12
//       setFollower({ x: followerX, y: followerY })
//       animId = requestAnimationFrame(animate)
//     }

//     const onEnter = (e: MouseEvent) => {
//       const target = e.target as HTMLElement
//       if (target.closest('a, button, [data-hover]')) {
//         setIsHovering(true)
//       }
//     }

//     const onLeave = () => setIsHovering(false)

//     window.addEventListener('mousemove', onMove, { passive: true })
//     document.addEventListener('mouseenter', onEnter, true)
//     document.addEventListener('mouseleave', onLeave, true)
//     animId = requestAnimationFrame(animate)

//     return () => {
//       window.removeEventListener('mousemove', onMove)
//       document.removeEventListener('mouseenter', onEnter, true)
//       document.removeEventListener('mouseleave', onLeave, true)
//       cancelAnimationFrame(animId)
//     }
//   }, [pos.x, pos.y])

//   if (isTouch) return null

//   return (
//     <>
//       {/* Dot */}
//       <motion.div
//         className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
//         animate={{
//           x: pos.x - 4,
//           y: pos.y - 4,
//           scale: isHovering ? 1.5 : 1,
//         }}
//         transition={{ type: 'spring', stiffness: 800, damping: 40 }}
//         style={{
//           width: 8,
//           height: 8,
//           background: '#fff',
//         }}
//       />
//       {/* Follower ring */}
//       <motion.div
//         className="fixed pointer-events-none z-[9998] rounded-full border"
//         animate={{
//           x: follower.x - 18,
//           y: follower.y - 18,
//           scale: isHovering ? 1.6 : 1,
//           opacity: isHovering ? 0.6 : 0.3,
//         }}
//         transition={{ type: 'spring', stiffness: 120, damping: 20 }}
//         style={{
//           width: 36,
//           height: 36,
//           borderColor: 'rgba(255,255,255,0.5)',
//         }}
//       />
//     </>
//   )
// }
