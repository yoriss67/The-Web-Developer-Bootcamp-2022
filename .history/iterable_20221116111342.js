// 200

const testScores = {
    keenan: 20, 
    daomon: 10, 
    kim: 40,
    shawn: 30,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
    }
    
    for (let person of testScores) {
        console.log();
    }
    
    // valueのみにアクセスして平均したい    
    
    // 🤬letで宣言！
    // 🤬
    let total = 0;
    // 通常のオブジェクトの場合はfor...ofの反復操作はできないので下記のように配列に置き換える
    let scores = Object.values(testScores);
    
    for (let score of scores) {
    //    (total += score)/testScores.
    total += score;
    }

    // 🤬
    console.log(total / scores.length);