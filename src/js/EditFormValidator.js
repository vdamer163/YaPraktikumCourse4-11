import FormValidator from "./FormValidator";
export default class EditFormValidator extends FormValidator {
    checkInputValidity() {
        super.checkInputValidity();
        this.validateInput(this.form.elements.username);
        this.validateInput(this.form.elements.job);
    }
}
