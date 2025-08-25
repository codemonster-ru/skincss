export default {
    arbitraryStyles: {
        'backdrop-contrast-<number>': {
            backdropFilter: 'contrast(<number>%)',
        },
        'backdrop-contrast-(<variable>)': {
            backdropFilter: 'contrast(var(<variable>))',
        },
        'backdrop-contrast-[<value>]': {
            backdropFilter: 'contrast(<value>)',
        },
    },
} satisfies RawStylesType;
