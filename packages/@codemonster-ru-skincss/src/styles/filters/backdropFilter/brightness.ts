export default {
    arbitraryValues: {
        'backdrop-brightness-<number>': {
            backdropFilter: 'brightness(<number>%)',
        },
        'backdrop-brightness-(<variable>)': {
            backdropFilter: 'brightness(var(<variable>))',
        },
        'backdrop-brightness-[<value>]': {
            backdropFilter: 'brightness(<value>)',
        },
    },
};
