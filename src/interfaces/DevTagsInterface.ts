export interface Framework {
    name: string
    description: string
}

export interface DevTag {
    category: string
    description: string
    frameworks: Framework[]
}
