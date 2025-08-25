export default {
    sepia: {
        filter: 'sepia(100%)',
    },
    arbitraryStyles: {
        'sepia-<number>': {
            filter: 'sepia(<number>%)',
        },
        'sepia-(<variable>)': {
            filter: 'sepia(var(<variable>))',
        },
        'sepia-[<value>]': {
            filter: 'sepia(<value>)',
        },
    },
} satisfies RawStylesType;
