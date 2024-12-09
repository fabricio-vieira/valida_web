import Link from 'next/link'

interface MenuItemProps {
    url?: string
    text: string
    icon: any
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderLink() {
        return (
            <div className={` 
                flex justify-center sm:justify-start items-center sm:w-40  w-20 h-14 
                text-gray-200  dark:text-gray-300 pl-4 
                 bg-gradient-to-r from-indigo-800 to-blue-950
                 hover:text-cyan-400 hover:border-l-2 hover:border-cyan-300
                ${props.className}`}>
                {props.icon}

                <span className={`hidden sm:flex text-base font-sans text-left ml-2`}>
                    {props.text}
                </span>
            </div>
        )
    }

    return (
        <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800`}>
            {props.url ? (
                < Link href={props.url} >
                    {renderLink()}
                </Link >
            ) : (
                renderLink()
            )}
        </li>
    )
}