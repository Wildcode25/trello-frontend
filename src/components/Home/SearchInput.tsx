import { useBoard } from "../../hooks/useBoard"

export const SearchInput = () => {
    const { board} = useBoard()
    return <div className="relative">
        <i className="fi fi-rr-search md:hidden"></i>
        <input type="text" className={`hidden md:inline-block border-[0.5px] border-blue-400 p-2 bg-gray-${board?'400':'100'}/50 rounded-md outline-1 focus:outline-[0.25px] h-[34px]`} />
        <div className="absolute hidden  md:flex items-center px-2 top-0 h-8 text-normal"><p>Buscar</p></div>
    </div>
}