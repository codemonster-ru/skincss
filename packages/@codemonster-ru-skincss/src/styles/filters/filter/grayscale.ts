export default {
    grayscale: {
        filter: 'grayscale(100%)',
    },
    arbitraryStyles: {
        'grayscale-<number>': {
            filter: 'grayscale(<number>%)',
        },
        'grayscale-(<variable>)': {
            filter: 'grayscale(var(<variable>))',
        },
        'grayscale-[<value>]': {
            filter: 'grayscale(<value>)',
        },
    },
} satisfies RawStylesType;
