window.onload=function(){
    var params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      const {title, subtitle, image}= params;
      const titulo=document.querySelector(".title-text h1");
      titulo.textContent=title;
      const subtitulo=document.querySelector(".title-text p");
      subtitulo.textContent=subtitle;
      const image2=document.querySelector(".img-simplify");
      
      image2.style.backgroundImage= `url(../images/projects-section/${image}.jpg)`;
      console.log(image2);
};
