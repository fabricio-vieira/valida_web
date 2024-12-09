import MenuItem from "./MenuItem"
import { HomeIcon, SettingsIcon, LogoutIcon, UsersIcon, CompanyIcon, DepartmentIcon, ReportsIcon, TerminalIcon } from "../icons"
import Logo from "./Logo"
import useAuth from "@/data/hook/useAuth"

export default function Sidebar() {
    const { logout } = useAuth()

    return (
        <aside className={`
            flex flex-col
            text-gray-700 dark:bg-gray-900
             bg-gradient-to-r from-indigo-800 to-blue-950
            `}>

            <div className={`
                    flex flex-col items-center justify-center w-20                   
                    h-32 sm:w-40
                    `}>
                <Logo />
            </div>
            <ul className="flex flex-col h-full">

                <MenuItem url="/" text="Inicio" icon={HomeIcon} />
                <MenuItem url="/companies" text="Cantinas" icon={CompanyIcon} />
                <MenuItem url="/register" text="Cadastro" icon={UsersIcon} />
                <MenuItem url="/departments" text="Info" icon={DepartmentIcon} />
                <MenuItem url="/reports" text="Relatórios" icon={ReportsIcon} />
                <MenuItem url="/terminal" text="Terminais" icon={TerminalIcon} />
                <MenuItem url="/settings" text="Ajustes" icon={SettingsIcon} />
            </ul>
            <ul>
                <MenuItem url="/" text="Sair" icon={LogoutIcon}
                    onClick={logout}
                    className={`
                        text-red-600 hover:bg-red-400 hover:text-white
                        dark:text-orange-400 dark:hover:text-black dark:hover:bg-orange-600
                        `}
                />
            </ul>
        </aside>
    )
}