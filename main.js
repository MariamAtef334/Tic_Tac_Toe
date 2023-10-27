let turn = "X";
let title = document.querySelector(".title");
let squares = [];
function check(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} winner`;
    document.getElementById('item' + num1).style.background = "black";
    document.getElementById('item' + num2).style.background = "black";
    document.getElementById('item' + num3).style.background = "black";


}
function reset() {
    setInterval(function () { title.innerHTML += '.' }, 1000)
    setTimeout(function () { location.reload() }, 1000)
}
function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }
    if (squares[1] === squares[2] && squares[2] === squares[3] && squares[1] != "") {
        check(1, 2, 3);
    }
    else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[5] != "") {
        check(4, 5, 6);
    }
    else if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] != "") {
        check(7, 8, 9);
    }
    else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] != "") {
        check(1, 4, 7);
    }
    else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[5] != "") {
        check(2, 5, 8);
    }
    else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[6] != "") {
        check(3, 6, 9);
    }
    else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[1] != "") {
        check(1, 5, 9);
    }
    else if (squares[3] === squares[5] && squares[5] === squares[7] && squares[3] != "") {
        check(3, 5, 7);
    }


}
function game(id) {
    let element = document.getElementById(id);
    if (turn === "X" && element.innerHTML == "") {
        element.innerHTML = "X";
        turn = "O";
        title.innerHTML = "player's O turn"
    }
    else if (turn === "O" && element.innerHTML == "") {
        element.innerHTML = "O";
        turn = "X";
        title.innerHTML = " player's X turn"
    }
    winner();
}