// Can you keep a secret?
// 6 kyu
// ❓ DESCRIPTION:
// There's no such thing as private properties on a coffeescript object! But, maybe there are?
//
// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
//
// getSecret() which returns the secret
// setSecret() which sets the secret
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

//✅ SOLUTION:
// MINE:
function createSecretHolder(secret) {
  return {
    getSecret() {
      return secret;
    },
    setSecret(value) {
      secret = value;
    },
  };
}

obj = createSecretHolder(5);
console.log("Expected 5, returns:", obj.getSecret()); // returns 5
obj.setSecret(2);
console.log("Expected 2, returns:", obj.getSecret()); // returns 2

// VERSION 1
// function createSecretHolder(secret) {
//   return {
//     getSecret: () => secret,
//     setSecret: (s) => (secret = s),
//   };
// }

// VERSION 2
// class obj {
//   constructor(secret) {
//     this.sec = secret;
//   }
//   getSecret() {
//     return this.sec;
//   }
//   setSecret(val) {
//     this.sec = val;
//   }
// }
// function createSecretHolder(secret) {
//   var y = new obj(secret);
//   return y;
// }
