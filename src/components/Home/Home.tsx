import { Nav } from "./Nav.tsx"
import { Content } from "./Content.tsx"
import { Aside } from './Aside.tsx'
export function Home(): JSX.Element {


    return <div className="text-gray-50">
        <Nav />
        <div className="flex h-[100%] justify-start">
            <Aside />
            <Content />

        </div>
    </div>
}