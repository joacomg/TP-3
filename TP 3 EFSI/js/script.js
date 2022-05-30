function buscarPeli() {
    let Tipo = document.getElementById("Tipo").value;
    axios.get("http://www.omdbapi.com", {
        params: {
          apiKey: 'a79a25cd',
          s: document.getElementById("Nombre").value,
          y: document.getElementById("year").value,
          if(Tipo = Pelicula){
            type: "movie"
          },
          if(Tipo = Serie){
            type: "series"
          },
          if(Tipo = Episodio){
            type: "episode"
          }
        }
      })
    .then(response => {
        let resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML = "";
        response.data.Search.forEach(element => {
            const peliCard = `
                <div class="col-md-3">
                    <div class="card">
                    <img src="${element.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.Title}</h5>
                        <p class="card-text">${element.Year}</p>
                    </div>
                    </div>
                </div>
            `;
            resultadosDiv.innerHTML = resultadosDiv.innerHTML + peliCard;
        }); 
    });   
    return false;
}