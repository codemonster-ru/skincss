export default {
    shrink: {
        flexShrink: '1',
    },
    arbitraryStyles: {
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
} satisfies RawStylesType;
