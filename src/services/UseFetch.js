import {useState,useEffect} from 'react'; 
import FirebaseService from './Firebase';


const useFetch = (url, firebaseFetch=false)=>{

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(()=>{
      
        const abortCtrl = new AbortController();
        if(firebaseFetch){
         
            FirebaseService.getPopularSearches()
            .then((data)=>{
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
        }else{
           
            fetch(url,
                {
                    signal:abortCtrl.signal,
                    method:'GET',
                    headers:{
                        "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY,
                        "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
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
        }

        return () =>abortCtrl.abort();
    },[url,firebaseFetch]);

    return {data, isPending, error}
};



export default useFetch;