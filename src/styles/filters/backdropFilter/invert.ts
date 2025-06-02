export default {
    'backdrop-invert': {
        backdropFilter: 'invert(100%)',
    },
    arbitraryValues: {
        'backdrop-invert-<number>': {
            backdropFilter: 'invert(<number>%)',
        },
        'backdrop-invert-(<variable>)': {
            backdropFilter: 'invert(var(<variable>))',
        },
        'backdrop-invert-[<value>]': {
            backdropFilter: 'invert(<value>)',
        },
    },
};
