export default {
    arbitraryValues: {
        'backdrop-opacity-<number>': {
            backdropFilter: 'opacity(<number>%)',
        },
        'backdrop-opacity-(<variable>)': {
            backdropFilter: 'opacity(var(<variable>))',
        },
        'backdrop-opacity-[<value>]': {
            backdropFilter: 'opacity(<value>)',
        },
    },
};
