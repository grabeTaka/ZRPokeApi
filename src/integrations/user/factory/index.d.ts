import { User, UserTable } from '@/integrations/user/model'

export interface UserFactoryInterface {
    fromSql: (data: UserTable) => User
    fromSqlList: (data: UserTable[]) => User[]
}
