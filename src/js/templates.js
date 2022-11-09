import {convertDate, generateImgUrl, generateTitle} from "./helpers";


export const renderMovieCards = (movies, path) => `
        <div class="container">
            <h2 class="section__title text-center">${generateTitle(path)}</h2>
            <div class="cards flex">
                 ${movies.map(movie => renderMovieCard(movie)).join('')}
            </div>
        </div>    
`;

export const renderMovieCard = ({id, vote_average, title, poster_path, release_date}) => {
    return `
        <div class="card__main">
            <a href="#movieId=${id}"><img class="d-block" src="${generateImgUrl('w200', poster_path)}" alt="${title}"></a>
            <div class="card__main_rate text-center"> 
                <span> Rate</>
                <p>${Math.round(vote_average * 10)}%</p>
            </div>
            <h5 class="card__main_title text-center"><a> <a href="#movieId=${id}">${title}</a></a> </h5>
            <p class="card__main_date text-center">${convertDate(release_date)}</p>
        </div>
`
}

export const renderDetails = ({poster_path, budget, title, overview, release_date}) => {
    return `
         <section class="details"> 
            <div class="container">
                 <h2 class="text-center">${title}</h2>       
              <div class="details-wrapper flex">
                <div class=" details-poster"><img class="d-block" src="${generateImgUrl('w300', poster_path)}" alt="${title}"></div>
                <div class="details-overview vertical-center">
                    <p class="overview-text">${overview}</p>
                    <p class="overview-release">Release : ${convertDate(release_date)}</p>
                    <p class="overview-budget">Film box office : ${budget} dollars</p>
                </div> 
              </div> 
            </div>
         </section>       
        `
}

export const renderError = ({status_code, status_message}) => {
    return `
         <section class="error"> 
            <div class="container text-center height-55">
                 <h2>Error : ${status_code}</h2>       
                 <p >${status_message}</p>
            </div> 
         </section>       
        `
}
export const renderSearchRequestCard = ({title, poster_path, overview,id}) => {
    return `
           <div class="search_request-item w-100 ">
              <h3 class="text-center"><a href="#movieId=${id}">${title}</a></h3>
              <div class="overview__banner-wrapper flex align-center justify-center">
                    <div class="search_request-banner"> <a href="#movieId=${id}"><img src="${generateImgUrl('w200', poster_path)}" alt="${title}"></a></div>
                    <div class="search_request-overview"><p>${overview}</p></div>
              </div>
              
           </div>`
}
export const renderSearchRequest = (cards) => `
        <section class="search_request">
            <div class="container">
                <h2 class="text-center">Results for your request</h2>
            </div>
        <div class="search_request-wrapper ">
                    ${cards.map(card => renderSearchRequestCard(card)).join('')}
        </div>
        </section> 
`;
