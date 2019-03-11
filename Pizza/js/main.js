var json = null;
window.onload = function(){
	(async () => {
	  const response = await fetch('./json/pizza.json')
	  json = await response.json()

    let containerHTML = ' ';
    for (let i = 0; i < json.length; i++) {
        containerHTML = containerHTML + `
        <div id="card-${i}" class="card ">
            <div class="card-body">
            <img src="${json[i].src}"></img><br>${json[i].name}<br>${json[i].price}<br>${json[i].description}<br>
            <button type="button" class="btn1 btn-info">Comanda</button>
            </div>
        </div> 
        `;
    } 
    document.getElementById('card_container').innerHTML = containerHTML;    
    // adaugat 
})()
}
	setTimeout(function() {
		console.log(json)
    }, 2000);

    