function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
  //se tiver light mode, adiciona a imagem light
    img.setAttribute('src', './assets/avatar-light.png') 
  } else{
    img.setAttribute('src', './assets/avatar.png')
  }
  //  html.classList.remove('light')
  //} else{
  //  html.classList.add('light') ISSO É AQUILO EMBAIXO SEM SER RESUMIDO 

  

  


}