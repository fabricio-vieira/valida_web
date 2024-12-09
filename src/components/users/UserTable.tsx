import User from "@/core/User"

interface UserTableProps {
    users?: User[]
}

export default function UserTable(props: UserTableProps) {

    function renderHeaderTable() {
        return (
            <tr className="">
                <th className="pl-6 text-start">Matrícula</th>
                <th className="py-4 text-start">Nome</th>
                <th className="py-4 text-start">Cantina</th>
                <th className="py-4 text-start">Função</th>
                <th className="py-4 text-start">Departamento</th>
                <th className="py-4 text-start">Ativo</th>
            </tr>
        )
    }

    function renderDataTable() {
        return props.users?.map((user, i) => {
            return (
                // <tr key={user.id} className={`
                //      ${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'}
                // `}>
                <tr key={user.id} className={`
                      text-gray-400 dark:bg-gray-900 border-t-2 border-gray-500 
                `}>
                    <td className="px-6 py-4 border-1 border-gray-400">{user.code}</td>
                    <td className="px-6 py-4 border-1 border-gray-400">{user.name}</td>
                    <td className="px-6 py-4 border-1 border-gray-400">{user.company_id}</td>
                    <td className="px-6 py-4 border-1 border-gray-400">{user.office}</td>
                    <td className="px-6 py-4 border-1 border-gray-400">{user.department_id}</td>
                    <td className="px-6 py-4 border-1 border-gray-400">{user.is_active}</td>
                </tr>
            )
        })
    }

    return (
        <table className="w-full overflow-hidden">
            <thead className={`
                bg-gray-200 text-gray-400 dark:bg-gray-900
                
                `}>
                {renderHeaderTable()}
            </thead>
            <tbody className="text-start font-sans">
                {renderDataTable()}
            </tbody>
        </table>
    )
}