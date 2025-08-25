export default {
    'duration-initial': {
        transitionDuration: 'initial',
    },
    arbitraryStyles: {
        'duration-<number>': {
            transitionDuration: '<number>ms',
        },
        'duration-(<variable>)': {
            transitionDuration: 'var(<variable>)',
        },
        'duration-[<value>]': {
            transitionDuration: '<value>',
        },
    },
} satisfies RawStylesType;
