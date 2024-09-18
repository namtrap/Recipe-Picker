// Generera ett detaljerat recept baserat på användarens val
function generateRecipe() {
    if (protein && kryddning && sauce && carb) {
        let recipe = '';
        
        // Lista över basvaror som alltid finns i skafferiet
        let skafferiBasvaror = ['Olja', 'Salt', 'Peppar'];

        // Kryddor och dynamiska skafferivaror som kan användas i vissa recept
let skafferiDynamiska = {
    'Spiskummin': true,
    'Chili (fryst)': true,
    'Ingefära (torkad)': true,
    'Koriander (fryst)': true,
    'Paprika': true,
    'Vitlök': true,
    'Lök': true,
    'Sojasås': true,
    'Risvinäger': true,
    'Sesamolja': true,
    'Oregano': true,  // Lägg till dessa kryddor
    'Basilika (Fryst)': true,
    'Timjan': true,
    'Rosmarin': true,
    'Dill': true
};


let shoppingList = {
    handla: [],
    categories: {
        'Frukt & Grönt': [],
        'Mejeri': [],
        'Skafferi': [],
        'Kött & Fågel': [],
        'Övrigt': [],
        'Se till att ha hemma': []  // Ny kategori för basvaror och dynamiska skafferivaror
    }
};

const kontrolleraSkafferiVaror = (vara) => {
    if (skafferiDynamiska[vara]) {
        // Kolla om varan redan finns i "Se till att ha hemma"
        if (!shoppingList.categories['Se till att ha hemma'].includes(vara)) {
            shoppingList.categories['Se till att ha hemma'].push(vara);
        }
    } else {
        // Kolla om varan redan finns i "Skafferi"
        if (!shoppingList.categories['Skafferi'].includes(vara)) {
            shoppingList.categories['Skafferi'].push(vara);
        }
    }
};



// Kryddblandningar baserade på kök (gör texten grön för kryddningar)
let kryddblandning = '';
if (kryddning === 'asiatiskt') {
    kryddblandning = `<span class="green-text">spiskummin, ingefära, Koriander (fryst), Chili (fryst)</span>`;
    kontrolleraSkafferiVaror('Spiskummin');
    kontrolleraSkafferiVaror('Ingefära (torkad)');
    kontrolleraSkafferiVaror('Koriander (fryst)');
    kontrolleraSkafferiVaror('Chili (fryst)');
} else if (kryddning === 'medelhavskryddor') {
    kryddblandning = `<span class="green-text">oregano, Basilika (Fryst), timjan, rosmarin</span>`;
    kontrolleraSkafferiVaror('Oregano');
    kontrolleraSkafferiVaror('Basilika (Fryst)');
    kontrolleraSkafferiVaror('Timjan');
    kontrolleraSkafferiVaror('Rosmarin');
} else if (kryddning === 'mexikanskt') {
    kryddblandning = `<span class="green-text">spiskummin, paprika, Koriander (fryst), Chili (fryst)</span>`;
    kontrolleraSkafferiVaror('Spiskummin');
    kontrolleraSkafferiVaror('Paprika');
    kontrolleraSkafferiVaror('Koriander (fryst)');
    kontrolleraSkafferiVaror('Chili (fryst)');
} else if (kryddning === 'skandinaviskt') {
    kryddblandning = `<span class="green-text">dill, vitpeppar, persilja, mejram</span>`;
    kontrolleraSkafferiVaror('Dill');
    kontrolleraSkafferiVaror('Vitpeppar');
    kontrolleraSkafferiVaror('Persilja');
    kontrolleraSkafferiVaror('Mejram');
}






        // Gör proteintexten röd
        const proteinText = `<span class="red-text">${protein}</span>`;

// Receptet för protein
if (protein === 'nötfärs') {
    if (carb === 'wraps') {
        recipe += `<p>1. Stek 500g ${proteinText} tillsammans med ${kryddblandning}, <span class="green-text">2 vitlöksklyftor</span> och <span class="green-text">1 hackad lök</span> tills färsen är genomstekt. Fyll <span class="yellow-text">wraps</span> med färs och tillsätt sås och grönsaker.</p>`;
        shoppingList.categories['Kött & Fågel'].push('500g Nötfärs');
        kontrolleraSkafferiVaror('Vitlök');
        kontrolleraSkafferiVaror('Lök');
    } else {
        recipe += `<p>1. Blanda 500g ${proteinText} med ${kryddblandning}, <span class="green-text">2 vitlöksklyftor</span> och <span class="green-text">1 hackad lök</span>. Forma biffar och stek dem i olja tills de är genomstekta.</p>`;
        shoppingList.categories['Kött & Fågel'].push('500g Nötfärs');
        kontrolleraSkafferiVaror('Vitlök');
        kontrolleraSkafferiVaror('Lök');
    }

    // Kontrollera om kryddningen är "medelhavskryddor" och lägg till fetaost i blandningen
    if (kryddning === 'medelhavskryddor') {
        recipe += `<p>2. Blanda i <span class="green-text">100g fetaost</span> i nötfärsblandningen för extra smak.</p>`;
        shoppingList.categories['Mejeri'].push('100g Fetaost');
    }

} else if (protein === 'kyckling') {
    if (carb === 'wraps') {
        recipe += `<p>1. Strimla 500g ${proteinText} och stek den med ${kryddblandning}, <span class="green-text">2 vitlöksklyftor</span> och <span class="green-text">1 hackad lök</span> tills kycklingen är genomstekt. Fyll <span class="yellow-text">wraps</span> med kyckling, sås och grönsaker.</p>`;
        shoppingList.categories['Kött & Fågel'].push('500g Kycklingfilé (eller fryst)');
        kontrolleraSkafferiVaror('Vitlök');
        kontrolleraSkafferiVaror('Lök');
    } else {
        recipe += `<p>1. Stek eller ugnsbaka 500g ${proteinText} med ${kryddblandning}, <span class="green-text">2 vitlöksklyftor</span> och <span class="green-text">1 hackad lök</span>. Servera med valda tillbehör.</p>`;
        shoppingList.categories['Kött & Fågel'].push('500g Kycklingfilé (eller fryst)');
        kontrolleraSkafferiVaror('Vitlök');
        kontrolleraSkafferiVaror('Lök');
    }

    // Om kryddningen är "medelhavskryddor", lägg till fetaost som ett tillbehör
    if (kryddning === 'medelhavskryddor') {
        recipe += `<p>2. Servera <span class="green-text">100g fetaost</span> som tillbehör till kycklingen.</p>`;
        shoppingList.categories['Mejeri'].push('100g Fetaost');
    }
}

        // Sås och ingredienser relaterade till sås i blått
        if (sauce === 'guacamole') {
            recipe += `<p>2. Gör en enkel <span class="blue-text">guacamole</span> genom att mosa <span class="blue-text">2 frysta avokado</span> och blanda med saften från <span class="blue-text">1 lime</span>, <span class="green-text">2 vitlöksklyftor</span>, <span class="green-text">1 msk Chili (fryst)</span>, salt och peppar.</p>`;
            shoppingList.categories['Frukt & Grönt'].push('2 Frysta avokado', '1 Lime');
            kontrolleraSkafferiVaror('Vitlök');
            kontrolleraSkafferiVaror('Chili (fryst)');
} else if (sauce === 'yoghurt' && kryddning === 'mexikanskt') {
    recipe += `<p>2. Blanda <span class="blue-text">2 dl grekisk yoghurt</span> med saften från <span class="blue-text">1 lime</span> och <span class="green-text">Koriander (fryst)</span>. Smaksätt med salt, peppar och <span class="green-text">2 vitlöksklyftor</span>.</p>`;
    shoppingList.categories['Mejeri'].push('2 dl Grekisk yoghurt');
    shoppingList.categories['Frukt & Grönt'].push('1 Lime');
    kontrolleraSkafferiVaror('Vitlök');
    kontrolleraSkafferiVaror('Koriander (Fryst)');
} else if (sauce === 'yoghurt') {
    recipe += `<p>2. Blanda <span class="blue-text">2 dl grekisk yoghurt</span> med <span class="green-text">dill</span>, saften från <span class="blue-text">1 citron</span> och <span class="green-text">2 vitlöksklyftor</span>. Smaksätt med salt och peppar.</p>`;
    shoppingList.categories['Mejeri'].push('2 dl Grekisk yoghurt');
    shoppingList.categories['Frukt & Grönt'].push('1 Citron');
    kontrolleraSkafferiVaror('Dill');
    kontrolleraSkafferiVaror('Vitlök');
}

        else if (sauce === 'yoghurt med dill och citron') {
            recipe += `<p>2. Blanda <span class="blue-text">2 dl grekisk yoghurt</span> med <span class="green-text">dill</span>, saften från <span class="blue-text">1 citron</span> och <span class="green-text">2 vitlöksklyftor</span>. Smaksätt med salt och peppar.</p>`;
            shoppingList.categories['Mejeri'].push('2 dl Grekisk yoghurt');
            shoppingList.categories['Frukt & Grönt'].push('1 Citron');
            shoppingList.categories['Skafferi'].push('Dill');
            kontrolleraSkafferiVaror('Vitlök');

       
        } 

        else if (sauce === 'hummus') {
            recipe += `<p>2. Gör egen <span class="blue-text">hummus</span> genom att blanda <span class="blue-text">200g kokta kikärtor</span> med <span class="green-text">2 vitlöksklyftor</span>, <span class="blue-text">1 msk tahini</span>, saften från <span class="blue-text">1 citron</span> och <span class="blue-text">2 msk olivolja</span>. Mixa till en slät sås.</p>`;
            shoppingList.categories['Skafferi'].push('200g Kikärtor', 'Tahini', 'Olivolja');
            shoppingList.categories['Frukt & Grönt'].push('1 Citron');
            kontrolleraSkafferiVaror('Vitlök');
        } else if (sauce === 'keso') {
            recipe += `<p>2. Servera <span class="blue-text">200g keso</span> som ett lätt tillbehör.</p>`;
            shoppingList.categories['Mejeri'].push('200g Keso');
        } else if (sauce === 'sojasås') {
            recipe += `<p>2. Blanda <span class="blue-text">3 msk sojasås</span> med <span class="blue-text">1 msk risvinäger</span> och <span class="blue-text">1 tsk sesamolja</span> för en snabb asiatisk dressing.</p>`;
            shoppingList.categories['Skafferi'].push('Sojasås', 'Risvinäger', 'Sesamolja');
        }

// Kolhydrater och sallad med gul text
if (carb === 'bulgursallad') {
    recipe += `<p>3. Koka <span class="yellow-text">2 dl bulgur</span> enligt instruktionerna och blanda med tärnade grönsaker (som <span class="yellow-text">2 tomater</span> och <span class="yellow-text">1 gurka</span>), saften från <span class="blue-text">1 citron</span> och <span class="blue-text">1 msk olivolja</span>.</p>`;
    shoppingList.categories['Skafferi'].push('2 dl Bulgur');
    shoppingList.categories['Frukt & Grönt'].push('2 Tomater', '1 Gurka');
    shoppingList.categories['Frukt & Grönt'].push('1 Citron');
} else if (carb === 'potatis och rotfrukter') {
    recipe += `<p>3. Rosta <span class="yellow-text">600g potatis</span> och <span class="yellow-text">400g rotfrukter</span> (morötter, palsternacka) i olja med salt och peppar i ugnen på 200°C i cirka 30 minuter.</p>`;
    shoppingList.categories['Frukt & Grönt'].push('600g Potatis', '400g Rotfrukter (Morötter, Palsternacka)');
} else if (carb === 'wraps') {
    recipe += `<p>3. Fyll <span class="yellow-text">wraps</span> med kyckling/nötfärs, sås och färska grönsaker som <span class="yellow-text">2 tomater</span>, <span class="yellow-text">1 gurka</span> och sallad.</p>`;
    shoppingList.categories['Skafferi'].push('Wraps');
    shoppingList.categories['Frukt & Grönt'].push('2 Tomater', '1 Gurka', 'Sallad');
} else if (carb === 'ris') {
    recipe += `<p>3. Koka <span class="yellow-text">2 dl ris</span> och servera med kyckling/nötfärs och sås.</p>`;
    shoppingList.categories['Skafferi'].push('2 dl Ris');
}

// Generera slutligt recept och inköpslista i kategorier
let shoppingOutput = `
    <h3>Inköpslista</h3>
    <ul>
            <li><strong>Se till att ha hemma:</strong>
            <ul>${shoppingList.categories['Se till att ha hemma'].map(item => `<li>${item}</li>`).join('')}</ul>
        </li>
        <li><strong>Frukt & Grönt:</strong>
            <ul>${shoppingList.categories['Frukt & Grönt'].map(item => `<li>${item}</li>`).join('')}</ul>
        </li>
        <li><strong>Mejeri:</strong>
            <ul>${shoppingList.categories['Mejeri'].map(item => `<li>${item}</li>`).join('')}</ul>
        </li>
        <li><strong>Skafferi:</strong>
            <ul>${shoppingList.categories['Skafferi'].map(item => `<li>${item}</li>`).join('')}</ul>
        </li>
        <li><strong>Kött & Fågel:</strong>
            <ul>${shoppingList.categories['Kött & Fågel'].map(item => `<li>${item}</li>`).join('')}</ul>
        </li>
        <li><strong>Övrigt:</strong>
            <ul>${shoppingList.categories['Övrigt'].map(item => `<li>${item}</li>`).join('')}</ul>
        </li>

    </ul>
`;

document.getElementById('recipe-output').innerHTML = recipe + shoppingOutput;
    } else {
        document.getElementById('recipe-output').innerHTML = '<p>Alla val måste vara gjorda innan du kan generera ett recept!</p>';
    }
}
