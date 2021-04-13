


export function revealingModule<T>(initialValue: T) {
    let privateValue = 'Não visivel'
    let publicValue = initialValue

    function returnValue(): T {
        return publicValue
    }
    function setValue(newValue: T) {
        publicValue = newValue
    }
    function getValue(): T {
        return returnValue()
    }

    return { getValue, setValue }
}