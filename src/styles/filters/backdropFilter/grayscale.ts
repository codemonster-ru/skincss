export default {
    'backdrop-grayscale': {
        backdropFilter: 'grayscale(100%)',
    },
    arbitraryValues: {
        'backdrop-grayscale-<number>': {
            backdropFilter: 'grayscale(<number>%)',
        },
        'backdrop-grayscale-(<variable>)': {
            backdropFilter: 'grayscale(var(<variable>))',
        },
        'backdrop-grayscale-[<value>]': {
            backdropFilter: 'grayscale(<value>)',
        },
    },
};
