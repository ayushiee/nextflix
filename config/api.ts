import * as env from 'env-var';

interface APIConfig {
  api: {
    base: string;
    key: string;
  };
}

export const config: APIConfig {
    api: {
        base: "https://api.themoviedb.org/3",
        key: env.get('NEXT_APP_TMDB_API_KEY').required().asString(),
    },
};