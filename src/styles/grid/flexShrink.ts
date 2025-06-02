export default {
    shrink: {
        flexShrink: '1',
    },
    arbitraryValues: {
        'shrink-<number>': {
            flexShrink: '<number>',
        },
        'shrink-(<variable>)': {
            flexShrink: 'var(<variable>)',
        },
        'shrink-[<value>]': {
            flexShrink: '<value>',
        },
    },
};
