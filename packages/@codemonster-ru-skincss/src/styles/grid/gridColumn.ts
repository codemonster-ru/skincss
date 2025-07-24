export default {
    'col-span-full': {
        gridColumn: '1 / -1',
    },
    'col-start-auto': {
        gridColumnStart: 'auto',
    },
    'col-end-auto': {
        gridColumnEnd: 'auto',
    },
    'col-auto': {
        gridColumn: 'auto',
    },
    arbitraryValues: {
        'col-span-<number>': {
            gridColumn: 'span <number> / span <number>',
        },
        'col-span-(<variable>)': {
            gridColumn: 'span var(<variable>) / span var(<variable>)',
        },
        'col-span-[<value>]': {
            gridColumn: 'span <value> / span <value>',
        },
        'col-start-<number>': {
            gridColumnStart: '<number>',
        },
        '-col-start-<number>': {
            gridColumnStart: 'calc(<number> * -1)',
        },
        'col-start-(<variable>)': {
            gridColumnStart: 'var(<variable>)',
        },
        'col-start-[<value>]': {
            gridColumnStart: '<value>',
        },
        'col-end-<number>': {
            gridColumnStart: '<number>',
        },
        '-col-end-<number>': {
            gridColumnStart: 'calc(<number> * -1)',
        },
        'col-end-(<variable>)': {
            gridColumnStart: 'var(<variable>)',
        },
        'col-end-[<value>]': {
            gridColumnStart: '<value>',
        },
        'col-<number>': {
            gridColumnStart: '<number>',
        },
        '-col-<number>': {
            gridColumnStart: 'calc(<number> * -1)',
        },
        'col-(<variable>)': {
            gridColumnStart: 'var(<variable>)',
        },
        'col-[<value>]': {
            gridColumnStart: '<value>',
        },
    },
};
