import MenuItem from "./MenuItem"
import { HomeIcon, SettingsIcon, LogoutIcon, UsersIcon, CompanyIcon, DepartmentIcon, ReportsIcon, TerminalIcon } from "../icons"
import Logo from "./Logo"
import useAuth from "@/data/hook/useAuth"

export default function Sidebar() {
    const { logout } = useAuth()

    return (
        <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900">

            <div className={`
                    flex flex-col items-center justify-center
                    bg-gradient-to-r from-indigo-500 to-purple-800
                    h-20 w-20
                    `}>
                <Logo />
            </div>
            <ul className="flex-grow">

                <MenuItem url="/" text="Inicio" icon={HomeIcon} />
                <MenuItem url="/companies" text="Cantinas" icon={CompanyIcon} />
                <MenuItem url="/users" text="Usuários" icon={UsersIcon} />
                <MenuItem url="/departments" text="Centro de Custo" icon={DepartmentIcon} />
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