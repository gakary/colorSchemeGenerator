
//fetch("https://www.thecolorapi.com//scheme?hex=24B1E0&mode=triad&count=6")







let hexTemp 
let schemeTemp

const HexElement = document.getElementById('picker')
const SchemesElement = document.getElementById("select-color");
const getColorBtn = document.getElementById('btn-getcolor')
let saveColor = []



getColorBtn.addEventListener("click",()=>{
    saveColor = []
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexTemp}&mode=${schemeTemp}&count=6`)
.then(res => res.json())
.then(data => {
  const colorArray = data.colors.slice(0,6)
  for(let i = 0 ; i < colorArray.length ; i++){
      saveColor.push(colorArray[i].hex.value)
      console.log(saveColor)

  }
  render()
})
})

const render = () =>{
    let html = ""
    let phtml = ""
    for(let color of saveColor){
            html+=`<div class="d" style="background-color:${color}"></div>`
            phtml+=`<p>${color}</p>`
                    
    }
    document.getElementById('display-color').innerHTML = html
    document.getElementById('hex-label').innerHTML = phtml
    console.log(html)
}

 


HexElement.addEventListener("change",(e)=>{
    let selectedHex = e.target.value.replace('#','')
    console.log(selectedHex)
    hexTemp = selectedHex
})

SchemesElement.addEventListener("change",(e)=>{
    let selectedValue = SchemesElement.value;
    selectedValue = selectedValue
    console.log(selectedValue)
    schemeTemp = selectedValue
})




 
