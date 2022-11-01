import {getUrlMovies} from "./helpers";
import {renderMovieCards} from "./templates";
const root =document.querySelector('#root')

getMovies('popular')
getMovies('top_rated')
getMovies('upcoming')



function getMovies (path){
    fetch(getUrlMovies(path))
        .then(response => response.json())
        .then(data => {
            root.insertAdjacentHTML('beforeend',renderMovieCards(data.results,path))
        })
}
