var Productos = [];

function TodosProductos(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let Productoss = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + Producto.imgSrc + `" alt="` + Producto.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ Producto.name +`</h4>
                        <small class="text-muted">` + Producto.soldCount + ` artículos</small>
                    </div>
                    <p>`+ Producto.description +`</p>
                </div>
            </div>
        </div>
        `

        document.getElementById("Lista-Productos").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            Productos= resultObj.data;
           
          TodosProductos(Productos);
        }
    });
});