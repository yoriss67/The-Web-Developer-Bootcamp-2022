// .tips 1 while loop 2 !== 'q' 3 push使う
// let input = prompt('What would you like to do?');
// console.log(input);

// let list = [
//     'Buy New Turtle' 
// ];

// let count = list.push(input);

//     console.log(count, list);




// 👩‍🎓new, list...list all to dos, delete, quit
// 202 
let input = prompt('What would you like to do?');

const todos = ['Collect chicken eggs', 'Clean Litter box'];


// 3:30 なんで||じゃないのか⭐||だと左が合ってた場合、右の値の真偽はどうでも良くなっちゃうから
while (input !== 'quit' && input !== 'q') {
    // list表示
    if (input === 'list') {
        console.log('***********************');
        for (let i = 0; i < todos.length; i++) {
            //                 🤬valueへのアクセスは定数の中の変数
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********************');
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what\'s the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    } else if (input === 'delete') {
        // 🤬inputに代入じゃなく新しいconst
        const index = prompt('Ok, enter the index to delete');
    }
    input = prompt('What would you like to do?');

}



// quitかq打ったら
console.log("Ok, bye bye");