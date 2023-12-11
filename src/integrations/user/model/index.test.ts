import { User } from '@/integrations/user/model'

const obj: User = {
    id: 1,
    name: 'test',
    city: 'test',
    country: 'test',
    favoriteSport: 'test',
}

describe('Testing object generetor for user', () => {
    test('Should retrun populate object', () => {
        expect(obj).not.toBe({})
    })
})
