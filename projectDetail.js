  const contenidoPd = [
    { imagenPD: "./assets/img/img59.jpg", },
    { imagenPD: "./assets/img/img60.jpg", },
    { imagenPD: "./assets/img/img61.jpg", },
    { imagenPD: "./assets/img/img62.jpg", },
    { imagenPD: "./assets/img/img63.jpg", },
    { imagenPD: "./assets/img/img64.jpg", },
    ];   
    
    let imgPD = document.querySelectorAll('.imgPD')

    for (let i = 0; i < imgPD.length; i++) {
    
    let img = imgPD[i]
    
        img.src = contenidoPd[i].imagenPD
    } 