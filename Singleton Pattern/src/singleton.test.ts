import jest from 'jest'

import { singletonPatter } from './singleton'

describe('Testando SingletonPattern', () => {
    const mySingleton = singletonPatter<string>()

    const mySingletonInstance = mySingleton.getInstace('Isto é um teste')

    it('Testando se o metodo getInstace retornou um objeto', () => {
        expect(mySingletonInstance).toBeDefined()
    })
    it('Testando se o metodo getInstace retornou um objeto com o valor inicial', () => {
        expect(mySingletonInstance.getPrivateValue()).toBe('Isto é um teste')
    })
    it('Testando se o objeto retornado do metodo getInstace altera o valor corretamente', () => {
        mySingletonInstance.setPrivateValue('Isso é um novo teste')
        expect(mySingletonInstance.getPrivateValue()).toBe('Isso é um novo teste')
    })

    const myNewSingletonInstance = mySingleton.getInstace('Isto é um teste')
    
    it('Testando se o objeto retornado do metodo getInstace é o mesmo criado da primeira vez', () => {
        expect(myNewSingletonInstance.getPrivateValue()).toBe('Isso é um novo teste')
    })
})
