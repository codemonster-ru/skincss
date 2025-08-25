export default {
    arbitraryStyles: {
        'delay-<number>': {
            transitionDelay: '<number>ms',
        },
        'delay-(<variable>)': {
            transitionDelay: 'var(<variable>)',
        },
        'delay-[<value>]': {
            transitionDelay: '<value>',
        },
    },
} satisfies RawStylesType;
