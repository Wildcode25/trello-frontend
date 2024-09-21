import type { List } from "../../types.d.ts"
export const ListItem = ({list}:{list:List})=>{
    console.log("kk")
    return <ul className="rounded-xl max-h-min min-w-72 bg-gray-100 text-gray-700 p-2 text-sm flex flex-col">
        <li className="flex items-center h-8 p-2 justify-between"><b>{list.name}</b> 
       <div className="flex gap-6 items-center"> <i className="h-3 rotate-45 fi fi-br-down-left-and-up-right-to-center"></i><i className="fi h-3 fi-rr-menu-dots"></i></div>
       </li>

    </ul>
}