export default {
    'will-change-auto': {
        willChange: 'auto',
    },
    'will-change-scroll': {
        willChange: 'scroll-position',
    },
    'will-change-contents': {
        willChange: 'contents',
    },
    'will-change-transform': {
        willChange: 'transform',
    },
    arbitraryValues: {
        'will-change-<variable>': {
            willChange: 'var(<variable>)',
        },
        'will-change-[<value>]': {
            willChange: '<value>',
        },
    },
};
