const searchMovie = (searchTerm)=>{
    fetch(`https://imdb8.p.rapidapi.com/v2/search?searchTerm=${searchTerm}`,
    {
        method:'GET',
        headers:{
            "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY,
            "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
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

