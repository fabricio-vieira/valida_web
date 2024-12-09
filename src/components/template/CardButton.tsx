import Link from 'next/link'

interface CardButtonProps {
    url?: string
    icon: any
    title: string
}

export default function CardButton(props: CardButtonProps) {
    function renderCard() {
        return (
            <div className={`
                flex flex-col w-36 h-36 rounded-xl bg-gray-100
                items-center justify-center cursor-pointer
            `}>
                <div>

                    {props.icon}
                </div>
                <div>

                    {props.title}
                </div>
            </div>
        )

    }
    return (
        <div className={` flex flex-col w-36 h-36 rounded-xl bg-gray-100
                items-center justify-center`}>
            {props.url ? (
                < Link href={props.url} >
                    {renderCard()}
                </Link >
            ) : (
                renderCard()
            )}
        </div>
    )
}