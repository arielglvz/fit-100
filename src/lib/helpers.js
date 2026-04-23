// Reusable update form field
export const updateFormField = (setForm, field, value) => {
  setForm((prev) => ({
    ...prev,
    [field]: value,
  }))
}
