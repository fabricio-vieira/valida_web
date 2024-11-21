import { MoonIcon, SunIcon } from "../icons"

interface ButtonChangeThemeProps {
    theme?: string
    alternateTheme?: () => void
}


export default function ButtonChangeTheme(props: ButtonChangeThemeProps) {
    return props.theme === 'dark' ? (
        <div onClick={props.alternateTheme} className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-yellow-400 to-orange-500
            w-14 lg:w-24 h-7 p-1 rounded-full
        `}>
            <div className={`flex items-center justify-center w-6 h-6 rounded-full`}>
                {SunIcon}
            </div>
            <div className={`hidden lg:flex items-center ml-4`}>
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alternateTheme} className={`
            hidden sm:flex items-center cursor-pointer justify-end
            bg-gradient-to-r from-gray-500 to-gray-900
            w-14 lg:w-24 h-7 p-1 rounded-full
        `}>
            <div className={`hidden lg:flex items-center  text-gray-300`}>
                <span>Escuro</span>
            </div>
            <div className={`flex items-center justify-center bg-black text-yellow-300 ml-2 w-6 h-6 rounded-full`}>
                {MoonIcon}
            </div>

        </div>
    )



}