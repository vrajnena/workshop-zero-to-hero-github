import React from "react";

export const GlobalLayout: React.FC<{ children: any }> = ({ children }) => {

    if (localStorage.theme !== 'Light' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.removeItem('osTheme')
        localStorage.setItem('osTheme', 'dark')
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
    } else {
        localStorage.removeItem('osTheme')
        localStorage.setItem('osTheme', 'light')
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
    }

    return (
        <main>
            <div className='relative w-full h-full overflow-hidden'>
                {children}
            </div>
        </main>
    )
}

export const VideoBg: React.FC<{ src: string | null }> = ({ src }) => {
    return (
        <>
            <video autoPlay loop muted playsInline disablePictureInPicture disableRemotePlayback className='absolute inset-0 w-full h-full object-cover pointer-events-none' src={src ? src : undefined}></video>
            <div className='absolute inset-0' />
        </>
    )
}
