




function getImageId(){
    let bulkImages = document.querySelector(".bulkImages")
    bulkImages.addEventListener("click", (event)=>{

            let mainImageSrc = event.target.src
            // let mainImageAlt = event.target.alt
            let setAltTag = "this is alt for the image"
            console.log(mainImageSrc, "mainImageSrc")
            // console.log(mainImageAlt, "mainImageAlt")
            
            localStorage.setItem("mainImage", mainImageSrc)
            let mainImagePathFromStorage = localStorage.getItem("mainImage")
            
            let mainImage = document.querySelector(".mainImage")
            
            mainImage.innerHTML= '';

            mainImage.insertAdjacentHTML("beforeend",`
            <img src="${mainImagePathFromStorage}" alt="${setAltTag}">
            `)
            
            exportImage(mainImagePathFromStorage,setAltTag)
        })

}
getImageId()

// function fetchMainImage(){
//     let mainImageSrc = localStorage.getItem("mainImage")
//     let mainImage = document.querySelector(".mainImage")
//     console.log("mainImageSrc",mainImageSrc)
//     mainImage.insertAdjacentHTML("beforeend",`
//         <img src="${mainImageSrc}" alt="">
//     `)
    
// }
// fetchMainImage()

function exportImage(mainImagePathFromStorage,setAltTag){
    let buttonDiv = document.querySelector(".buttonDiv")
    let imageToDownload = `<img src="${mainImagePathFromStorage}" alt="${setAltTag}">`
    console.log(buttonDiv);
    buttonDiv.innerHTML = ""
    buttonDiv.insertAdjacentHTML("beforeend",`
        <a href="${imageToDownload}" download>         

            <button>Export</button>
        </a>
    `)
    console.log(mainImagePathFromStorage,"mainImagePathFromStorage",setAltTag,"setAltTag")
}
exportImage()

let okImage = document.querySelector("img")
console.log(okImage)