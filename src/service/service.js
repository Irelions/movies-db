export default class Service {
    getData(pageNumber) {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmJjYmY5OGUyYmZlNDIwZjUzMDlkNjI1ZDk5NGFlNCIsIm5iZiI6MTcyOTE2NjM1MS4wMjA4ODgsInN1YiI6IjY3MTBhMTAxMWY5ZDBlZTRiOGM5ZDE0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mvcL7RGV-PRA0xVtTVUS2ABxu-N7y9IcIgkmyBgkNWU';
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log('Error: ', err.message());
            });
    }
};


