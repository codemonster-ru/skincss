export default {
    grow: {
        flexGrow: '1',
    },
    arbitraryValues: {
        'grow-<number>': {
            flexGrow: '<number>',
        },
        'grow-(<variable>)': {
            flexGrow: 'var(<variable>)',
        },
        'grow-[<value>]': {
            flexGrow: '<value>',
        },
    },
};
