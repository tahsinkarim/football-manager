function valueToInt(elementId){
    const element = document.getElementById(elementId)
    const elementString = element.value;
    const elementValue = parseInt(elementString)
    return elementValue;
}