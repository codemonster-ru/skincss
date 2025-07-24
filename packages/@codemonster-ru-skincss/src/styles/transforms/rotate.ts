export default {
    'rotate-none': {
        rotate: 'none',
    },
    arbitraryValues: {
        'rotate-<number>': {
            rotate: '<number>deg',
        },
        '-rotate-<number>': {
            rotate: 'calc(<number>deg * -1)',
        },
        'rotate-(<variable>)': {
            rotate: 'var(<variable>)',
        },
        'rotate-[<value>]': {
            rotate: '<value>',
        },
        'rotate-x-<number>': {
            transform: 'rotateX(<number>deg) var(--rotate-y)',
        },
        '-rotate-x-<number>': {
            transform: 'rotateX(-<number>deg) var(--rotate-y)',
        },
        'rotate-x-(<variable>)': {
            transform: 'rotateX(var(<variable>)) var(--rotate-y)',
        },
        'rotate-x-[<value>]': {
            transform: 'rotateX(<value>) var(--rotate-y)',
        },
        'rotate-y-<number>': {
            transform: 'var(--rotate-x) rotateY(<number>deg)',
        },
        '-rotate-y-<number>': {
            transform: 'var(--rotate-x) rotateY(-<number>deg)',
        },
        'rotate-y-(<variable>)': {
            transform: 'var(--rotate-x) rotateY(var(<variable>))',
        },
        'rotate-y-[<value>]': {
            transform: 'var(--rotate-x) rotateY(<value>)',
        },
        'rotate-z-<number>': {
            transform: 'var(--rotate-x) var(--rotate-y) rotateZ(<number>deg)',
        },
        '-rotate-z-<number>': {
            transform: 'var(--rotate-x) var(--rotate-y) rotateZ(-<number>deg)',
        },
        'rotate-z-(<variable>)': {
            transform: 'var(--rotate-x) var(--rotate-y) rotateZ(var(<variable>))',
        },
        'rotate-z-[<value>]': {
            transform: 'var(--rotate-x) var(--rotate-y) rotateZ(<value>)',
        },
    },
};
