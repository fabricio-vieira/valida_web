export default class User {
    #id: string
    #name: string
    #code: string
    #office: string
    #company_id: number
    #department_id: number
    #is_active: boolean
    #is_excluded: boolean

    constructor(
        id: string,
        name: string,
        code: string,
        office: string,
        company_id: number,
        department_id: number,
        is_active: boolean,
        is_excluded: boolean,
    ) {
        this.#id = id
        this.#name = name
        this.#code = code
        this.#office = office
        this.#company_id = company_id
        this.#department_id = department_id
        this.#is_active = is_active
        this.#is_excluded = is_excluded
    }

    static empty() {
        return new User('', '', '', '', 0, 0, true, false)
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get code() {
        return this.#code
    }

    get office() {
        return this.#office
    }

    get company_id() {
        return this.#company_id
    }

    get department_id() {
        return this.#department_id
    }

    get is_active() {
        return this.#is_active
    }

    get is_excluded() {
        return this.#is_excluded
    }

}