import React from 'react'

import { Github } from '@/components/Svg'
import { Metadata } from '@/components/Metadata'
import { GlobalSettings } from '@/components/Settings'
import { GlobalLayout, VideoBg } from '@/components/Layout'

import { ThemeConfigValueIntf, WorkshopTheme } from '@/interfaces/config'

import { themes, defaultTheme } from '@/config/theme'
import Cfg from "../config/global.json";

export default function Page() {
  const [currentTheme, setCurrentTheme] = React.useState<{ name: WorkshopTheme }>(defaultTheme)
  const [storedTheme, setStoredTheme] = React.useState<{ name: WorkshopTheme }>(defaultTheme)

  // Configure theme
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Get persisted theme if set
      const persistedTheme = JSON.parse(window.localStorage.getItem('theme') as unknown as string)
      if (!persistedTheme) {
        window.localStorage.setItem('theme', JSON.stringify(defaultTheme))
        setCurrentTheme(defaultTheme)
        setStoredTheme(defaultTheme)
      } else {
        setCurrentTheme(persistedTheme)
        setStoredTheme(persistedTheme)
      }
    }
  }, [])

  React.useEffect(() => {
    // Run upon change to theme
    if (typeof window !== "undefined") {
      // Logic to test if theme and is persisted into local storage
      const themeChangeRequired = (storedTheme.name !== currentTheme.name)
      if (themeChangeRequired) {
        window.localStorage.setItem('theme', JSON.stringify(currentTheme))
        setStoredTheme(currentTheme)
      }
    }
  }, [currentTheme, storedTheme])

  const asset: ThemeConfigValueIntf = themes[currentTheme.name]
  const textColor = () => currentTheme.name !== 'Light' ? 'text-white' : ''
  const fillColor = () => currentTheme.name !== 'Light' ? 'fill-white' : ''

  return (
    <>
      <Metadata
        title={`${Cfg.TITLE} | ${Cfg.AUTHOR}`}
        description={Cfg.DESCRIPTION}
      />
      <section className='w-full h-full min-h-screen flex select-none'>
        <VideoBg src={asset ? asset.bg : null} />
        <section className='w-full h-full p-4 flex flex-col justify-center items-center absolute inset-0'>
          <div className='w-full max-w-4xl flex justify-center'>
            <div className={`w-full p-10 flex flex-col text-center items-center justify-center gap-6 ${asset ? asset.titlePanel.backdropColor : ''} rounded-md bg-clip-padding backdrop-filter-sm ${asset ? asset.titlePanel.backdropBrightness : ''} backdrop-blur-md`}>
              <Github fill={fillColor()} />
              <h1 className={`text-4xl ${textColor()}`}>{Cfg.TITLE}</h1>
              <h2 className={`text-lg uppercase ${textColor()}`}>{Cfg.AUTHOR}</h2>
              <p className={`text-lg ${textColor()}`}>{Cfg.DESCRIPTION}</p>
            </div>
            <GlobalSettings
              theme={currentTheme}
              setTheme={setCurrentTheme}
            />
          </div>
        </section>
      </section>
    </>
  )
}

Page.getLayout = function getLayout(page: any) {
  return (
    <GlobalLayout>
      {page}
    </GlobalLayout>
  )
}
