'use client'
import { format, isBefore } from 'date-fns'
import { Link } from 'next-view-transitions'
import { AnimatePresence, motion } from 'motion/react'
import { groupBy } from 'es-toolkit'
import type { BlogPost, WeeklyPost } from '@/app/source'

export default function PostList({ list }: { list: (BlogPost | WeeklyPost)[] }) {
  const groupedList = groupBy(list, item => format(item.data.date, 'yyyy'))
  const groupedSortedList = Object.keys(groupedList)
    .sort((a, b) => {
      return Number(b) - Number(a)
    })
    .map(year => {
      const subList = groupedList[year]
      return [
        year,
        subList.sort((a, b) => isBefore(a.data.date, b.data.date) ? 1 : -1),
      ] as const
    })

  return (
    <AnimatePresence>
      <motion.section className="flex flex-col gap-4 mt-8 md:mt-16 mb-56 w-full">
        {
          groupedSortedList.map(([year, sortedList]) => (
            <div className="mt-3" key={year}>
              <h2
                className="text-3xl md:/text-4xl opacity-80 font-bold tracking-tighter my-5 ml-2 md:ml-5"
              >
                {year}
              </h2>
              <motion.ul>
                {
                  sortedList.map(post => (
                    <motion.li
                      key={post.url}
                    >
                      <Link
                        href={post.url}
                        className="group px-2 md:px-5 tracking-tight py-1.5 flex justify-between text-sm md:text-base w-full rounded-md text-slate-600/60 hover:text-slate-600 "
                        prefetch={false}
                      >
                        <motion.span
                          className="flex-1 max-w-[80%] truncate"
                          layoutId={post.data.title}
                          layout="position"
                          transition={{ layout: { type: 'spring', damping: 30, stiffness: 350 } }}

                        >
                          { post.data.title }
                        </motion.span>
                        <span className="text-xs md:text-sm text-gray-400/50 group-hover:text-gray-400 font-mono">{ format(post.data.date, 'yyyy-MM-dd') }</span>
                      </Link>
                    </motion.li>
                  ))
                }
              </motion.ul>
            </div>
          ))
        }
      </motion.section>
    </AnimatePresence>
  )
}
