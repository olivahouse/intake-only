import { parse } from 'query-string';

const MEMBER_ID = parse(window.location.search).id;

export const getSrc = () =>
  [
    'https://oliva.surveysparrow.com/widget',
    '/intake--english/tt-5031b3',
    `?id=${MEMBER_ID}`,
  ].join('');
