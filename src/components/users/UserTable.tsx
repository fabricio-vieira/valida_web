import User from "@/core/User"

interface UserTableProps {
    users?: User[]
}

export default function UserTable(props: UserTableProps) {

    function renderHeaderTable() {
        return (
            <tr>
                <th className="p-4">Matrícula</th>
                <th className="p-4">Nome</th>
                <th className="p-4">Cantina</th>
                <th className="p-4">Função</th>
                <th className="p-4">Departamento</th>
                <th className="p-4">Ativo</th>
            </tr>
        )
    }

    function renderDataTable() {
        return props.users?.map((user, i) => {
            return (
                <tr key={user.id} className={`
                    ${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'}
                `}>
                    <td className="p-1">{user.code}</td>
                    <td className="p-1">{user.name}</td>
                    <td className="p-1">{user.company_id}</td>
                    <td className="p-1">{user.office}</td>
                    <td className="p-1">{user.department_id}</td>
                    <td className="p-1">{user.is_active}</td>
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-green-600
                text-gray-100
                `}>
                {renderHeaderTable()}
            </thead>
            <tbody className="text-center">
                {renderDataTable()}
            </tbody>
        </table>
    )
}