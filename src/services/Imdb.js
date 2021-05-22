const apiKey = "a307e8eddfmsh2a33e3d638138dcp17c32cjsne44e5a3808fc";
const apiHost = "imdb-internet-movie-database-unofficial.p.rapidapi.com";


const searchMovie = (searchTerm)=>{
    fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchTerm}`,
    {
        method:'GET',
        headers:{
            "x-rapidapi-key":apiKey,
            "x-rapidapi-host": apiHost,
            "useQueryString": true
        }
    }
    )
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch(console.log)
        return null;
}

