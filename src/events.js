
const webshopLink = document.getElementById('webshop')
const landingLink = document.getElementById('landing')
const customLink = document.getElementById('custom')
const contactLink = document.getElementById('contact')


export default Events{
  constructor(scene,activeObj){
    this.canvas = canvas;
    this.barsCount = barsCount;
  }

  onWebshopClik () {
    webshopLink.addEventListener('click', (e) => {
      e.preventDefault()
      console.log('hello webshop')
      scene.remove(activeObj)
      loadModels(cart3d,[6,-5,0])
    })
  }
  

}


