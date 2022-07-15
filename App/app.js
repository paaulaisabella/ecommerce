let cart = [];

console.log(items)

let showList = () => {
    items.forEach(item => {
        let name = item.name;
        let description = item.description;
        let price = item.price;
        let stock = item.stock;
        let img = item.picUrl;
        let id = item.categoryID

        /* CSS FOR THIS IS ON THE CATALOGUE PAGE */
        $(".product-view").append(`<section class="item">
        <img src= "${img}" class= "item-img">
        <h3 class = "item-name">${name} $${price}</h3>
        <button class= "details">Ver detalles>></button>
        <div class= "desc ${id}">
        <p class= "item-description">${description}</p>
        <h5 class = "item-stock">Stock: ${stock}unit(s)</h5>
        <button>Agregar al carrito</button>
        </div>
        </section>`)


        $(".details").on("click", function (e) { 
            $(".desc").toggle();
            
        });

    });
}

showList()
