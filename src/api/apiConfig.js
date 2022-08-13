const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apikey: '04ecf4702177b605537b94d129a7048d',
    originImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
