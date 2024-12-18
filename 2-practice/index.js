// event handler will "extract" data from the form
// and do something with it...
const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  // // we can grab form values using the form itself and the input names
  console.log(form.elements.email.value)
  console.log(form.elements.password.value);
  console.log(form.elements.hasPaddle.checked);
  console.log(form.elements.dayAvailable.value);

  // we can choose to do stuff with that data as we please
  if (form.elements.password.value.length < 10) {
    document.querySelector("#error-message").textContent = 'Your password must have 10 characters or more!';

    setTimeout(() => {
      document.querySelector("#error-message").textContent = '';
    }, 2000);
  } else {
    document.querySelector('#result').innerHTML = `
      <p>Email created: ${form.elements.email.value}</p>
      <p>With password: ${form.elements.password.value}</p>
      <p>Has a paddle?: ${form.elements.hasPaddle.checked}</p>
      <p>Preferred Day: ${form.elements.dayAvailable.value}</p>
      <p>${form.elements.injection.value}</p>
    `
  }

  form.reset();


}

document.querySelector('form').addEventListener('submit', handleSubmit);
