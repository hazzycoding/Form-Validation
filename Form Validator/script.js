const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let isValid = false
let passwordsMacth = false

function validateForm() {
  // Using Contaimt API
  isValid = form.checkValidity()
  // Style mian message for an error
  if (!isValid) {
    message.textContent = 'Plaese Fill put all file'
    message.style.color = '#F1442D'
    messageContainer.style.borderColor = '#F1442D'
    return
  }
  // Check to see if the password macth
  if (password1El.value === password2El.value) {
    passwordsMacth = true
    password1El.style.borderColor = '#3AB441'
    password2El.style.borderColor = '#3AB441'
  } else {
    passwordsMacth = false
    message.textContent = 'Make sure password macth'
    message.style.color = '#F1442D'
    messageContainer.style.borderColor = '#F1442D'
    password1El.style.boderColor = '#F1442D'
    password2El.style.boderColor = '#F1442D'
    return
  }
  // If form valid and password macth
  if (isValid && passwordsMacth) {
    message.textContent = 'Successfully Registered'
    message.style.color = '#3AB441'
    messageContainer.style.borderColor = '#3AB441'
  }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        wibsite: form.website.value,
        password: form.password.value
    };
    // Do somthing with user data
    console.log(user);
}

function processFormData(e) {
  e.preventDefault()
  // Validate form
    validateForm()
    // Submit Data if valid
    if (isValid && passwordsMacth) {
        storeFormData();
    }
}

// Event Listerner
form.addEventListener('submit', processFormData)
