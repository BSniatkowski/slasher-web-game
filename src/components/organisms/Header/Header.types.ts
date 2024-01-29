import { TLocales } from '../../molecules/LanguagePicker/LanguagePicker.types'
import { TLinks } from '../../molecules/Navigation/Navigation.types'

export interface IHeaderProps {
    actualLocale: TLocales
    setActualIntlLocale: (lang: TLocales) => void
    links: TLinks
    isMobile: boolean
}
