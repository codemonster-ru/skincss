export default {
    grayscale: {
        filter: 'grayscale(100%)',
    },
    arbitraryValues: {
        'grayscale-<number>': {
            filter: 'grayscale(<number>%)',
        },
        'grayscale-(<variable>)': {
            filter: 'grayscale(var(<variable>))',
        },
        'grayscale-[<value>]': {
            filter: 'grayscale(<value>)',
        },
    },
};
