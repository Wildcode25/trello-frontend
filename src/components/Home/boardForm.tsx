import { useState } from "react"
import { useBoard } from "../../hooks/useBoard"

export const BoardForm = ()=>{
    const [visible, setVisible]=useState(false)
    const {handleChangeInput, handleSubmitBoard, boardData} = useBoard()
    return <div className="relative ">
         <i onClick={()=>setVisible(!visible)} className="p-1 px-2 rounded-sm fi fi-rs-plus cursor-pointer
hover:bg-gray-300/50"></i>
        {visible&&<form onSubmit={handleSubmitBoard} className="z-10 flex flex-col gap-4 w-80 h-64 bg-white rounded-sm p-3 absolute -top-16 left-14">
            <input type="text" className='inputForm w-72 font-semibold text-black' onChange={handleChangeInput} value={boardData.name} name="name"/>
            <div className="flex gap-3">

                <label htmlFor="rose" className="h-8 w-8 bg-gradient-to-tl from-rose-400 to-rose-600 rounded-sm cursor-pointer" >
                <input type="radio" id="rose" name="color" value={'rose'} onChange={handleChangeInput} className="hidden"/>
                </label>
                <label htmlFor="purple" className="h-8 w-8 bg-gradient-to-tl from-purple-400 to-purple-600 rounded-sm  cursor-pointer">
                <input type="radio" id="purple" name="color" value={'purple'} onChange={handleChangeInput} className="hidden"/>
                </label>
                <label htmlFor="blue" className=" h-8 w-8 bg-gradient-to-tl from-blue-400 to-blue-600 rounded- cursor-pointer">
                <input type="radio" id="blue" name="color" value={'blue'} onChange={handleChangeInput} className="hidden"/>
                </label>
                <label htmlFor="orange" className="h-8 w-8 bg-gradient-to-tl from-orange-400 to-orange-600 rounded-sm  cursor-pointer">
                <input type="radio" id="orange" name="color" value={'orange'} onChange={handleChangeInput} className="hidden"/>
                </label>
                <label htmlFor="green" className="h-8 w-8 bg-gradient-to-tl from-green-400 to-green-600 rounded-sm  cursor-pointer">
                <input type="radio" id="green" name="color" value={'green'} onChange={handleChangeInput} className="hidden"/>
                </label>
            </div>
            <button type="submit" onClick={()=>{
                if(boardData.name!=='') setTimeout(()=>setVisible(!visible),100)
            }} className="submit w-72">Crear board</button>
            </form>}
    </div>
}