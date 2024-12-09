import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import Layout from "@/components/template/Layout"
import { Input } from "@/components/ui/input"

interface userRegisterProps {
    children?: any
}

const departments = [
    { id: "1", title: "UTI" },
    { id: "2", title: "Centro Cirurgico" },
    { id: "3", title: "Enfermagem" },
    { id: "4", title: "Atendimento" },

]

export default function userRegister(props: userRegisterProps) {
    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [office, setOffice] = useState("")
    const [department, setDepartment] = useState("")

    function renderDepartments() {
        return departments?.map((dept, i) => {
            return (
                <SelectItem key={dept.id} value="light"> {dept.title}</SelectItem>
            )
        })
    }

    return (
        <Layout title="Cadastro de Usuários" subtitle="Realize o cadastro dos usuários">
            <div className={`flex flex-col w-1/3`}>
                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    className="mb-2"
                />
                <Input
                    type="text"
                    placeholder="Matrícula"
                    value={code}
                    onChange={(e) => { setCode(e.target.value) }}
                    className="mb-2"
                />
                <Input
                    type="text"
                    placeholder="Função"
                    value={office}
                    onChange={(e) => { setOffice(e.target.value) }}
                    className="mb-2"
                />
                <Select >
                    <SelectTrigger className="w-full bg-white ">
                        <SelectValue placeholder="Departamentos" />
                    </SelectTrigger>
                    <SelectContent className="">
                        {renderDepartments()}
                    </SelectContent>
                </Select>
            </div>
        </Layout>
    )
}