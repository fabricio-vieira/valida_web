import AuthInput from "@/components/auth/AuthInput";
import Image from "next/image";
import { useState } from "react";
import ImgCar from '../assets/img-car3.jpg'
import { WarnIcon } from "@/components/icons";
import useAuth from "@/data/hook/useAuth";

export default function Authentication() {
    const [modo, setModo] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)

    const { register, login, loginGoogle } = useAuth()

    function showErrorMessage(msg: any, errorTime = 5) {
        setError(msg)
        setTimeout(() => setError(null), errorTime * 1000)
    }

    async function submit() {

        try {
            if (modo === 'login') {
                if (login) {
                    await login(email, password)
                    showErrorMessage('Erro ao efetuar o login!')
                }
            }
            else {
                if (register) {
                    if (password !== confirmPassword) {
                        showErrorMessage('Senhas não batem!')
                    } else {
                        await register(email, password)
                        showErrorMessage('Erro ao efetuar o cadastro!')
                    }
                }
            }

        } catch (error: any) {
            showErrorMessage(error?.message ?? 'Erro desconhecido')

        }
    }


    return (
        <div className={`flex h-screen items-center justify-center`}>

            <div className="hidden md:block md:w-1/2 lg:w-2/3 h-screen relative">
                <Image
                    src={ImgCar}
                    layout="fill"
                    objectFit="cover"
                    alt="Imagem de Tela de Input"
                />
            </div>
            <div className="md:w-1/2 w-full m-10 lg:w-1/3">
                <h1 className={`
                    text-xl font-bold mb-5
                `}>
                    {modo === 'login' ? 'Entre com sua conta' : 'Cadastre-se na Plataforma'}
                </h1>

                {error ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {WarnIcon}
                        <span className="ml-3">{error}</span>
                    </div>

                ) : false}

                <AuthInput
                    label="Email"
                    type="email"
                    value={email}
                    changeValue={setEmail}
                    required

                />

                <AuthInput
                    label="Senha"
                    type="password"
                    value={password}
                    changeValue={setPassword}
                    required
                />
                <AuthInput
                    label="Confirmar Senha"
                    type="password"
                    value={confirmPassword}
                    changeValue={setConfirmPassword}
                    required
                    dontShow={modo === 'login'}
                />

                <button onClick={submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="mt-6 border-b border-gray-200" />
                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    Login com Google
                </button>

                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui ?
                        <a onClick={() => setModo('register')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}>Crie uma conta
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já é cadastrado ?
                        <a onClick={() => setModo('login')} className={`
                    text-blue-500 hover:text-blue-700 cursor-pointer
                    `}>Acesse sua conta
                        </a>
                    </p>
                )}

            </div>
        </div>
    )
}