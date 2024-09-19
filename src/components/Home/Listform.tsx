interface Props{
    setFocus: (isFocused: boolean)=>void
    isFocused: boolean
}
export const ListForm = ({setFocus, isFocused}:Props)=>{
    return <form className="text-black absolute top-0 w-64 p-3 bg-white flex flex-col gap-2 rounded-md">
    <input type="text" autoFocus={true} className="w-56 rounded-sm focus:outline-blue-600  border-2 border-gray-400" />
    <div className="">
        <button type="submit" className="bg-blue-600 p-2 rounded-sm text-white">Crear lista</button>
        <i onClick={()=>setFocus(!isFocused)} className="  hover:bg-gray-200 p-2 rounded-sm cursor-pointer mx-3 fi fi-rs-cross"></i>
    </div>
</form>
}