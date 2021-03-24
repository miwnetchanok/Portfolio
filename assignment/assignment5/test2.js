window.onload = testfunction;
function testfunction()
{
    let one =70;
    let two = 90;
    let answer = one + two;

    document.getElementById('name2').innerHTML = "คำตอบคือ : " + answer;

    console.log(answer);
}