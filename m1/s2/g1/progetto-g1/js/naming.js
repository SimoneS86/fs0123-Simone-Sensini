if (animale == 'criceto' || animale == 'coniglio') {
    alert ('Wow è anche il mio animale preferito!');
}else if (animale == 'giraffa' || animale == 'leone') {
    console.log(animale);
}else if (animale == 'pantera') {
    document.write(animale);
}else if (!isNaN(animale)){
    alert('non hai inserito un nome valido')
}
else {
    alert ('Che carino!')
}