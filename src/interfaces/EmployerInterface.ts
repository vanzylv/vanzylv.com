export interface Endeavour {
    project: string
    description: string
    tags: string[]
}

export interface Employer {
    description: string
    dateStart: string
    dateEnd: string
    logo: string
    role: string
    endeavours: Endeavour[]
}
