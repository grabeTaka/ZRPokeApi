export class User {
    id?: number
    name?: string
    city?: string
    country?: string
    favoriteSport?: string

    constructor(data: User) {
        this.id = data?.id || null
        this.name = data?.name || null
        this.city = data?.city || null
        this.country = data?.country || null
        this.favoriteSport = data?.favoriteSport || null
    }
}

export type UserTable = {
    id: number
    name: string
    city: string
    country: string
    favorite_sport: string
}
