import {useState,useEffect} from 'react'; 

const apiKey = "a307e8eddfmsh2a33e3d638138dcp17c32cjsne44e5a3808fc";
const apiHost = "imdb-internet-movie-database-unofficial.p.rapidapi.com";


const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending,setIsPending] = useState(true);

    useEffect(()=>{

        const abortCtrl = new AbortController();

        setTimeout(() => {
            fetch(url,
                {
                    signal:abortCtrl.signal,
                    method:'GET',
                    headers:{
                        "x-rapidapi-key":apiKey,
                        "x-rapidapi-host": apiHost,
                        "useQueryString": true
                    }
                 }
                )
            .then(res=>{
                if(!res.ok){
                    throw Error("Unable to fetch data")
                }
                return res.json()
                .then(data=>{
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err=>{
                    if(err.name==="AbortError"){
                        console.log('Aborted fetch');
                    }else{
                        setIsPending(false);
                        setError(err.message);
                    }
                })
            })
        }, 1000);
        return () =>abortCtrl.abort();
    },[url]);

    return {data, isPending, error}
};



export default useFetch;