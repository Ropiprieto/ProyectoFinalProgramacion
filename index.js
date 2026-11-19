const contenidoSlider = [
      { back: "url('./assets/img/img70.jpg')", title: 'primer slider' },
      { back: "url('./assets/img/img71.jpg')", title: 'segundo slider' },
      { back: "url('./assets/img/img72.jpg')", title: 'tercer slider' }
    ]

    let currentIndex = 0

    let imageSlider=document.getElementById('sliderImg');
    let container=document.getElementById('contenedorSlider');
    let btnPrev=document.getElementById('prev');
    let btnNext=document.getElementById('next');

    function showSlide(){
        let item = contenidoSlider[currentIndex]; 
        imageSlider.style.backgroundImage = item.back;
        
    }

    function previous(){
       currentIndex=(currentIndex - 1 + contenidoSlider.length)%contenidoSlider.length; 
       showSlide(); 
    }

    function next(){
        currentIndex=(currentIndex + 1)%contenidoSlider.length;
        showSlide();
    }

    btnPrev.addEventListener('click',previous);
    btnNext.addEventListener('click',next);
    showSlide();

    const textoTestimonios = [
      { contenido: "Lorem ipsum dolor sit amet consectetur adipiscing elit habitant elementum porttitor fringilla diam sodales, ut vel rhoncus faucibus euismod dictum viverra pellentesque auctor ac suscipit. Senectus lobortis porta egestas malesuada netus libero aenean etiam, quisque nunc erat augue turpis velit vivamus bibendum dapibus, sodales cras dictumst orci lacinia ullamcorper nostra. Torquent quam facilisis condimentum non justo pretium fermentum vulputate nisl semper, tellus volutpat nullam nostra ad sodales cursus ullamcorper duis, sed purus nam consequat augue aptent molestie himenaeos tempus.", title:"primer testimonios" },
      { contenido: "Nam massa id felis cubilia faucibus nunc ultricies ornare ultrices inceptos, augue eget vulputate ridiculus tincidunt vivamus curae erat congue, torquent cum tempor integer arcu dictumst pellentesque viverra litora. Accumsan pretium ut nulla metus commodo velit volutpat nostra himenaeos, rhoncus senectus sodales aenean consequat dictumst habitant eget ad, tempus suspendisse id eleifend suscipit primis tortor auctor. Nunc facilisi ac facilisis aptent per dictum magnis, curae ad iaculis massa ut nibh, justo etiam accumsan eget posuere ornare.", title: 'segundo testimonio' },
      { contenido: "Integer metus quis orci mus euismod purus habitasse vestibulum, elementum facilisi laoreet est commodo blandit scelerisque pretium, quisque himenaeos et nascetur cubilia nunc netus. Nibh ultrices blandit nam duis facilisis eleifend vel cursus augue, volutpat placerat suscipit tortor ac proin quisque dictumst congue, pharetra sodales fusce nisl ligula elementum fringilla commodo. Ut luctus netus nulla venenatis aliquam ridiculus facilisi purus dui euismod tempor metus, dapibus duis dictumst nam leo taciti ac integer nostra aliquet curabitur. Augue sed nascetur tempor quam nullam nisi eget hac aenean, feugiat enim montes aptent pellentesque erat proin.", title: 'segundo testimonio' },
    ];   
    
    let currentIndexTestimonio = 0;

    let contenedorTestimonio = document.getElementById('contenidoTestimonio');
    let btnPrevT = document.getElementById('prevTestimonio');
    let btnNextT = document.getElementById('nextTestimonio');

    function showSlideT(){
        let item = textoTestimonios[currentIndexTestimonio]; 
        
        
        contenedorTestimonio.innerHTML = item.contenido;
        
    }

    function previousT(){
       currentIndexTestimonio = (currentIndexTestimonio - 1 + textoTestimonios.length) % textoTestimonios.length; 
       showSlideT(); 
    }

    function nextT(){
        currentIndexTestimonio = (currentIndexTestimonio + 1) % textoTestimonios.length
        showSlideT()
    }

    btnPrevT.addEventListener('click', previousT)
    btnNextT.addEventListener('click', nextT)
    showSlideT();

    const contenidoImgPortfolio = [
  { imagenP: "./assets/img/img1.jpg", imagenHover: "./assets/img/img3.jpg" },
  { imagenP: "./assets/img/img4.jpg", imagenHover: "./assets/img/img6.jpg" },
  { imagenP: "./assets/img/img7.jpg", imagenHover: "./assets/img/img8.jpg" },
  { imagenP: "./assets/img/img10.jpg", imagenHover: "./assets/img/img12.jpg" },
  { imagenP: "./assets/img/img13.jpg", imagenHover: "./assets/img/img15.jpg" },
  { imagenP: "./assets/img/img16.jpg", imagenHover: "./assets/img/img17.jpg" }
    ];   

    let imgPortfolio = document.querySelectorAll('.imgDinamica')

    for (let i = 0; i < imgPortfolio.length; i++) {
    
    let img = imgPortfolio[i]
    
        img.src = contenidoImgPortfolio[i].imagenP
        
        
        img.addEventListener('mouseover', () => {
            img.src = contenidoImgPortfolio[i].imagenHover
        });
        
        
        img.addEventListener('mouseout', () => {
            img.src = contenidoImgPortfolio[i].imagenP
        });
    } 
    
const contenidoImgCircular = [
    { imagenP: "./assets/img/img25.png", imagenHover: "./assets/img/img73.png" },
    { imagenP: "./assets/img/img26.png", imagenHover: "./assets/img/img74.png" },
    { imagenP: "./assets/img/img27.png", imagenHover: "./assets/img/img75.png" },
    { imagenP: "./assets/img/img28.png", imagenHover: "./assets/img/img76.png" },
    { imagenP: "./assets/img/img29.png", imagenHover: "./assets/img/img77.png" },
  
    ];   

    let imgCircular = document.querySelectorAll('.imgDinamicaC')

    for (let i = 0; i < imgCircular.length; i++) {
    
    let img = imgCircular[i]
    
        img.src = contenidoImgCircular[i].imagenP
        
        
        img.addEventListener('mouseover', () => {
            img.src = contenidoImgCircular[i].imagenHover
        });
        
        
        img.addEventListener('mouseout', () => {
            img.src = contenidoImgCircular[i].imagenP
        });
    } 

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