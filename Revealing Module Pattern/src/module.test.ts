import jest from 'jest'
import { revealingModule } from './module'



describe('Testando Design Revealing Module Pattern', () => {
    const myRevealingModule = revealingModule<string>('isto é um teste')

    it('Verificando se o modulo contem o valor de inicializacao', () => {

        expect(myRevealingModule.getValue()).toBe('isto é um teste')

    })


    it('Verificando so o valor do modulo esta sendo alterado.', () => {
        myRevealingModule.setValue('isto é um novo teste')
        expect(myRevealingModule.getValue()).toBe('isto é um novo teste')
    })

})