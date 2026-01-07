import React from 'react'
import { Toaster } from 'react-hot-toast'

import Header from '@/components/header'

type MainLayoutProps = {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Toaster position='top-right' />
            <Header appName="BookEasy" />
            <main className='px-25'>
                {children}
            </main>
        </>
    )
}
