export default {
    arbitraryStyles: {
        'saturate-<number>': {
            filter: 'saturate(<number>%)',
        },
        'saturate-(<variable>)': {
            filter: 'saturate(var(<variable>))',
        },
        'saturate-[<value>]': {
            filter: 'saturate(<value>)',
        },
    },
} satisfies RawStylesType;
