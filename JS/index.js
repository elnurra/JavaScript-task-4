const btn = document.querySelector(".apply button");
const newDiv = document.querySelector(".submit");
const label = document.querySelector(".name-error");
const label2 = document.querySelector(".surname-error");
const label3 = document.querySelector(".gmail-error");
btn.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  let condition = false;
  let condition2 = false;
  let condition3 = false;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("gmail").value;
  if (fname.trim().length === 0) {
    label.innerHTML = "<i>Empty input FirstName <i>";
  } else {
    condition = true;
  }
  if (lname.trim().length === 0) {
    label2.innerHTML = "<i>Empty input LastName<i>";
  } else {
    condition2 = true;
  }
  if (email.trim().length === 0) {
    label3.innerHTML = "<i>Empty input Gmail<i>";
  } else {
    condition3 = true;
  }
  if (condition && condition2 && condition3) {
    newDiv.innerHTML = `<br />WELCOME!<br />Name:${fname}<br />Lastname:${lname}<br />Email: ${email}`;
    label.innerHTML = "<b>Correct</b> <br />";
    label2.innerHTML = "<b>Correct</b> <br />";
    label3.innerHTML = "<b>Correct</b> <br />";
  }
});
