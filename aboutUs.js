 const contenidoImgUs = [
    { imagenUs: "./assets/img/img30.jpg", },
    { imagenUs: "./assets/img/img31.jpg", },
    { imagenUs: "./assets/img/img32.jpg", },
    { imagenUs: "./assets/img/img33.jpg", },
    { imagenUs: "./assets/img/img34.jpg", },
  
    ];   
    
    let imgAboutUs = document.querySelectorAll('.imgUs')

    for (let i = 0; i < imgAboutUs.length; i++) {
    
    let img = imgAboutUs[i]
    
        img.src = contenidoImgUs[i].imagenUs
    } 