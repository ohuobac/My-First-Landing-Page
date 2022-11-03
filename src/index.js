function join() {
  let name = prompt("Enter your first name?");
  let age = prompt("How old are you?");
  let email = prompt("Enter your email?");

  if (age >= 18) {
    alert(
      `Hi ${name}, Your decision to be a Zeta Mom is awesome👏👏, Check your email to see our product catalogue and also to join our Zeta Mom community🤗`
    );
  } else {
    alert(
      `We're sorry ${name}, you can't join the Zeta Mom community until youre 18 😔`
    );
  }
}
let button = document.querySelector("button");
button.addEventListener("click", join);
