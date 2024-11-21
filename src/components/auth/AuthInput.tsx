
interface AuthInputProps {
    label: string
    value: any
    required: boolean
    dontShow?: boolean
    type?: 'text' | 'email' | 'password'
    changeValue: (newValue: any) => void

}

export default function AuthInput(props: AuthInputProps) {

    return props.dontShow ? null : (
        <div className="flex flex-col mt-4">
            <label className="">{props.label}</label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                required={props.required}
                onChange={e => props.changeValue?.(e.target.value)}
                className={`
                        px-4 py-3 rounded-lg bg-gray-200
                        border focus:border-blue-500 focus:bg-white
                        focus:outline-none
                    `}
            />
        </div>
    )
}