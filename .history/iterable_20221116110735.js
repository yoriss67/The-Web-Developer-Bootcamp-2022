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
    
    // for (let person of testScores) {
    //     console.log(person);
    // }
    
    // valueのみにアクセスして平均したい
    
    // 通常のオブジェクトの場合はfor...ofの反復操作はできないので下記のように配列に置き換える
    // const scores = Object.entries(testScores);
    
    
    // 🤬letで宣言！
    // 🤬
    let total = 0;
    
    for (let score of Object.values(testScores)) {
       console.log(total += score);
       to
    }