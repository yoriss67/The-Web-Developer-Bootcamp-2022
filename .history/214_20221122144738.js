function callTwice(f) {
    f();
    f();
  }

  function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
  }

  callTwice()