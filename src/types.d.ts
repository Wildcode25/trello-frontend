export interface User{
    id: string,
    name: string,
    email: string,
    workspaces: Workspace[]
}

export interface Workspace{
    name: string,
    ownerId: string
}
export interface Response{
    message: string,
    error: boolean
}
export interface UserResponse extends Response{
    data: User | ErrorDetails[] | null,

}
export interface FormData{
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}
export interface ErrorDetails{
    path: string,
    message: string
}
export interface Board{
    id: string
    name: string,
    color: 'rose' | 'blue' | 'green' | 'yellow',
    ownerId: string,
    workspaceName: string,
    lists: List[]

}
export interface List{
    name: string,
    color: string
}