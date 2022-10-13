const btn = document.querySelector(".apply button");
const newDiv = document.querySelector(".submit");
const label = document.querySelector(".fname");
const label2 = document.querySelector(".lname");
const label3 = document.querySelector(".gmail");
btn.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("gmail").value;
  if (fname === "") {
    label.innerHTML = "<br/><i>Empty input FirstName <i>";
    label.innerHTML.length = 0;
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
