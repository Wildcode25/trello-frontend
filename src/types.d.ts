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
export interface BoardsResponse extends Response{
    data:Board[]|null
}
export interface BoardResponse extends Response{
    data:Board|null
}
export interface Board{
    id: number
    name: string,
    color: 'rose' | 'blue' | 'green' | 'yellow',
    ownerId: string,
    workspaceName: string,
    lists: List[]

}
export interface BoardData{
    name: string,
    color: 'rose' | 'blue' | 'green' | 'yellow',
    workspaceName: string|undefined
}
export interface List{
    id?: number,
    name: string,
    boardId: number,
    cards?: Card[]
}
export interface ListResponse extends Response{
    data: List
}

export interface Card{
    id?: number,
    name: string,
    listId?: number,
    order?: number 
}
export interface CardResponse extends Response{
    data: Card
}