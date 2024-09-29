import { useList } from "../../hooks/useList"


export const ListForm = ()=>{
    const {handleChangeListData, handleSubmitListData , listData} = useList()
    return <div className="absolute top-0">
        <input type="radio" name="toggleFormBoard" id="listForm1" className="hidden peer"/>
    <form onSubmit={handleSubmitListData} className="cursor-default text-black peer-checked:flex hidden  w-64 p-3 bg-white flex-col gap-2 rounded-md">
    <input   value={listData.name} name='name' id="listInput" onChange={handleChangeListData} type="text" autoFocus className="w-56 rounded-sm focus:outline-blue-600  border-2 border-gray-400" />
    <div className="">
        <button type="submit" className="bg-blue-600 p-2 rounded-sm text-white">Crear lista</button>
        <label htmlFor="to"><i className="hover:bg-gray-200 p-2 rounded-sm cursor-pointer mx-3 fi fi-rs-cross"></i></label>
    </div>
</form>
    </div>
}