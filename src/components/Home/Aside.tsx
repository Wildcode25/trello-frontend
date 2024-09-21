import { useBoard } from "../../hooks/useBoard.js"
import { useUser } from "../../hooks/useUser.js"
import { AsideItem } from "./AsideItem.js"
export const Aside = ()=>{
   const {boards, board, handleChangeBoard}=useBoard() 
   const {user} = useUser()
    return <aside className={`bg-gradient-to-l from-${board?.color}-500 to-${board?.color}-500 min-w-[16em] h-[100vh]`}>
        <div className="flex gap-2 p-2 items-center border-[0.5px] border-gray-400">
        <div className="text-md font-bold w-8 h-8 px-3 rounded-sm py-1 bg-blue-600 text-white">
            {user?.name[0]}
        </div>
        <p className="font-bold text-sm">Espacio de trabajo de <div>{user?.name}</div> <div className="font-normal">Gratuito</div></p>
        </div>
    <ul className="py-3 text-sm">
        <AsideItem><i className=" fi fi-bs-chalkboard"></i>Tableros</AsideItem>
        <AsideItem><i className="fi fi-tr-member-search  "></i>Miembros</AsideItem>
        <AsideItem><i className=" fi fi-tc-settings"></i>Ajustes del espacio de trabajo</AsideItem>
    </ul>
    <ul className="py-3">
        <div className="font-bold text-sm flex justify-between w-[100%] px-3"><h2>Sus tableros</h2> <i className="hover:bg-gray-400/25 rounded-md fi fi-rs-plus"></i></div>
        {boards?.map(boardItem=>{
            return <div onClick={()=>handleChangeBoard(boardItem.id)} className={boardItem.id===board?.id?'bg-gray-600/25':''}>
                <AsideItem key={`board-${boardItem.id}`}>
                <div className={`h-4 w-6 rounded-sm bg-${boardItem?.color}-600`}></div>
                <p className="text-sm">{boardItem.name}</p>
            </AsideItem>
            </div>
        })}
    </ul>
    </aside>
}