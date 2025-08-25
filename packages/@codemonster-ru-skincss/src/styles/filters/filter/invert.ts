export default {
    invert: {
        filter: 'invert(100%)',
    },
    arbitraryStyles: {
        'invert-<number>': {
            filter: 'invert(<number>%)',
        },
        'invert-(<variable>)': {
            filter: 'invert(var(<variable>))',
        },
        'invert-[<value>]': {
            filter: 'invert(<value>)',
        },
    },
} satisfies RawStylesType;
