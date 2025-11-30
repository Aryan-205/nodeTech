import { cn } from '@/lib/utils'
import { ShieldX } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function LogoIcon({fontSize="text-2xl", iconSize=20 }:{fontSize?:string, iconSize?:number}) {
  return (
    <Link href={"/"} className={cn("text-2xl font-extrabold flex items-center gap-2",fontSize )}>
      <div className='rounded-xl bg-gradient-to-t from-amber-500 to-amber-600 p-2'>
        <ShieldX size={iconSize} className='stroke-white'/>
      </div>
      <div className='text-stone-800 dark:text-stone-300'>
        NodeTech
      </div>
    </Link>
  )
}
