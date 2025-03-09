export type Good = {
    id: number
    name: string
    description: string
    weight: number
    sender: string
}

export type WHPosition = {
    good: Good
    quantity: number
}

export type DroneStation = {
    id: number
    address: string
}
