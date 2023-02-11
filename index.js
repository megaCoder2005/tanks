function StartGame() {
    var Tank1Helth = 100;
    var Tank2Helth = 100;
    var min = 1;
    var max = 20;
    var GameOver = false;
    var WhoAttack = false;
    var result = [];
    var counter = 0;
    while (!GameOver) {
        var Attack1 = Math.random() * (max - min + 1) + min;
        var Attack2 = Math.random() * (max - min + 1) + min;
        if (!WhoAttack) {
            WhoAttack = true;
            Tank2Helth = Tank2Helth - Attack1;
            result[counter] = "".concat(counter, ": Tank1 Attack with ").concat(Attack1, ". Tank2 helth ").concat(Tank2Helth);
            GameOver = Tank2Helth <= 0 && true;
        }
        else {
            WhoAttack = false;
            Tank1Helth = Tank1Helth - Attack2;
            result[counter] = "".concat(counter, ": Tank2 Attack with ").concat(Attack2, ". Tank1 helth ").concat(Tank1Helth);
            GameOver = Tank1Helth <= 0 && true;
        }
        counter++;
    }
    result[counter] = Tank2Helth <= 0 ? 'Первый танк победил!' : 'Второй танк победил!';
    result[++counter] = "\u0418\u0433\u0440\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0437\u0430 ".concat(counter - 3, " \u0445\u043E\u0434\u043E\u0432");
    ShowResult(result);
}
function ShowResult(formaleArray) {
    var tbl = document.createElement('table');
    var tblBody = document.createElement('tbody');
    formaleArray.map(function (item) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        var cellText = document.createTextNode(item);
        cell.appendChild(cellText);
        row.appendChild(cell);
        tblBody.appendChild(row);
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
        tbl.setAttribute('border', '2');
    });
}
