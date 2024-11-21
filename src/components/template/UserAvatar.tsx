import Link from "next/link"
import useAuth from '../../data/hook/useAuth'

interface UserAvatarPropos {
    className?: string
}

export default function UserAvatar(props: UserAvatarPropos) {
    const { user } = useAuth()

    return (
        <Link href="/profile">
            <img
                src={user?.imageUrl ?? '/images/avatar.svg'}
                alt="Avatar do Usuário"
                className={`
                        h-8 w-8 rounded-full cursor-pointer
                        ${props.className}
                        `}
            />
        </Link>
    )
}