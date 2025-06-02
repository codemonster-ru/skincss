export default {
    'duration-initial': {
        transitionDuration: 'initial',
    },
    arbitraryValues: {
        'duration-<number>': {
            transitionDuration: '<number>ms',
        },
        'duration-(<variable>)': {
            transitionDuration: 'var(<variable>)',
        },
        'duration-[<value>]': {
            transitionDuration: '<value>',
        },
    },
};
