import Topbar from "./Topbar"
import Sidebar from "./Sidebar"
import Content from "./Content"
import useAppData from "@/data/hook/useAppData"
import PersistAuthentication from "../auth/PersistAuthentication"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { theme } = useAppData()

    return (
        <PersistAuthentication>
            <div className={` ${theme}
            flex h-screen w-screen
        `}>
                <Sidebar />

                <div className={`flex flex-col bg-gray-200 dark:bg-gray-800 w-full p-7`}>
                    <Topbar title={props.title} subtitle={props.subtitle} />
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </PersistAuthentication>
    )
}