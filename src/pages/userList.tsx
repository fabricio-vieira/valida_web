import TitleContainer from '@/components/containers/TitleContainer'
import { EditUserIcon, TrashIcon } from '@/components/icons'
import Content from "@/components/template/Content"
import Layout from "@/components/template/Layout"
import User from "@/core/User"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface UserListProps {
    user: User[]
    children: any
    userSelected?: (user: User) => void
    userExcluded?: (user: User) => void
}

const users = [

    new User('1', 'Claudio Vicente', '1042', 'Vendedor', 1, 10, true, false),
    new User('2', 'Maria Torres', '0974', 'Vendedor', 1, 10, false, false),
    new User('3', 'João Cazé', '3033', 'Financeiro', 1, 7, true, false),
    new User('4', 'Ricardo Ezpinoza', '1140', 'Atendente', 1, 5, false, true),

]



export default function UserList(props: UserListProps) {

    function userSelected(user: User) {
        console.log(user.name)
    }

    function userExcluded(user: User) {
        console.log(`Excluindo ... ${user.name}`)
    }

    function renderActions(user: User) {
        return (
            <TableCell>


                <button onClick={() => userSelected?.(user)} className={`
                            text-blue-700 mr-2 hover:text-white hover:bg-blue-400 rounded-xl p-1
                        `}>{EditUserIcon}
                </button>

                <button onClick={() => userExcluded?.(user)} className={`
                            text-red-700 mr-2 hover:text-white hover:bg-red-400 rounded-xl p-1 
                            `}>{TrashIcon}
                </button>

            </TableCell>
        )
    }

    function renderUsers() {
        return users?.map((user, i) => {
            return (
                <TableRow className={`
                ${user.is_excluded && user.is_active === false ? "text-gray-400 " : ""}
                border-b border-gray-300
                `}>
                    <TableCell>{user.code}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.office}</TableCell>
                    <TableCell>{user.company_id}</TableCell>
                    <TableCell>{user.department_id}</TableCell>
                    <TableCell className={`
                        ${user.is_active === true ?
                            "text-green-600" :
                            "text-red-500"} 
                        ${user.is_excluded === true ?
                            "text-gray-400" :
                            ""
                        }
                        `}>{user.is_active === true ? "Ativo" : "Inativo"}</TableCell>
                    {renderActions(user)}

                </TableRow>

            )
        })
    }


    return (
        <Layout title="Gestão de Usuários" subtitle="Faça o registro e edição dos usuários do sistema">
            <div className={`flex flex-col`}>
                <Content>
                    <TitleContainer title="Lista de Usuários" className={`
                    p-6 h-16 items-center text-center
                    `} />
                    {/* <UserTable users={user} /> */}
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader className="bg-gray-300 rounded-lg">
                            <TableRow className="">
                                <TableHead className="">Matrícula</TableHead>
                                <TableHead>Nome</TableHead>
                                <TableHead>Cantina</TableHead>
                                <TableHead>Função</TableHead>
                                <TableHead>Departamento</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {renderUsers()}
                        </TableBody>
                    </Table>
                </Content>

            </div>
        </Layout>
    )
}