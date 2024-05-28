//this function validates form input fields
export const isFormValid = (formData) => {
    // Check if inputs are empty or spaces
    if (formData.name.trim().length === 0 || formData.email.trim().length === 0
        || formData.address.trim().length === 0 || formData.cardName.trim().length === 0
        || formData.cardNumber.trim().length === 0) {
        return false;
    }
    return true; //reture true if the form is valid -no errors
};