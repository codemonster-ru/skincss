export default {
    'backdrop-sepia': {
        backdropFilter: 'sepia(100%)',
    },
    arbitraryStyles: {
        'backdrop-sepia-<number>': {
            backdropFilter: 'sepia(<number>%)',
        },
        'backdrop-sepia-(<variable>)': {
            backdropFilter: 'sepia(var(<variable>))',
        },
        'backdrop-sepia-[<value>]': {
            backdropFilter: 'sepia(<value>)',
        },
    },
} satisfies RawStylesType;
