// const low_e_string = new Audio("/audio/6th-string.m4a");
// const a_string = new Audio("/audio/5th-string.m4a");
// const d_string = new Audio("/audio/4th-string.m4a");
// const g_string = new Audio("/audio/3rd-string.m4a");
// const b_string = new Audio("/audio/2nd-string.m4a");
// const high_e_string = new Audio("/audio/1st-string.m4a");

const low_e_string = document.getElementById("sixth-string");
const a_string = document.getElementById("fifth-string");
const d_string = document.getElementById("fourth-string");
const g_string = document.getElementById("third-string");
const b_string = document.getElementById("second-string");
const high_e_string = document.getElementById("first-string");


function clickBtn(element) {
    switch (element.id) {
        case "six":
            low_e_string.play();
            break;
        case "five":
            a_string.play();
            break;
        case "four":
            d_string.play();
            break;
        case "three":
            g_string.play();
            break;
        case "two":
            b_string.play();
            break;
        case "one":
            high_e_string.play();
            break;

        default:
            alert("Sorry but it looks like nothing happened :(");
    }
}