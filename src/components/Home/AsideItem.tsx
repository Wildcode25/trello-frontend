import { ReactNode } from "react";

interface Props{
    children: ReactNode
}
export const AsideItem = ({children}:Props)=>{
    return <li className="hover:bg-gray-400/25 cursor-pointer py-2">
        {children}
</li>
}