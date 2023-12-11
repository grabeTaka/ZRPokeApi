import { userFactory } from '@/integrations/user/factory'
import { User, UserTable } from '@/integrations/user/model'

describe('Testing factory to correct data', () => {
    const user: UserTable = {
        id: 1,
        name: 'test',
        city: 'test',
        country: 'test',
        favorite_sport: 'test',
    }

    const users: UserTable[] = [
        {
            id: 1,
            name: 'test',
            city: 'test',
            country: 'test',
            favorite_sport: 'test',
        },
    ]

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('Sould return User object', () => {
        const result = userFactory.fromSql(user)
        expect(result).toBeInstanceOf(User)
    })

    it('Should return array of User object', () => {
        const result = userFactory.fromSqlList(users)
        expect(result).toBeInstanceOf(Array)
    })
})
