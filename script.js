let clickedBoxes = [];
let roles = {
    1: "הגנה",
    2: "התקפה",
    3: "מהירות",
    4: "הגנה קריטית",
    5: "התקפה קריטית",
};

function boxClicked(boxNumber) {
    // אם נלחץ כפתור נוסף (כשהאורך של clickedBoxes הוא 2) - החזרת צבעים לניטרלי
    if (clickedBoxes.length >= 2) {
        resetButtons(); // איפוס הכפתורים
        clickedBoxes = []; // איפוס הרשימה ללחיצות הבאות
    }

    // הוספת הכפתור שנלחץ לרשימה
    clickedBoxes.push(boxNumber);
    
    // צביעת הכפתור
    let button = document.querySelector(`button[onclick="boxClicked(${boxNumber})"]`);
    button.style.backgroundColor = clickedBoxes.length === 1 ? 'lightgreen' : 'lightcoral';

    // אם נלחצו שני כפתורים, נבדוק את הרצפים
    if (clickedBoxes.length === 2) {
        checkSequence();
    }
}

function checkSequence() {
    let first = clickedBoxes[0];
    let second = clickedBoxes[1];

    let firstRole = roles[first];
    let secondRole = roles[second];

    // בדיקות לרצפים מסוימים והצגת המצב המתאים
    if (firstRole === "התקפה" && secondRole === "הגנה") {
        document.getElementById('output').innerText = `LONELY`;
    } else if (firstRole === "התקפה" && secondRole === "הגנה קריטית") {
        document.getElementById('output').innerText = `NAUGHTY`;
    } else if (firstRole === "התקפה" && secondRole === "התקפה קריטית") {
        document.getElementById('output').innerText = `ADAMANT`;
    } else if (firstRole === "התקפה" && secondRole === "מהירות") {
        document.getElementById('output').innerText = `BRAVE`;
    } else if (firstRole === "הגנה" && secondRole === "התקפה") {
        document.getElementById('output').innerText = `BOLD`;
    } else if (firstRole === "הגנה" && secondRole === "התקפה קריטית") {
        document.getElementById('output').innerText = `IMPISH`;
    } else if (firstRole === "הגנה" && secondRole === "מהירות") {
        document.getElementById('output').innerText = `RELAXED`;
    } else if (firstRole === "הגנה" && secondRole === "הגנה קריטית") {
        document.getElementById('output').innerText = `LAX`;
   } else if (firstRole === "התקפה קריטית" && secondRole === "התקפה") {
        document.getElementById('output').innerText = `MODEST`;
    } else if (firstRole === "התקפה קריטית" && secondRole === "הגנה") {
        document.getElementById('output').innerText = `MILD`;
    } else if (firstRole === "התקפה קריטית" && secondRole === "מהירות") {
        document.getElementById('output').innerText = `QUIET`;
    } else if (firstRole === "התקפה קריטית" && secondRole === "הגנה קריטית") {
        document.getElementById('output').innerText = `RASH`;
    } else if (firstRole === "הגנה קריטית" && secondRole === "התקפה") {
        document.getElementById('output').innerText = `CALM`;
    } else if (firstRole === "הגנה קריטית" && secondRole === "התקפה קריטית") {
        document.getElementById('output').innerText = `CAREFUL`;
    } else if (firstRole === "הגנה קריטית" && secondRole === "מהירות") {
        document.getElementById('output').innerText = `SASSY`;
    } else if (firstRole === "הגנה קריטית" && secondRole === "הגנה") {
        document.getElementById('output').innerText = `GENTLE`;
   } else if (firstRole === "מהירות" && secondRole === "התקפה") {
        document.getElementById('output').innerText = `TIMID`;
    } else if (firstRole === "מהירות" && secondRole === "התקפה קריטית") {
        document.getElementById('output').innerText = `JOLLY`;
    } else if (firstRole === "מהירות" && secondRole === "הגנה	") {
        document.getElementById('output').innerText = `HASTY`;
    } else if (firstRole === "מהירות" && secondRole === "הגנה קריטית") {
        document.getElementById('output').innerText = `NAIVE`;
  } else if (firstRole === "מהירות" && secondRole === "הגנה") {
        document.getElementById('output').innerText = `HASTY`;

    }
    // הוסף מצבים נוספים כאן
    else {
        document.getElementById('output').innerText = `לחצת על אותו כפתור פעמיים`;
    }
}

function resetButtons() {
    // איפוס צבעי הכפתורים
    const buttons = document.querySelectorAll('.box');
    buttons.forEach(button => {
        button.style.backgroundColor = 'lightgray'; // צבע ניטרלי
    });
}
function showStatus(status) {
    let output = "";
    switch (status) {
        case 'LONELY':
            output = "מעלה: התקפה, מוריד: הגנה";
            break;
        case 'BASHFUL':
            output = "ניטרלי";
            break;
        case 'NAUGHTY':
            output = "מעלה: התקפה, מוריד: הגנה מיוחדת";
            break;
        case 'ADAMANT':
            output = "מעלה: התקפה, מוריד: התקפה מיוחדת";
            break;
             case 'DOCILE':
            output = "ניטרלי";
            break;
        case 'BRAVE':
            output = "מעלה: התקפה, מוריד: מהירות";
            break;
        case 'BOLD':
            output = "מעלה: הגנה, מוריד: התקפה";
            break;
        case 'IMPISH':
            output = "מעלה: הגנה, מוריד: התקפה מיוחדת";
            break;
            case 'RELAXED':
            output = "מעלה: הגנה, מוריד: מהירות";
            break;
        case 'LAX':
            output = "מעלה: הגנה, מוריד: הגנה מיוחדת";
            break;
        case 'MILD':
            output = "מעלה: התקפה מיוחדת, מוריד: הגנה";
            break;
        case 'MODEST':
            output = "מעלה: התקפה מיוחדת, מוריד: התקפה";
            break;
             case 'RASH':
            output = "מעלה: התקפה מיוחדת, מוריד: הגנה מיוחדת";
            break;
        case 'HARDY':
            output = "ניטרלי";
            break;
        case 'CALM':
            output = "מעלה: הגנה מיוחדת, מוריד: התקפה";
            break;
        case 'QUIET':
            output = "מעלה: התקפה מיוחדת, מוריד: מהירות";
            break;
             case 'CAREFUL':
            output = "מעלה: הגנה מיוחדת, מוריד: התקפה מיוחדת";
            break;
        case 'GENTLE':
            output = "מעלה: הגנה מיוחדת, מוריד: הגנה";
            break;
        case 'SASSY':
            output = "מעלה: הגנה מיוחדת, מוריד: מהירות";
            break;
        case 'SERIOUS':
            output = "ניטרלי";
            break;
             case 'HASTY':
            output = "מעלה: מהירות, מוריד: הגנה";
            break;
        case 'TIMID':
            output = "מעלה: מהירות, מוריד: התקפה";
            break;
        case 'NAIVE':
            output = "מעלה: מהירות, מוריד: הגנה מיוחדת";
            break;
        case 'JOLLY':
            output = "מעלה: מהירות, מוריד: התקפה מיוחדת";
            break;
        case 'QUIRKY':
            output = "ניטרלי";
            break;
        default:
            output = "מצב לא זוהה";
    }
    document.getElementById("status-output").innerText = output;
}
