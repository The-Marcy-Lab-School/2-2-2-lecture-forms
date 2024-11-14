// event handler will "extract" data from the form
// and do something with it...
const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  // // we can grab form values using the form itself and the input names
  console.log(form.email.value)
  console.log(form.password.value);
  console.log(form.hasPaddle.checked);
  console.log(form.dayAvailable.value);

  // we can choose to do stuff with that data as we please
  if (form.password.value.length < 10) {
    document.querySelector("#error-message").textContent = 'Your password must have 10 characters or more!';

    setTimeout(() => {
      document.querySelector("#error-message").textContent = '';
    }, 2000);
  } else {
    document.querySelector('#result').innerHTML = `
      <p>Email created: ${form.email.value}</p>
      <p>With password: ${form.password.value}</p>
      <p>Has a paddle?: ${form.hasPaddle.checked}</p>
      <p>Preferred Day: ${form.dayAvailable.value}</p>
      <p>${form.injection.value}</p>
    `
  }

  form.reset();


}

document.querySelector('form').addEventListener('submit', handleSubmit);