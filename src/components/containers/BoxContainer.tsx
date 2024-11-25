

interface BoxContainerProps {
    children?: any
}

export default function BoxContainer(props: BoxContainerProps) {
    return (
        <div className={`
            flex flex-col w-full mt-7 dark:text-gray-200 
        `}>
            {props.children}
        </div>
    )
}