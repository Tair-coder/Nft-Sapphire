const dropsItems = document.querySelectorAll('.drops__item')
const artDrops = document.querySelector('.drops__productsArt')
      dropsProductsOthers = document.querySelector('.drops__products__others')
dropsItems.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        addActiveDrop(item)
    })
})

function addActiveDrop(item){
    dropsItems.forEach((items)=>{
        items.classList.remove('active')
    })
    item.classList.add('active')
    switch (item.classList.contains('art')) {
        case true:
        artDrops.style.display = 'grid'
        dropsProductsOthers.style.display = 'none'
        break;
    
        default:
        artDrops.style.display = 'none'
        dropsProductsOthers.style.display = 'flex'
        break;
    }
    // if(item.classList.contains('art')){
    //     artDrops.style.display = 'grid'
    //     dropsProductsOthers.style.display = 'none'
    // }else{
    //     artDrops.style.display = 'none'
    //     dropsProductsOthers.style.display = 'flex'
    // }
}