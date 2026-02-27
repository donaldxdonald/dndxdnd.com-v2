'use client'
import { motion } from 'motion/react'
import Balancer from 'react-wrap-balancer'

export function PostTitle({ postTitle}: { postTitle: string }) {
  return (
    <motion.h1
      className="font-bold text-4xl font-serif tracking-tighter mt-5"
      layout="position"
      layoutId={postTitle}
      transition={{ layout: { type: 'spring', damping: 30, stiffness: 350 } }}
    >
      <Balancer>{postTitle}</Balancer>
    </motion.h1>
  )
}
