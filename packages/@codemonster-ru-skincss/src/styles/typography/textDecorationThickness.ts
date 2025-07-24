export default {
    'decoration-from-font': {
        textDecorationThickness: 'from-font',
    },
    'decoration-auto': {
        textDecorationThickness: 'auto',
    },
    arbitraryValues: {
        'decoration-<number>': {
            textDecorationThickness: '<number>px',
        },
        'decoration-(length:<variable>)': {
            textDecorationThickness: 'var(<variable>)',
        },
        'decoration-[<value>]': {
            textDecorationThickness: '<value>',
        },
    },
};
