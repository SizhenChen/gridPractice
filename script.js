
fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <div class="item">
            <div>${item.name}</div>
            <div>${item.article_number}</div>
            <div> <img src='${item.pictures}'> </div>
            <div>${item.price}</div>
            <div>${item.category}</div>
         </div>
      `;
   }
 
   placeholder.innerHTML = out;
});