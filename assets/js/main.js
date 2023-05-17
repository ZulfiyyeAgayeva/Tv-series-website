var film = document.querySelector(".row");
axios.get("https://api.tvmaze.com/shows").then(res =>{
      for(let i=0; i<res.data.length; i++){
        film.innerHTML += ` <div class="card col-2">
        <img src="${res.data[i].image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${res.data[i].name}</h5>
          <p class="card-text">${res.data[i].externals.imdb}</p>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>`
      }  
})
// search hissesini etmeye calisdim ama islemedi kod ((
$(document).ready(function(){
    $("#search").on("keyup", function(){
        var search = $(this).val().toLowerCase();
        $(".card name").filter(function(){
            $(this).toggle($(this).toLowerCase().indexOf(search)>-1);
        });
    });   
})