
interface TitleProps {
    title: string
    subtitle?: string
    className?: string
}

export default function Title(props: TitleProps) {
    return (
        <div className={props.className}>
            <h1 className={`font-black text-3xl text-gray-900 dark:text-gray-100`}>{props.title}</h1>
            <h2 className={`font-light text-sm text-gray-600 dark:text-gray-400`}>{props.subtitle}</h2>
        </div>
    )
}