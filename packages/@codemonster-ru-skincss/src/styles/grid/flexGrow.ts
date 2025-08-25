export default {
    grow: {
        flexGrow: '1',
    },
    arbitraryStyles: {
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
} satisfies RawStylesType;
