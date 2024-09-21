import { ReactNode } from "react";

interface Props{
    children: ReactNode
}
export const AsideItem = ({children}:Props)=>{
    return <li className="hover:bg-gray-400/25 cursor-pointer flex items-center px-3 py-2 gap-3">
        {children}
</li>
}