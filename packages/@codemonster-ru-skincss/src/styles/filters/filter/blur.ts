export default {
    'blur-xs': {
        filter: 'blur(var(--blur-xs))',
    },
    'blur-sm': {
        filter: 'blur(var(--blur-sm))',
    },
    'blur-md': {
        filter: 'blur(var(--blur-md))',
    },
    'blur-lg': {
        filter: 'blur(var(--blur-lg))',
    },
    'blur-xl': {
        filter: 'blur(var(--blur-xl))',
    },
    'blur-2xl': {
        filter: 'blur(var(--blur-2xl))',
    },
    'blur-3xl': {
        filter: 'blur(var(--blur-3xl))',
    },
    'blur-none': {
        filter: '',
    },
    arbitraryValues: {
        'blur-(<variable>)': {
            filter: 'blur(var(<variable>))',
        },
        'blur-[<value>]': {
            filter: 'blur(<value>)',
        },
    },
};
