import Title from "./Title"
import ButtonChangeTheme from "./ButtonTheme"
import useAppData from "@/data/hook/useAppData"
import UserAvatar from "./UserAvatar"

interface TopbarProps {
    title: string
    subtitle: string
}

export default function Topbar(props: TopbarProps) {
    const { theme, alternateTheme } = useAppData()

    return (
        <div className={`flex bg-gray-100 p-4 rounded-xl`}>
            <Title title={props.title} subtitle={props.subtitle} />

            <div className={`flex flex-grow justify-end items-center`}>
                {/* <ButtonChangeTheme theme={theme} alternateTheme={alternateTheme} /> */}
                <UserAvatar className="mr-5" />
            </div>

        </div>
    )
}