import bootstrap from './src/postcss/bootstrap';
import cssnano from 'cssnano';

// noinspection JSUnusedGlobalSymbols
export default {
    plugins: [
        bootstrap,
        cssnano,
    ],
};