import {getUrlMovies, getUrlSearch} from "./helpers";
import {renderMovieCards, renderDetails, renderError, renderSearchRequest} from "./templates";

const root = document.querySelector('#root')
const formSearch = document.querySelector('#header__search_form')
const searchInput = formSearch.querySelector('#header__search_input')

checkUrl()

formSearch.addEventListener('submit', e => {
    e.preventDefault()
    location.hash = `query=${searchInput.value}`
    formSearch.reset()
})
window.addEventListener('hashchange', e => {
    checkUrl()

})


function checkUrl() {
    const [hash, movieId] = location.hash.split('=')
    if (hash === "#movieId") {
        root.innerHTML = ""
        getDetails(movieId)
    } else if (hash === "#query") {
        getSearchResponse(movieId)
    } else {
        root.innerHTML = ""
        getMovies('popular')
        getMovies('top_rated')
        getMovies('upcoming')
    }
}

function getMovies(path) {
    fetch(getUrlMovies(path))
        .then(response => response.json())
        .then(data => {
            if (data.success === false) {
                root.innerHTML = renderError(data)
            } else {
                root.insertAdjacentHTML('beforeend', renderMovieCards(data.results, path))
            }

        })
}

function getDetails(path) {
    fetch(getUrlMovies(path)).then(response => response.json()).then(data => {
        if (data.success === false) {
            root.innerHTML = renderError(data)
        } else {
            root.innerHTML = ""
            root.insertAdjacentHTML('beforeend', renderDetails(data))
        }
    })
}
function  getSearchResponse(path){
       fetch(getUrlSearch(path)).then(res=>res.json()).then(data=> {
           if (data.success === false) {
               root.innerHTML = renderError(data)
           } else{
               root.innerHTML = ""
               root.insertAdjacentHTML('beforeend', renderSearchRequest(data.results))
           }
           console.log(data)
       })
}