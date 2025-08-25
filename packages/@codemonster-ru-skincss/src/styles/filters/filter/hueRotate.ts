export default {
    arbitraryStyles: {
        'hue-rotate-<number>': {
            filter: 'hue-rotate(<number>deg)',
        },
        '-hue-rotate-<number>': {
            filter: 'hue-rotate(calc(<number>deg * -1))',
        },
        'hue-rotate-(<variable>)': {
            filter: 'hue-rotate(var(<variable>))',
        },
        'hue-rotate-[<value>]': {
            filter: 'hue-rotate(<value>)',
        },
    },
} satisfies RawStylesType;
