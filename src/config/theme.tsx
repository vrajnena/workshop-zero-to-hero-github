import { ThemeConfigIntf, ThemeIntf } from "@/interfaces/config";

export const themeNames: ThemeIntf[] = [{ name: 'Light' }, { name: 'Dark' }]
export const defaultTheme: ThemeIntf = themeNames[0];
export const themes: ThemeConfigIntf = {
    Light: {
        bg: 'bgLight.mp4',
        titlePanel: {
            backdropColor: 'bg-neutral-300/40',
            backdropBrightness: 'backdrop-brightness-100'
        },
        settingsPanel: {
            attribution: {
                author: 'Engin Akyurt',
                link: 'https://www.pexels.com/video/mixing-colors-in-the-water-6721009/',
            },
            bg: 'bg-neutral-200/80',
            iconBg: 'bg-neutral-500 hover:bg-neutral-600',
            dropdownBg: 'bg-neutral-800/80',
        },
        icons: {
            cross: 'text-neutral-600 hover:opacity-75'
        },
    },
    Dark: {
        bg: 'bgDark.mp4',
        titlePanel: {
            backdropColor: 'bg-slate-400/10',
            backdropBrightness: 'backdrop-brightness-75'
        },
        settingsPanel: {
            attribution: {
                author: 'Ingrid North',
                link: 'https://www.pexels.com/video/the-sun-illuminating-earth-s-surface-1851190/',
            },
            bg: 'bg-slate-200/80',
            iconBg: 'bg-slate-700 hover:bg-slate-800',
            dropdownBg: 'bg-slate-800/80',
        },
        icons: {
            cross: 'text-slate-800 hover:opacity-75'
        }
    }
}
