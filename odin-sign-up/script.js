document.addEventListener('DOMContentLoaded', () => {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm_password');
  const errorMsg = document.getElementById('password-error');
  const testtxt = document.getElementById("test_txt");
  const testdisc = document.getElementById("test_disc");
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue",
    price: 25000,
    applyDiscount: function(discount) {
      const discountedPrice = this.price - (this.price * discount);
      return discountedPrice;
    }
  };

  function checkPasswordsMatch() {
    const passVal = password.value;
    const confirmVal = confirmPassword.value;

    // Reset clean state if either field is empty
    if (!passVal || !confirmVal) {
      password.classList.remove('error');
      confirmPassword.classList.remove('error');
      errorMsg.style.visibility = 'hidden';
      confirmPassword.setCustomValidity('');
      return;
    }

    // Validate match only when both fields have content
    if (passVal !== confirmVal) {
      password.classList.add('error');
      confirmPassword.classList.add('error');
      errorMsg.style.visibility = 'visible';
      confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      password.classList.remove('error');
      confirmPassword.classList.remove('error');
      errorMsg.style.visibility = 'hidden';
      confirmPassword.setCustomValidity('');
    }
  }

  // Bind input events
  password.addEventListener('input', checkPasswordsMatch);
  confirmPassword.addEventListener('input', checkPasswordsMatch);

  // Initialize on page load (clears error state even if browser autofills)
  checkPasswordsMatch();

  // Test script functionality to demonstrate returning an object and accessing its properties
  const output = testPrompt().otherProperty;
  testtxt.value = output;

  // Test the applyDiscount method of the car object
  const output2 = car.applyDiscount(0.1); // Example discount of 10%
  testdisc.value = output2;

  player1.sayName(); // logs "Alice"
player2.sayName(); // logs "Bob"

});

function testPrompt() {
    const myObject = {
        property: "Value!",
        otherProperty: 77
        
    };
    return myObject;
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name);
    };
}

const player1 = new Player("Alice", "X");
const player2 = new Player("Bob", "O");


