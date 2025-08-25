export default {
    arbitraryStyles: {
        'skew-<number>': {
            transform: 'skewX(<number>deg) skewY(<number>deg)',
        },
        '-skew-<number>': {
            transform: 'skewX(-<number>deg) skewY(-<number>deg)',
        },
        'skew-(<variable>)': {
            transform: 'skewX(var(<variable>)) skewY(var(<variable>))',
        },
        'skew-[<value>]': {
            transform: 'skewX(<value>) skewY(<value>)',
        },
        'skew-x-<number>': {
            transform: 'skewX(<number>deg)',
        },
        '-skew-x-<number>': {
            transform: 'skewX(-<number>deg)',
        },
        'skew-x-(<variable>)': {
            transform: 'skewX(var(<variable>))',
        },
        'skew-x-[<value>]': {
            transform: 'skewX(<value>)',
        },
        'skew-y-<number>': {
            transform: 'skewY(<number>deg)',
        },
        '-skew-y-<number>': {
            transform: 'skewY(-<number>deg)',
        },
        'skew-y-(<variable>)': {
            transform: 'skewY(var(<variable>))',
        },
        'skew-y-[<value>]': {
            transform: 'skewY(<value>)',
        },
    },
} satisfies RawStylesType;
