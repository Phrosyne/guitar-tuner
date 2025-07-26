const low_e_string = new Audio("/audio/6th-string.m4a");
const a_string = new Audio("/audio/5th-string.m4a");
const d_string = new Audio("/audio/4th-string.m4a");
const g_string = new Audio("/audio/3rd-string.m4a");
const b_string = new Audio("/audio/2nd-string.m4a");
const high_e_string = new Audio("/audio/1st-string.m4a");

function clickBtn(element) {
    let e_id = element.id;
    switch (e_id) {
        case '6':
            low_e_string.play();
            break;
        case '5':
            a_string.play();
            break;
        case '4':
            d_string.play();
            break;
        case '3':
            g_string.play();
            break;
        case '2':
            b_string.play();
            break;
        case'1':
            high_e_string.play();
            break;

        default:
            alert("Sorry but it looks like nothing happened :(");
    }
}