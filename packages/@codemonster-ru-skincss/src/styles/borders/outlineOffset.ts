export default {
    arbitraryValues: {
        'outline-offset-<number>': {
            outlineOffset: '<number>px',
        },
        '-outline-offset-<number>': {
            outlineOffset: 'calc(<number>px * -1)',
        },
        'outline-offset-(<variable>)': {
            outlineOffset: 'var(<variable>)',
        },
        'outline-offset-[<value>]': {
            outlineOffset: '<value>',
        },
    },
};
