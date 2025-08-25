export default {
    'transform-none': {
        transform: 'none',
    },
    'transform-gpu': {
        transform: 'translateZ(0) var(--rotate-x) var(--rotate-y) var(--rotate-z) var(--skew-x) var(--skew-y)',
    },
    'transform-cpu': {
        transform: 'var(--rotate-x) var(--rotate-y) var(--rotate-z) var(--skew-x) var(--skew-y)',
    },
    arbitraryStyles: {
        'transform-(<variable>)': {
            transform: 'var(<variable>)',
        },
        'transform-[<value>]': {
            transform: '<value>',
        },
    },
} satisfies RawStylesType;
