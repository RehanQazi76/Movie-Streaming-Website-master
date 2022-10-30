function getMovies(t) {
  axios
    .get("https://www.omdbapi.com/?apikey=8d5cb2e&s=" + t)
    .then((t) => {
      let e = t.data.Search,
        i = "";
      $.each(e, (t, e) => {
        i += `\n                <div class="col-md-3">\n                <div class="well text-center">\n                <img src="${e.Poster}">\n                <h5>${e.Title}</h5>\n                <a onclick="movieSelected('${e.imdbID}')" class ="btn btn-danger" href="#">Movie Details</a>\n                </div>\n                </div>\n                `;
      }),
        $("#movies").html(i);
    })
    .catch((t) => {});
}

function movieSelected(t) {
  return (
    sessionStorage.setItem("movieID", t),
    (window.location = "movie-min.html"),
    !1
  );
}

// get movies 
$(document).ready(() => {
  $("#searchForm").on("submit", (t) => {
    getMovies($("#searchText").val()), t.preventDefault();
  });
});
