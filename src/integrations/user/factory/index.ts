/* eslint-disable prettier/prettier */
import { User, UserTable } from '@/integrations/user/model'
import {  UserFactoryInterface } from '@/integrations/user/factory/index.d'

class UserFactory implements UserFactoryInterface {
    fromSql = (data: UserTable): User => {
        const model = new User({})
        model.id = data.id,
        model.name = data.name,
        model.city = data.city,
        model.country = data.country,
        model.favoriteSport = data.favorite_sport

        return model
    }

    fromSqlList = (data: UserTable[]): User[] => {
        const result = []
        data.forEach((row: UserTable) => {
            const model = this.fromSql(row)
            result.push(model)
        })
        return result
    }
}

export const userFactory = new UserFactory()
