function checkAge() {
    const age = parseInt(document.getElementById('age').value);
    const result = age > 18 ? 'Đủ tuổi' : 'Không đủ tuổi';
    document.getElementById('ageResult').innerText = result;
}

function checkEvenOdd() {
    const a = parseInt(document.getElementById('numberA').value);
    const result = a % 2 === 0 ? 'Hello' : 'Hi';
    document.getElementById('evenOddResult').innerText = result;
}

function compareTwoNumbers() {
    const a = parseInt(document.getElementById('numA').value);
    const b = parseInt(document.getElementById('numB').value);
    let result;
    
    if (a > b) {
        result = `Tổng: ${a + b}`;
    } else if (a < b) {
        result = `Tích: ${a * b}`;
    } else {
        result = 'Hihi';
    }
    
    document.getElementById('compareResult').innerText = result;
}

function findMax() {
    const a = parseInt(document.getElementById('maxA').value);
    const b = parseInt(document.getElementById('maxB').value);
    const c = parseInt(document.getElementById('maxC').value);
    
    const max = Math.max(a, b, c);
    document.getElementById('maxResult').innerText = `Số lớn nhất: ${max}`;
}