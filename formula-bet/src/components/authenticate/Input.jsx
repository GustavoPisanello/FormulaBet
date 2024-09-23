export default function Input({name, type, label}){
    return(
        <>
            <div className="w-full flex flex-col gap-y-2">
                <label className="pl-2" htmlFor={name}>{label}</label>
                <input name={name} className="bg-primary_gray rounded-xl h-16 px-4" type={type} />
            </div>
        </>
    )
}