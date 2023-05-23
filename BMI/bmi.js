function bmi() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let bmi = (weight / (height * height)).toFixed(1);
    let gender = document.getElementsByName("gender");
    let state;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked === "Nam") {
            if (bmi < 20.7) {
                state = " | Gầy";
            } else if (bmi >= 20.7 && bmi < 26.4) {
                state = " | Bình thường";
            } else if (bmi >= 26.4 && bmi < 27.8) {
                state = " | Thừa cân nhẹ";
            } else if (bmi >= 27.8 && bmi <= 31.8) {
                state = " | Trên lý tưởng";
            } else {
                state = " | Béo phì";
            }
        } else {
            if (bmi < 19.1) {
                state = " | Gầy";
            } else if (bmi >= 19.1 && bmi < 25.8) {
                state = " | Bình thường";
            } else if (bmi >= 25.8 && bmi < 27.3) {
                state = " | Thừa cân nhẹ";
            } else if (bmi >= 27.3 && bmi <= 32.3) {
                state = " | Trên lý tưởng";
            } else {
                state = " | Béo phì";
            }
        }
    }
    document.getElementById("result").innerHTML = bmi + state;  // = `${bmi} ${state}`
}


