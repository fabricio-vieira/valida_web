import User from "@/core/User"
import Title from "./Title"
import UserTable from "../users/UserTable"

interface ContentContainerProps {
    title: string
    // user: User[]
    children: any
}

export default function ContentContainer(props: ContentContainerProps) {


    return (
        <div className={`
            flex flex-col w-2/3 justify-center items-center
            h-80 bg-gray-200 text-gray-700 dark:bg-gray-900 
            rounded-md
        `}>

            <Title title="Users" />
            <div className="p-6">
                {props.children}
            </div>
            <UserTable />
        </div>

    )
}