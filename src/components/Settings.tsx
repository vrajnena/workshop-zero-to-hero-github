import React from 'react'
import Link from 'next/link'
import { Listbox, Popover, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { SettingsButton, XMarkButton } from './Svg'

import { WorkshopTheme } from '@/interfaces/config'

import { themes, defaultTheme, themeNames } from '@/config/theme'

export const GlobalSettings: React.FC<{ theme: { name: WorkshopTheme }, setTheme: any }> = ({ theme, setTheme }) => {
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            if (!window.localStorage.getItem('theme')) {
                window.localStorage.setItem('theme', JSON.stringify(defaultTheme) as unknown as string)
                setTheme(defaultTheme)
            }
        }
    }, [theme, setTheme])
    const asset = themes[theme.name]

    return (
        <div className='absolute top-2 right-2 flex flex-col z-20'>
            <Popover className="relative">
                {({ open, close }) => (
                    <>
                        <Popover.Button
                            role='button'
                            tabIndex={1}
                            className={`
                            ${open ? '' : 'text-opacity-90'}
                            group inline-flex items-center rounded-md ${asset ? asset.settingsPanel.iconBg : ''} px-3 py-2 text-base font-medium text-white hover:text-opacity-100`}
                        >
                            <span className='sr-only'>Your Settings</span>
                            {
                                open ? (
                                    <XMarkButton />
                                ) : (
                                    <SettingsButton />
                                )
                            }
                        </Popover.Button>
                        <Transition
                            as={React.Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute top-8 right-0 z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-sm">
                                <div className="shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className={`relative flex flex-col gap-8 ${asset ? `${asset.settingsPanel.bg}` : ''} p-8`}>
                                        <h1 className='text-base'>Your Settings</h1>
                                        <p className='text-xs'>Background is provided by <Link className='hover:opacity-75' href={`${asset.settingsPanel.attribution.link}`}>{asset.settingsPanel.attribution.author}.</Link>
                                        </p>
                                        <div className='flex flex-1 items-center gap-8'>
                                            <h2 className='text-sm'>Theme</h2>
                                            <Listbox value={theme} onChange={setTheme}>
                                                <div className="relative">
                                                    <Listbox.Button className={`relative w-full cursor-default rounded-lg ${asset ? asset.settingsPanel.dropdownBg : ''} text-white py-2 pl-2 pr-10 text-left shadow-md focus:outline-none text-xs`}>
                                                        <span className="w-12 ml-2 block truncate text-xs tracking-wider">{theme.name}</span>
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                            <ChevronUpDownIcon
                                                                className="h-5 w-5 text-neutral-400"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </Listbox.Button>
                                                    <Transition
                                                        as={React.Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options
                                                            className="absolute mt-1 max-h-60 w-full overflow-y-scroll rounded-md bg-neutral-200 py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                        >
                                                            {themeNames.map((theme: { name: string }, index: number) => (
                                                                <Listbox.Option
                                                                    key={index}
                                                                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-neutral-100 text-slate-900' : ''}`}
                                                                    value={theme}
                                                                    onClick={() => {close()}}
                                                                >
                                                                    {({ selected }) => (
                                                                        <>
                                                                            <span className={`block truncate tracking-wider ${selected ? 'font-bold' : 'font-normal'}`}>{theme.name}</span>
                                                                            {selected ? (
                                                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 text-green-600`}>
                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </Listbox>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

        </div>
    )
}