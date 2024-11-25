
interface TitleContainerProps {
    title: string
    subtitle?: string
    className?: string
}

export default function TitleContainer(props: TitleContainerProps) {
    return (
        <div className={props.className}>
            <h1 className={`text-start font-black text-3xl text-gray-900 dark:text-gray-100`}>{props.title}</h1>
        </div>
    )
}