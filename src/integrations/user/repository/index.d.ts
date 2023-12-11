import { User, UserTable } from '../model/index'

export interface userRepositoryInterface {
    list: (query: string | null) => Promise<User[]>
    batchCreate: (users: UserTable[]) => Promise<void>
}
