export default {
    arbitraryValues: {
        'backdrop-hue-rotate-<number>': {
            backdropFilter: 'hue-rotate(<number>deg)',
        },
        '-backdrop-hue-rotate-<number>': {
            backdropFilter: 'hue-rotate(calc(<number>deg * -1))',
        },
        'backdrop-hue-rotate-(<variable>)': {
            backdropFilter: 'hue-rotate(var(<variable>))',
        },
        'backdrop-hue-rotate-[<value>]': {
            backdropFilter: 'hue-rotate(<value>)',
        },
    },
};
