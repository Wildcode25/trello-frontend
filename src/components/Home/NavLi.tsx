interface Props{
    text: string
}
export const NavLi = ({text}:Props)=>{
    return <li className="flex gap-2 items-center">
        {text}
        <i className="fi scale-75 fi-br-angle-down"></i>
    </li>
}