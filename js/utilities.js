function getTextElementValueByID(elementId) {
    const field = document.getElementById(elementId);
    const fieldString = field.innerText;
    const fieldValue = parseInt(fieldString);
    return fieldValue;
}
function setTextElementValueById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueByID('phone-total');
    const currentCaseTotal = getTextElementValueByID('case-total');
    const subTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total', subTotal);

    const taxTotal = (subTotal * 0.1).toFixed(2);
    setTextElementValueById('tax-amount', taxTotal)
    const total = subTotal + taxTotal;
    setTextElementValueById('final-total', total);
}