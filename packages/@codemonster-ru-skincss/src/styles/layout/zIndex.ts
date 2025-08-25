export default {
    'z-auto': {
        zIndex: 'auto',
    },
    arbitraryStyles: {
        'z-<number>': {
            zIndex: '<number>',
        },
        'z-(<variable>)': {
            zIndex: 'var(<variable>)',
        },
        'z-[<value>]': {
            zIndex: '<value>',
        },
    },
} satisfies RawStylesType;
