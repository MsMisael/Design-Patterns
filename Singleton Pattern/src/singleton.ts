
declare interface ISingletonInstance<T> {
    publicFunction: () => void
    getPrivateValue: () => T
    setPrivateValue: (newValue: T) => void
}



export function singletonPatter<T>() {
    let instance: ISingletonInstance<T>

    function init(initialValue: T) {
        var privateValue = initialValue

        function privateFunction() {
            console.log('Esta funcao nao é visivel')
        }
        function publicFunction() {
            console.log('Esta funcao é visivel')
        }
        function getPrivateValue() {
            return privateValue
        }
        function setPrivateValue(newValue: T) {
            privateValue = newValue
        }
        return {
            publicFunction,
            getPrivateValue,
            setPrivateValue
        }
    }

    return {
        getInstace: function (initialValue?: T) {
            if (!instance) {
                instance = init(initialValue || {} as T)
            }
            return instance
        }
    }
}