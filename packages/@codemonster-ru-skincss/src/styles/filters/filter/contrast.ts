export default {
    arbitraryStyles: {
        'contrast-<number>': {
            filter: 'contrast(<number>%)',
        },
        'contrast-(<variable>)': {
            filter: 'contrast(var(<variable>))',
        },
        'contrast-[<value>]': {
            filter: 'contrast(<value>)',
        },
    },
} satisfies RawStylesType;
