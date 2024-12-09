import CardButton from "@/components/template/CardButton";
import Layout from "@/components/template/Layout";
import { UsersIcon } from "../components/icons"


export default function Reports() {

    return (
        <Layout title="Consultas e Relatórios" subtitle="Faça consultas e retire relatórios do sistema">
            <div className={`flex`}>
                <CardButton url="/userList" icon={UsersIcon} title="Usuários" />
            </div>
        </Layout>
    )
}