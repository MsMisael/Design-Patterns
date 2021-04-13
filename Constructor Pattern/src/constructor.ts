

export const a = 1


export interface ICarro {
    marca?: string
    ano?: number
    kilometragem?: number
}

export function Carro(this: ICarro, marca: string, ano: number, kilometragem: number) {
    this.marca = marca
    this.ano = ano
    this.kilometragem = kilometragem
}