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
                flex flex-col justify-center items-center w-20 h-20 
                text-gray-600  dark:text-gray-300
                ${props.className}`}>
                {props.icon}

                <span className={`text-xs font-light`}>
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