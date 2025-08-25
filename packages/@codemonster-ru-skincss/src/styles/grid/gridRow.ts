export default {
    'row-span-full': {
        gridRow: '1 / -1',
    },
    'row-start-auto': {
        gridRowStart: 'auto',
    },
    'row-end-auto': {
        gridRowEnd: 'auto',
    },
    'row-auto': {
        gridRow: 'auto',
    },
    arbitraryStyles: {
        'row-span-<number>': {
            gridRow: 'span <number> / span <number>',
        },
        'row-span-(<variable>)': {
            gridRow: 'span var(<variable>) / span var(<variable>)',
        },
        'row-span-[<value>]': {
            gridRow: 'span <value> / span <value>',
        },
        'row-start-<number>': {
            gridRowStart: '<number>',
        },
        '-row-start-<number>': {
            gridRowStart: 'calc(<number> * -1)',
        },
        'row-start-(<variable>)': {
            gridRowStart: 'var(<variable>)',
        },
        'row-start-[<value>]': {
            gridRowStart: '<value>',
        },
        'row-end-<number>': {
            gridRowEnd: '<number>',
        },
        '-row-end-<number>': {
            gridRowEnd: 'calc(<number> * -1)',
        },
        'row-end-(<variable>)': {
            gridRowEnd: 'var(<variable>)',
        },
        'row-end-[<value>]': {
            gridRowEnd: '<value>',
        },
        'row-<number>': {
            gridRow: '<number>',
        },
        '-row-<number>': {
            gridRow: 'calc(<number> * -1)',
        },
        'row-(<variable>)': {
            gridRow: 'var(<variable>)',
        },
        'row-[<value>]': {
            gridRow: '<value>',
        },
    },
} satisfies RawStylesType;
