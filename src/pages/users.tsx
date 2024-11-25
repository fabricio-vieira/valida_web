import BoxContainer from "@/components/containers/BoxContainer"
import TitleContainer from '@/components/containers/TitleContainer'
import Layout from "@/components/template/Layout"
import UserTable from "@/components/users/UserTable"
import User from "@/core/User"

interface UsersProps {
    user: User[]
    children: any
}

const user = [

    new User('1', 'Claudio Vicente', '1042', 'Vendedor', 1, 10, true, false),
    new User('2', 'Maria Torres', '0974', 'Vendedor', 1, 10, true, false),
    new User('3', 'João Cazé', '3033', 'Financeiro', 1, 7, true, false),
    new User('4', 'Ricardo Ezpinoza', '1140', 'Atendente', 1, 5, true, false),
    new User('5', 'Tarcisio Vasconcellos', '0536', 'Atendente', 1, 5, true, false),
    new User('6', 'Sandra Amarl', '1009', 'Jovem Aprendiz', 1, 8, true, false),
    new User('7', 'Daniele Paiva', '4550', 'Gerente', 1, 14, true, false)

]

export default function Users(props: UsersProps) {
    return (
        <Layout title="Gestão de Usuários" subtitle="Faça o registro e edição dos usuários do sistema">
            <div className={`flex w-2/3 justify-center items-center`}>
                <BoxContainer>
                    <TitleContainer title="Lista de Usuários" className={`
                    p-6 h-16 items-center text-center border-b-2 border-purple-500
                    `} />
                    <UserTable users={user} />
                </BoxContainer>
            </div>
        </Layout>
    )
}