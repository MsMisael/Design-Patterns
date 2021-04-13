const { Carro } = require('./constructor')



describe('Testando a criacao da bmw', () => {
    const bmw = new Carro('bmw', 1992, 1200)

    it('verificando se a bmw é a fabricante', () => {
        expect(bmw.marca).toBe('bmw')
    })
    it('verificando se o ano 1992 esta certo', () => {
        expect(bmw.ano).toBe(1992)
    })
    it('verificando se a a kilomentragem é de 1200km', () => {
        expect(bmw.kilometragem).toBe(1200)
    })
})

describe('Testando a criacao da Volks', () => {
    const volks = new Carro('volks', 2004, 12000)

    it('verificando se a volks é a fabricante', () => {
        expect(volks.marca).toBe('volks')
    })
    it('verificando se o ano 2004 esta certo', () => {
        expect(volks.ano).toBe(2004)
    })
    it('verificando se a a kilomentragem é de 12000km', () => {
        expect(volks.kilometragem).toBe(12000)
    })
})