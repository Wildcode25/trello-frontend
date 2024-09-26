import { useList } from "../../hooks/useList"

interface Props{
    setFocus: (isFocused: boolean)=>void
    isFocused: boolean
}
export const ListForm = ({setFocus, isFocused}:Props)=>{
    const {handleChangeListData, handleSubmitListData , listData} = useList()
    return <form onSubmit={handleSubmitListData} className="text-black absolute top-0 w-64 p-3 bg-white flex flex-col gap-2 rounded-md">
    <input  value={listData.name} name='name' onChange={handleChangeListData} type="text" autoFocus={true} className="w-56 rounded-sm focus:outline-blue-600  border-2 border-gray-400" />
    <div className="">
        <button type="submit" onClick={()=>{
            setTimeout((()=>setFocus(!isFocused)), 100)
        }} className="bg-blue-600 p-2 rounded-sm text-white">Crear lista</button>
        <i onClick={()=>setFocus(!isFocused)} className="  hover:bg-gray-200 p-2 rounded-sm cursor-pointer mx-3 fi fi-rs-cross"></i>
    </div>
</form>
}