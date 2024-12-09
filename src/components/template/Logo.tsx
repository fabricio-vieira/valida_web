export default function Logo() {
    return (
        <div className="flex w-full items-center justify-center">
            <div className={`
            flex items-center justify-end
            h-8 w-8 bg-white rounded-l-xl
        `}>
                <h1 className="font-extrabold">V</h1>
            </div>
            <div className={`
               flex items-center justify-start
               h-8 w-16 rounded-r-xl pl-0.5
              border-white border               
               `}>
                <h1 className="font-light text-white">alida</h1>
            </div>

        </div>

    )

}