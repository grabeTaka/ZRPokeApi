import { Knex } from 'knex'
import { userRepositoryInterface } from '@/integrations/user/repository/index.d'
import { IDatabase } from '@/config/database/index.d'
import { Database } from '@/config/database'
import { User, UserTable } from '@/integrations/user//model'
import { userFactory } from '../factory'

class UserRepository implements userRepositoryInterface {
    private db: Knex
    constructor(database: IDatabase) {
        this.db = database.getDatabase()
    }

    async list(query: string | null): Promise<User[]> {
        const results = await this.db('users')
            .select('*')
            .where(function () {
                if (query !== null) {
                    this.where('users.name', 'like', `%${query}%`)
                    this.orWhere('users.city', 'like', `%${query}%`)
                    this.orWhere('users.country', 'like', `%${query}%`)
                    this.orWhere('users.favorite_sport', 'like', `%${query}%`)
                }
            })
        return userFactory.fromSqlList(results)
    }

    async batchCreate(users: UserTable[]): Promise<void> {
        await this.db('users').insert(users)
    }
}

const database = new Database()
export const userRepository = new UserRepository(database)
