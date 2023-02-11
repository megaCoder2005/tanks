function StartGame() {
    let Tank1Helth: number = 100;
    let Tank2Helth: number = 100;

    let min: number = 1;
    let max: number =20;

    let GameOver: boolean = false;

    let WhoAttack: boolean = false;

    let result: Array<string> = []
    let counter: number = 0;
    while(!GameOver) {
        let Attack1 = Math.random() * (max - min + 1) + min;
        let Attack2 = Math.random() * (max - min + 1) + min;
        
        if (!WhoAttack) {
            WhoAttack=true;
            Tank2Helth=Tank2Helth- Attack1;
            result[counter] = `${counter}: Tank1 Attack with ${Attack1}. Tank2 helth ${Tank2Helth}`;

            GameOver = Tank2Helth<=0 && true;
        }
        else  {
            WhoAttack = false;
            Tank1Helth = Tank1Helth-Attack2;
            result[counter] = `${counter}: Tank2 Attack with ${Attack2}. Tank1 helth ${Tank1Helth}`;

            GameOver = Tank1Helth<=0 && true;
        }
        counter++;
    }
    result[counter] = Tank2Helth<=0 ? 'Первый танк победил!' : 'Второй танк победил!';
    result[++counter] = `Игра завершена за ${counter-3} ходов`
    ShowResult(result)
}

function ShowResult(formaleArray: Array<string>) {

    const tbl = document.createElement('table');
    const tblBody = document.createElement('tbody');

    formaleArray.map((item)=> {
        const row = document.createElement('tr');
        const cell = document.createElement('td');

        const cellText = document.createTextNode(item);
        cell.appendChild(cellText);
        row.appendChild(cell);
        tblBody.appendChild(row);
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
        tbl.setAttribute('border', '2');
    })
}