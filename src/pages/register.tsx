import CardButton from "@/components/template/CardButton"
import { AddUserIcon } from "@/components/icons"
import Layout from "@/components/template/Layout"
interface RegisterDataProps {
    children?: any
}

export default function RegisterData(props: RegisterDataProps) {
    return (
        <Layout title="Gestão de Cadastros" subtitle="Realize os cadastros nessa sessão">
            <div>
                <CardButton url="/userRegister" icon={AddUserIcon} title="Usuários" />
            </div>
        </Layout>
    )

}