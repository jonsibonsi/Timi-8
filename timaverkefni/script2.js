function checkCharacter() {
    console.log("Check carachter");
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById ("age").value);
    let score = Number(document.getElementById ("score").value);

    function checkAge() 
     if (isNaN(age) || age === 0) {
        document.getElementById("ageOutput").innerText = "Sláðu inn aldur!!";
        return;
    }
    let message = "";
    if (age > 18) {
        message = "ert yfir aldri"
    }else message = "ert undir aldri";
    console.log ("Check age");


    
        // 1. Ná í name, age og score
        // 2. Breyta age og score í Number
        // 3. Ef eitthvað vantar → sýna villu
        // 4. Nota if / else:
        // ef age < 18 skila þá "Of ung/ur til að spila"
        // ef score > 80 og age >= 18 "Pro"
        // ef score > 50 en < 80 "Normal"
        // annars skila "Beginner"
        // 5. Sýna niðurstöðu í output
}