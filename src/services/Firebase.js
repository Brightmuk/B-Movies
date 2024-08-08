import db from ".."
import { query, collection, getDocs, orderBy, limit } from 'firebase/firestore/lite';

export default class FirebaseService {

    static async getPopularSearches() {
        try {

            const movieQuery = query(collection(db, 'popular-searches'), orderBy('date', 'desc'), limit(3))
            const snapshot = getDocs(movieQuery)
            const list = (await snapshot).docs.map(doc => doc.data());

            return list;

        } catch (e) {
            console.log(e);
            return []
        }

    }

    static async newPopularSearch(movie) {
        try {
            var now = Date.now();
            return db.collection("popular-searches")
                .doc(movie.id).set({
                    id: movie.id,
                    image: movie.poster,
                    title: movie.title,
                    date: Date(now)
                }).catch((e) => {
                    console.log(e)
                })
        } catch (e) {
            console.log(e)

        }
    }

}


