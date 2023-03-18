function repeat(str, numTimes) {
    // 🤬初期値忘れがち！
    let result = "";

    for (let i = 0; i < numTimes; i++) {
        //🤬
        result += str;
    }
    // consoleはforの外
    console.log(result);

}

