import {convertDate, generateImgUrl,generateTitle} from "./helpers";

export const renderMovieCards = (movies,path) => `
        <div class="container">
            <h2 class="section__title text-center">${generateTitle(path)}</h2>
            <div class="cards flex">
                 ${movies.map(movie => renderMovieCard(movie)).join('')}
            </div>
        </div>    
`;
export function renderMovieCard({vote_average,title, poster_path, release_date}) {
    return `
        <div class="card__main">
            <img class="d-block" src="${generateImgUrl(poster_path)}" alt="${title}">
            <div class="card__main_rate text-center"> 
                <span> Rate</>
                <p>${Math.round(vote_average * 10)}%</p>
            </div>
            <h5 class="card__main_title text-center">${title}</h5>
            <p class="card__main_date text-center">${convertDate(release_date)}</p>
        </div>
`
}