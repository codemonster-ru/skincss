export default {
    arbitraryValues: {
        'brightness-<number>': {
            filter: 'brightness(<number>%)',
        },
        'brightness-(<variable>)': {
            filter: 'brightness(var(<variable>))',
        },
        'brightness-[<value>]': {
            filter: 'brightness(<value>)',
        },
    },
};
