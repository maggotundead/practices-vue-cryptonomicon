const API_KEY = '861dbf05487b194053392cc9b25132dcebd0dd990e66c10ba35c19655c1b7c6a';

// todo refactor to use URLSearchParams
export const loadTickers = tickers =>
    fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${ tickers.join(',') }&api_key=${ API_KEY }`
).then( r => r.json() ).then( rawData => Object.fromEntries(
    Object.entries(rawData).map( ([key, value]) => [key, 1 / value] )
) );

// { a: 1, b: 2 } => [ ['a', 1], ['b', 2] ]