export default {
    'backdrop-grayscale': {
        backdropFilter: 'grayscale(100%)',
    },
    arbitraryStyles: {
        'backdrop-grayscale-<number>': {
            backdropFilter: 'grayscale(<number>%)',
        },
        'backdrop-grayscale-(<variable>)': {
            backdropFilter: 'grayscale(var(<variable>))',
        },
        'backdrop-grayscale-[<value>]': {
            backdropFilter: 'grayscale(<value>)',
        },
    },
} satisfies RawStylesType;
