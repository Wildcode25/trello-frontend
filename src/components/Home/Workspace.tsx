import { useUser } from "../../hooks/useUser.ts"
export const Workspace = ()=>{
    const {user} = useUser()
    return <article className="p-12 py-4">
        <header className="flex w-[80vw] p-3 py-2 gap-4 justify-center items-center">
        <div className="text-3xl font-bold h-16 px-6 rounded-md py-3 bg-blue-600 text-white">
            {user?.name[0]}
        </div>
        <h2 className=" text-xl">Espacio de trabajo de {user?.name} <div className="font-normal text-sm">Privada</div></h2>
        <button className="hover:bg-blue-800 bg-blue-600 text-white font-bold text-sm w-72 px-1  h-8 rounded-sm">
        <i className="fi fi-rr-member-search"></i> Invitar miembros del espacio de trabajo
        </button>
        </header>
        <hr className="bg-gray-400" />
    </article>
}