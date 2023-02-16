function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberFieldString = phoneNumberField.value;
    const prePhoneNumber = parseInt(phoneNumberFieldString);
    let currentPhoneNumber;
    if (isIncrease) {
        currentPhoneNumber = prePhoneNumber + 1;
    } else {
        currentPhoneNumber = prePhoneNumber - 1;
    }

    phoneNumberField.value = currentPhoneNumber;
    return currentPhoneNumber;
}
function updatePhonePrice(currentPhoneNumber) {
    const phonePriceTotal = currentPhoneNumber * 1219;
    const PhonePriceElement = document.getElementById('phone-total');
    PhonePriceElement.innerText = phonePriceTotal;
}



document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const currentPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(currentPhoneNumber);
    calculateSubTotal();
})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const currentPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(currentPhoneNumber);
    calculateSubTotal();
})
