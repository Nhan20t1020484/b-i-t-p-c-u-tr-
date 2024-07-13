function checkDivision() {
    const a = parseInt(document.getElementById('numA').value);
    const b = parseInt(document.getElementById('numB').value);
    let result;

    if (b !== 0) {
        if (a % b === 0) {
            result = `${a} chia hết cho ${b}`;
        } else {
            result = `${a} không chia hết cho ${b}`;
        }
    } else {
        result = 'Không thể chia cho 0';
    }
    
    document.getElementById('divisionResult').innerText = result;
}
