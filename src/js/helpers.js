import {API_KEY, BASIC_URL, IMG_URL} from './constants'

export const getUrlMovies = path => `${BASIC_URL}${path}?api_key=${API_KEY}`;
export const generateImgUrl = path => `${IMG_URL}${path}`;
export const convertDate = date => new Date(date).toDateString()
export const generateTitle = title=> (title[0].toUpperCase()+ title.slice(1)).replaceAll('_',' ')
