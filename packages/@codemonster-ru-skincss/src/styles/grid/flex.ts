export default {
    'flex-auto': {
        flex: '1 1 auto',
    },
    'flex-initial': {
        flex: '0 1 auto',
    },
    'flex-none': {
        flex: 'none',
    },
    arbitraryStyles: {
        'flex-<number>': {
            flex: '<number>',
        },
        'flex-<fraction>': {
            flex: 'calc(<fraction> * 100%)',
        },
        'flex-(<variable>)': {
            flex: 'var(<variable>)',
        },
        'flex-[<value>]': {
            flex: '<value>',
        },
    },
} satisfies RawStylesType;
