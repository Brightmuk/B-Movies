import db from ".."


export default class FirebaseService {

    static async getPopularSearches(){
        try{
            const response=db.collection('popular-searches')
            .orderBy('date','desc')
            .limit(3)
    
            const data = await response.get();
            return data.docs.map((doc)=>{
                return doc.data()
            });
        }catch(e){
            console.log(e);
            return []
        }

    }

    static async newPopularSearch(movie){
        try{
            var now = Date.now();
            return db.collection("popular-searches")
            .doc(movie.id).set({
               id:movie.id,
               image:movie.poster,
               title: movie.title,
               date: Date(now)
            }).catch((e)=>{
                console.log(e)
            })
        }catch(e){
            console.log(e)
            
        }
    }

}


