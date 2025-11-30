import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-full'>
      <div className='text-center'>
        <h1 className='text-6xl text-primary font-bold mb-4'>404</h1>
        <h2 className='text-2xl font-semibold mb-4'>Page Not Found</h2>
        <p className='text-muted-foreground mb-4 max-w-md'>Don't worry, even the best data sometimes get lost in the internet</p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link href={"/"} className='flex items-center justify-center bg-primary px-4 py-2 text-white rounded-md hover:bg-primary/80 transition-colors'>
            <ArrowLeft className='w-4 h-4 mr-2'/>
            Back to Dashboard
          </Link>
        </div>
      </div>
      <footer className='text-center mt-12 text-sm text-muted-foreground'>
        If you believe this is an error, please contact our support team
      </footer>
    </div> 
  )
}
