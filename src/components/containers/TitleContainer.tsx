
interface TitleContainerProps {
    title: string
    subtitle?: string
    className?: string
}

export default function TitleContainer(props: TitleContainerProps) {
    return (
        <div className={props.className}>
            <h2 className={`text-start font-black text-xl text-gray-900 dark:text-gray-100`}>{props.title}</h2>
        </div>
    )
}