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
    data: User | ErrorDetails[] | null,
    message: string,
    error: boolean
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