import { useBoard } from "../../hooks/useBoard.ts"
export const Header = ()=>{
    const {board} = useBoard()
    return <header className={`row-start-1 row-span-1  col-start-2 bg-gradient-to-l from-${board?.color}-800 to-${board?.color}-800  py-3 flex items-center justify-between `}>
    <div className="flex gap-3 px-6 items-center">
    <h2 className="text-xl font-bold">{board?.name}</h2>
    <i className="fi fi-rr-star px-2 py-1 scale-75 hover:bg-gray-400/50"></i>
    <div className="flex items-center gap-4">
    <i className="fi fi-ts-employees"></i>
    <button className="text-black p-[6px] px-[10px] bg-slate-200 rounded-sm text-sm"><i className="scale-50 fi fi-br-bars-filter"></i> Tableros</button>
    <i className="fi scale-75 fi-br-angle-down"></i>
    </div>
    </div>
    <div className="flex gap-8 px-6 items-center">
    <i className="fi fi-ss-rocket"></i>
    <i className="fi fi-rs-thunderstorm"></i>
    <div>
    <button className=" p-[6px] px-[10px] hover:bg-gray-400/25 rounded-sm text-sm border-r-[0.25px] border-blue-500">
        <i className="scale-50 fi fi-br-bars-filter">
            </i> Filtros</button>

    </div>
    </div>
    </header>
}