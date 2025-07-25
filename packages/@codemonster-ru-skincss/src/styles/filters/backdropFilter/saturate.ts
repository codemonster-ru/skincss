export default {
    arbitraryValues: {
        'backdrop-saturate-<number>': {
            backdropFilter: 'saturate(<number>%)',
        },
        'backdrop-saturate-(<variable>)': {
            backdropFilter: 'saturate(var(<variable>))',
        },
        'backdrop-saturate-[<value>]': {
            backdropFilter: 'saturate(<value>)',
        },
    },
};
