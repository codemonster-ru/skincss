export default {
    'order-first': {
        order: 'calc(-infinity)',
    },
    'order-last': {
        order: 'calc(infinity)',
    },
    'order-none': {
        order: '0',
    },
    arbitraryStyles: {
        'order-<number>': {
            order: '<number>',
        },
        '-order-<number>': {
            order: 'calc(<number> * -1)',
        },
        'order-(<variable>)': {
            order: 'var(<variable>)',
        },
        'order-[<value>]': {
            order: '<value>',
        },
    },
} satisfies RawStylesType;
