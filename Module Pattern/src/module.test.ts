import jest from 'jest'

import { moduleTest } from './module'



describe('Testando Modulo', () => {
    const myModule = moduleTest<string>()

    it('Verificando se o modulo Adiciona novos itens 1X', () => {
        const moduleValue = myModule.addNewItem('test')
        expect(moduleValue.length).toBe(1)
    })
    it('Verificando se o modulo Adiciona novos itens 2X', () => {
        const moduleValue = myModule.addNewItem('test')
        expect(moduleValue.length).toBe(2)
    })
    it('Verificando se o modulo Adiciona novos itens 3X', () => {
        const moduleValue = myModule.addNewItem('test')
        expect(moduleValue.length).toBe(3)
    })
})