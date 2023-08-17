const areaButton = document.getElementById("area-calculate")

areaButton.addEventListener("click", function(){
    const baseInput = document.getElementById("base")
    const heightInput = document.getElementById("height")
    const area = document.querySelectorAll(".area")
    const visible = document.getElementById("visible")
    if(baseInput.value ==="" || heightInput.value === ""){
        if( typeof baseInput.value === "string" || typeof heightInput === "string"){
            return
        }
        return;
    }else if(baseInput.value<0 && heightInput.value <0){
        baseInput.value =""
        heightInput.value = ""
        return
    }
    
    const baseNum = parseFloat(baseInput.value)
    const heightNum = parseFloat(heightInput.value)

    const areaCal =parseFloat(.5 * (baseNum * heightNum))

    visible.style.display = "block"

    for(let areas of area){
        areas.innerText = areaCal
    }

    const converter= document.getElementById("meter-converter")
    
    converter.addEventListener("click", function(){
        const m2 = document.getElementById("m2")
        m2.style.display = "none"
        const meter = areaCal/ 1000
        area[1].innerText = meter + " m^2"
    })

    
    const listContainer1  = document.getElementById("list-container1")

    listContainer1.style.display = "flex"
    
    
    baseInput.value =""
    heightInput.value =""

    


    

})


const areaButton2 = document.getElementById("area-calculate2")

areaButton2.addEventListener("click", function(){
    const widthInput = document.getElementById("W")
    const lengthInput = document.getElementById("L")
    const visible2 = document.getElementById("visible2")
    const area_rec = document.querySelectorAll(".area-rec")

    const widthNum = parseFloat(widthInput.value)
    const lengthNum = parseFloat(lengthInput.value)
   
    if(widthInput.value =="" && lengthInput.value ===""){
        if( typeof widthInput.value === "string" || typeof lengthInput === "string")
        return
    }else if(widthInput.value<0 || lengthInput.value <0){
        widthInput.value = ""
        lengthInput.value = ""
        return
    }

    visible2.style.display = "block"

    const area = parseFloat(widthNum * lengthNum)

    const converter2 = document.getElementById("meter-converter2")

    for(let areasRec of area_rec){
        areasRec.innerText = area
    }

    converter2.addEventListener("click", function(){
        const m22 = document.getElementById("m22")
        m22.style.display = "none"
        const meter2 = area/ 1000
        area_rec[1].innerText = meter2 + " m^2"
    })

    const listContainer2  = document.getElementById("list-container2")

    listContainer2.style.display = "flex"

    area_rec.innerText = area


    widthInput.value = ""
    lengthInput.value = ""
})


const areaButton3 = document.getElementById("area-calculate3")

areaButton3.addEventListener("click", function(){
    const  aInput = document.getElementById("A")
    const bInput = document.getElementById("B")
    const visible3 = document.getElementById("visible3")
    const area_elc = document.querySelectorAll(".area-elc")
    
    const aNum = parseFloat(aInput.value)
    const bNum = parseFloat(bInput.value)

    if(aInput.value ==="" || bInput.value ===""){
        if( typeof aInput.value === "string" ||  typeof bInput === "string"){
            return;
        }
        return
    }else if(aInput.value<0 || bInput.value <0){
        aInput.value =""
        bInput.value =""
        return
    }else{

      
        visible3.style.display = "block"
           const converter3 = document.getElementById("meter-converter3")
           const listContainer3 = document.getElementById("list-container3")
           listContainer3.style.display = "flex"
           const area1 = parseFloat(3.1416 * aNum * bNum)

           for( let areaElc of area_elc){
            areaElc.innerText = area1 
           }

           converter3.addEventListener("click", function(){
            const m23 = document.getElementById("m23")
            m23.style.display = "none"
            const meter3 = area1 / 1000
            const fixed = meter3.toFixed(2)
            area_elc[1].innerText = fixed + " m^2"
           })

        

        aInput.value = ""
        bInput.value = ""


    }
})

