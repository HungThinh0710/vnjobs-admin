// const DOMAIN = 'https://api.vnjob.work'; // productions
const DOMAIN = 'http://127.0.0.1:8000';
const ENDPOINT = DOMAIN + '/api/admin/v1';
export const LIST_ORGANIZATION = ENDPOINT + '/organizations';
export const LIST_MAJOR = ENDPOINT + '/majors';
export const LIST_JOBSEEKER = ENDPOINT + '/job-seekers';
export const LIST_RECRUITMENTNEWS = ENDPOINT + '/recruitment-news';
export const LIST_USER = ENDPOINT + '/user';

export const COUNT_ORGANIZATION = LIST_ORGANIZATION + '-count';
export const COUNT_MAJOR = LIST_MAJOR + '-count';
export const COUNT_JOBSEEKER = LIST_JOBSEEKER + '-count';
export const COUNT_RECRUITMENTNEWS = LIST_RECRUITMENTNEWS + '-count';

export const CHECK_VALID_TOKEN = ENDPOINT + '/token';
export const LOGIN = ENDPOINT + '/auth/login';
export const LOGOUT = ENDPOINT +  '/logout';