import { useState } from "react"
import { ListForm } from "./Listform.tsx"

export const CreateListButton = ()=>{
    const [isFocused, setFocus] = useState(false)

    return <div className="relative">
        <button onClick={()=>setFocus(!isFocused)} className="h-12 rounded-md bg-gray-400/25 w-64 text-start"><i className="hover:bg-gray-400/25 rounded-xl fi fi-rs-plus scale-50 mx-3"></i>Crear lista nueva</button>
        {isFocused && <ListForm setFocus={setFocus} isFocused={isFocused}/>}
    </div>
}