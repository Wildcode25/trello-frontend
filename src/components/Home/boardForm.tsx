import { ReactNode } from "react"
import { useBoard } from "../../hooks/useBoard"

export const BoardForm = ({children, inputId, position={
    right: '0',
    left: '0',
    bottom: '0',
    top: '0'
}}:{children: ReactNode, inputId:string, position: {
    top?: string,
    bottom?: string,
    left?: string, 
    right?: string
}}) => {
    const {top, bottom, left, right} = position
    const { handleChangeInput, handleSubmitBoard, boardData } = useBoard()

    return <div className="relative">
            <label htmlFor={inputId}>
               {children}
                </label>
            <input type="radio" name="toggleFormBoard" className="hidden peer" id={inputId} />
            <label htmlFor={inputId} className="peer-checked:block hidden absolute">
            <form onSubmit={handleSubmitBoard} className={`flex boardForm  flex-col gap-4 w-80 h-64 bg-white rounded-md p-3 absolute bottom-[${bottom}] left-[${left}] right-[${right}] z-20 top-[${top}]`}>
                <input type="text" className='inputForm w-72 font-semibold text-black' onChange={handleChangeInput} value={boardData.name} name="name" />
                <div className="flex gap-3">

                    <label htmlFor="rose"  >
                        <input type="radio" id="rose" name="color" value={'rose'} onChange={handleChangeInput} className="hidden peer" />
                        <div className="peer-checked:outline outline-lime-500 h-8 w-8 bg-gradient-to-tl from-rose-400 to-rose-600 rounded-sm cursor-pointer"></div>
                    </label>
                    <label htmlFor="purple" >
                        <input type="radio" id="purple" name="color" value={'purple'} onChange={handleChangeInput} className="hidden peer" />
                        <div className="peer-checked:outline outline-lime-500 h-8 w-8 bg-gradient-to-tl from-purple-400 to-purple-600 rounded-sm  cursor-pointer"></div>
                    </label>
                    <label htmlFor="blue" >
                        <input type="radio" id="blue" name="color" value={'blue'} onChange={handleChangeInput} className="hidden peer" />
                        <div className="peer-checked:outline outline-4 outline-lime-500  h-8 w-8 bg-gradient-to-tl from-blue-400 to-blue-600 rounded- cursor-pointer"></div>
                    </label>
                    <label htmlFor="orange" >
                        <input type="radio" id="orange" name="color" value={'orange'} onChange={handleChangeInput} className="hidden peer" />
                        <div className="peer-checked:outline outline-4 outline-lime-500 h-8 w-8 bg-gradient-to-tl from-orange-400 to-orange-600 rounded-sm  cursor-pointer"></div>
                    </label>
                    <label htmlFor="green" >
                        <input type="radio" id="green" name="color" value={'green'} onChange={handleChangeInput} className="hidden peer" />
                        <div className="peer-checked:outline outline-4 outline-lime-500 h-8 w-8 bg-gradient-to-tl from-green-400 to-green-600 rounded-sm  cursor-pointer"></div>
                    </label>
                </div>
                <button type="submit" className="submit w-72">Crear board</button>
            </form>
            </label>
       
    </div>
}