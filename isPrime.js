"is prime";

const isPrime = function (n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("False");
      return;
    }
  }
  console.log("true");
};

isPrime(400);
isPrime(401);
