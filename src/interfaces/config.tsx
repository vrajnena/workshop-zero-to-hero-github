export type WorkshopTheme =
    | 'Light'
    | 'Dark'


export interface ThemeConfigValueIntf {
    bg: string;
    titlePanel: {
        backdropColor: string;
        backdropBrightness: string;
    }
    settingsPanel: {
        attribution: {
            author: string;
            link: string;
        };
        bg: string;
        iconBg: string;
        dropdownBg: string;
    }
    icons: {
        cross: string;
    }
}
export interface ThemeIntf {
    name: WorkshopTheme;
}

export type ThemeConfigIntf = { [key in WorkshopTheme]: ThemeConfigValueIntf };