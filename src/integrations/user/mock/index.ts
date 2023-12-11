/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserTable } from '@/integrations/user/model'
import { userRepositoryInterface } from '@/integrations/user/repository/index.d'
export const user: UserTable = {
    id: 1,
    name: 'John Doe',
    city: 'New York',
    country: 'United States',
    favorite_sport: 'Basketball',
}

export class UserRepositoryMock implements userRepositoryInterface {
    list = jest.fn((query: string | null) => Promise.resolve([user]))
    batchCreate = jest.fn((users: UserTable[]) => Promise.resolve())
}
