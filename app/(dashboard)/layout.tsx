import React from 'react'
import { Separator } from '@/components/ui/separator'
import DesktopSidebar from '@/components/Sidebar'
import BreadcrumbHeader from '@/components/BreadcrumbHeader'
import { ModeToggle } from '@/components/ThemeModeToggle'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
      <DesktopSidebar/> 
      <div className='flex flex-col flex-1 min-h-screen'>
        <header className='flex justify-between items-center py-4 px-6 h-[50px] container'>
          <BreadcrumbHeader/>
          <div className='gap-1 flex items-center'>
            <ModeToggle/>
          </div>
        </header>
        <Separator/> 
        <div className='overflow-auto'>
          <div className='flex-1 container py-4 text-accent-foreground'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
