


export const moduleTest = function <T>() {
    let myValue: T[] = []



    function addNewItem(myNewItem: T) {
        myValue.push(myNewItem)
        return myValue
    }
    return { addNewItem }
}
