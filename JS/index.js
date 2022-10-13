const btn = document.querySelector(".apply button");
const newDiv = document.querySelector(".submit");
const label = document.querySelector(".name-error");
const label2 = document.querySelector(".surname-error");
const label3 = document.querySelector(".gmail-error");
btn.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("gmail").value;
  if (fname === "") {
    label.innerHTML = "<br/><i>Empty input FirstName <i>";
  } else {
    if (lname === "") {
      label2.innerHTML = "<br><i>Empty input LastName<i>";
    } else {
      if (email === "") {
        label3.innerHTML = "<br><i>Empty input Gmail<i>";
      } else {
        newDiv.innerHTML = `<br />WELCOME!<br />Name:${fname}<br />Lastname:${lname}<br />Email: ${email}`;
      }
    }
  }
});
