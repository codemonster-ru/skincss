export default {
    arbitraryStyles: {
        'opacity-<number>': {
            opacity: '<number>%',
        },
        'opacity-(<variable>)': {
            opacity: 'var(<variable>)',
        },
        'opacity-[<value>]': {
            opacity: '<value>',
        },
    },
} satisfies RawStylesType;
