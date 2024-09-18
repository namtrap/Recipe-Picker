let protein, kryddning, sauce, carb;

// Steg 1: Välj Protein
function selectProtein(selectedProtein) {
    protein = selectedProtein;
    document.getElementById('selected-protein').innerText = `Vald protein: ${protein}`;
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('back-to-step1').style.display = 'none'; // Döljer backa-knappen för steg 1
    updateKryddningOptions();
    updateSummary();
}

// Uppdatera kryddningsalternativ baserat på protein
function updateKryddningOptions() {
    let kryddningOptions = '';
    if (protein === 'nötfärs' || protein === 'kyckling') {
        kryddningOptions = `
            <button onclick="selectKryddning('medelhavskryddor')">Medelhavskryddor</button>
            <button onclick="selectKryddning('mexikanskt')">Mexikanskt</button>
            <button onclick="selectKryddning('asiatiskt')">Asiatiskt</button>
            <button onclick="selectKryddning('skandinaviskt')">Skandinaviskt</button>
        `;
    }
    document.getElementById('kryddning-options').innerHTML = kryddningOptions;
}

// Steg 2: Välj Kryddning
function selectKryddning(selectedKryddning) {
    kryddning = selectedKryddning;
    document.getElementById('selected-kryddning').innerText = `Vald kryddning: ${kryddning}`;
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
    document.getElementById('back-to-step1').style.display = 'block'; // Visa backa-knappen för steg 1
    document.getElementById('back-to-step2').style.display = 'none'; // Döljer backa-knappen för steg 2
    updateSauceOptions();
    updateSummary();
}

// Uppdatera såsalternativ beroende på kryddning
function updateSauceOptions() {
    let sauceOptions = '';
    if (kryddning === 'medelhavskryddor') {
        sauceOptions = `
            <button onclick="selectSauce('yoghurt')">Yoghurt</button>
            <button onclick="selectSauce('hummus')">Hummus</button>
            <button onclick="selectSauce('keso')">Keso</button>
        `;
    } else if (kryddning === 'mexikanskt') {
        sauceOptions = `
            <button onclick="selectSauce('guacamole')">Guacamole</button>
            <button onclick="selectSauce('yoghurt')">Yoghurt (med lime och koriander)</button>
        `;
    } else if (kryddning === 'asiatiskt') {
        sauceOptions = `
            <button onclick="selectSauce('sojasås')">Sojasås</button>
            <button onclick="selectSauce('sesamdressing')">Sesamdressing</button>
        `;
    } else if (kryddning === 'skandinaviskt') {
        sauceOptions = `
            <button onclick="selectSauce('keso')">Keso</button>
            <button onclick="selectSauce('yoghurt med dill och citron')">Yoghurt med dill och citron</button>
        `;
    }
    document.getElementById('sauce-options').innerHTML = sauceOptions;
}

// Steg 3: Välj Sås
function selectSauce(selectedSauce) {
    sauce = selectedSauce;
    document.getElementById('selected-sauce').innerText = `Vald sås: ${sauce}`;
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'block';
    document.getElementById('back-to-step2').style.display = 'block'; // Visa backa-knappen för steg 2
    document.getElementById('back-to-step3').style.display = 'none'; // Döljer backa-knappen för steg 3
    updateCarbOptions();
    updateSummary();
}

// Uppdatera kolhydrater och sallad beroende på kryddning
function updateCarbOptions() {
    let carbOptions = '';
    if (kryddning === 'medelhavskryddor') {
        carbOptions = `
            <button onclick="selectCarb('bulgursallad')">Bulgursallad</button>
            <button onclick="selectCarb('potatis och rotfrukter')">Potatis och rotfrukter</button>
            <button onclick="selectCarb('wraps')">Wraps</button>
        `;
    } else if (kryddning === 'mexikanskt') {
        carbOptions = `
            <button onclick="selectCarb('wraps')">Wraps</button>
            <button onclick="selectCarb('bulgursallad')">Bulgursallad</button>
        `;
    } else if (kryddning === 'asiatiskt') {
        carbOptions = `
            <button onclick="selectCarb('ris')">Ris</button>
            <button onclick="selectCarb('wraps')">Wraps</button>
        `;
    } else if (kryddning === 'skandinaviskt') {
        carbOptions = `
            <button onclick="selectCarb('potatis och rotfrukter')">Potatis och rotfrukter</button>
            <button onclick="selectCarb('bulgursallad')">Bulgursallad</button>
        `;
    }
    document.getElementById('carb-options').innerHTML = carbOptions;
}

// Steg 4: Välj Kolhydrat och Sallad
function selectCarb(selectedCarb) {
    carb = selectedCarb;
    document.getElementById('selected-carb').innerText = `Vald kolhydrat och sallad: ${carb}`;
    document.getElementById('step4').style.display = 'none';
    document.getElementById('summary').style.display = 'block';
    document.getElementById('back-to-step3').style.display = 'block'; // Visa backa-knappen för steg 3
    updateSummary();
}

// Backa-funktion
function goBackToStep(step) {
    if (step === 1) {
        document.getElementById('step1').style.display = 'block';
        document.getElementById('step2').style.display = 'none';
    } else if (step === 2) {
        document.getElementById('step2').style.display = 'block';
        document.getElementById('step3').style.display = 'none';
        document.getElementById('back-to-step1').style.display = 'block'; // Visa backa-knappen för steg 1
        document.getElementById('back-to-step2').style.display = 'none'; // Döljer backa-knappen för steg 2
    } else if (step === 3) {
        document.getElementById('step3').style.display = 'block';
        document.getElementById('step4').style.display = 'none';
        document.getElementById('back-to-step2').style.display = 'block'; // Visa backa-knappen för steg 2
        document.getElementById('back-to-step3').style.display = 'none'; // Döljer backa-knappen för steg 3
    }
}

// Uppdatera sammanfattningen dynamiskt
function updateSummary() {
    document.getElementById('summary-protein').innerText = protein || 'Ingen';
    document.getElementById('summary-kryddning').innerText = kryddning || 'Ingen';
    document.getElementById('summary-sauce').innerText = sauce || 'Ingen';
    document.getElementById('summary-carb').innerText = carb || 'Ingen';
}

// Återställ formuläret och börja om från steg 1
function resetForm() {
    // Återställ alla variabler
    protein = undefined;
    kryddning = undefined;
    sauce = undefined;
    carb = undefined;

    // Tömma alla visade val
    document.getElementById('selected-protein').innerText = 'Vald protein: Ingen';
    document.getElementById('selected-kryddning').innerText = 'Vald kryddning: Ingen';
    document.getElementById('selected-sauce').innerText = 'Vald sås: Ingen';
    document.getElementById('selected-carb').innerText = 'Vald kolhydrat och sallad: Ingen';

    // Visa steg 1 igen och dölja resten
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'none';
    document.getElementById('summary').style.display = 'none';
    document.getElementById('recipe-output').innerHTML = ''; // Tömma receptet
}


