import { ListForm } from "./Listform.tsx"

export const CreateListButton = ()=>{

    return  <>
    <label htmlFor="listForm1" onClick={()=>setTimeout(()=>{
        document.getElementById('listInput')?.focus()
    }, 100)} className="relative h-12 flex items-center rounded-xl bg-gray-400/50 min-w-64 cursor-pointer">
       <i className="hover:bg-gray-400/25 rounded-xl fi fi-rs-plus scale-75 mx-3"></i>Crear lista nueva
       <ListForm/>
        </label>
        
        </>
}