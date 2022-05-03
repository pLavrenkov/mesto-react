export function checkTextValid(input, numMin, numMax) {
    if (input.length > numMin && input.length < numMax && !input.includes('   ')) { return true } else { return false };
}

export function checkUrlValid(input, numMin, numMax) {
    if (input.length > numMin && input.length < numMax && !input.includes('   ')) { return true } else { return false };
}

export const classListValidationInput = {
    valid: {
        input: "pop-up-form__field",
        error: "pop-up-form__input-error"
    },
    error: {
        input: "pop-up-form__field pop-up-form__field_type_error",
        error: "pop-up-form__input-error pop-up-form__input-error_active"
    }
}

