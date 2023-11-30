console.log('this is from index.js')

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("form submitted");

  // turns form inputs into an object
  const form = e.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  // handle checkboxes differently
  formObj.isVegetarian = form.isVegetarian.checked;

  // do something with the formObj data
  console.log("here is your data:", formObj);

  // clear out the form when you're done
  form.reset();
};

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);