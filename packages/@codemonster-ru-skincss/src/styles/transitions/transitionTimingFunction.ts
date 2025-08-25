export default {
    'ease-linear': {
        transitionTimingFunction: 'linear',
    },
    'ease-in': {
        transitionTimingFunction: 'var(--ease-in)',
    },
    'ease-out': {
        transitionTimingFunction: 'var(--ease-out)',
    },
    'ease-in-out': {
        transitionTimingFunction: 'var(--ease-in-out)',
    },
    'ease-initial': {
        transitionTimingFunction: 'initial',
    },
    arbitraryStyles: {
        'ease-(<variable>)': {
            transitionTimingFunction: 'var(<variable>)',
        },
        'ease-[<value>]': {
            transitionTimingFunction: '<value>',
        },
    },
} satisfies RawStylesType;
