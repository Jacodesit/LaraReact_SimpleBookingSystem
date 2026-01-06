import React from 'react'
import Header from '@/components/header'

type MainLayoutProps = {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header appName="BookEasy" />
            <main className='px-25'>
                {children}
            </main>
        </>
    )
}
