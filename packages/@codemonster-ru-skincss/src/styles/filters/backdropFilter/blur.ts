export default {
    'backdrop-blur-xs': {
        backdropFilter: 'blur(var(--blur-xs))',
    },
    'backdrop-blur-sm': {
        backdropFilter: 'blur(var(--blur-sm))',
    },
    'backdrop-blur-md': {
        backdropFilter: 'blur(var(--blur-md))',
    },
    'backdrop-blur-lg': {
        backdropFilter: 'blur(var(--blur-lg))',
    },
    'backdrop-blur-xl': {
        backdropFilter: 'blur(var(--blur-xl))',
    },
    'backdrop-blur-2xl': {
        backdropFilter: 'blur(var(--blur-2xl))',
    },
    'backdrop-blur-3xl': {
        backdropFilter: 'blur(var(--blur-3xl))',
    },
    'backdrop-blur-none': {
        backdropFilter: '',
    },
    arbitraryStyles: {
        'backdrop-blur-(<variable>)': {
            backdropFilter: 'blur(var(<variable>))',
        },
        'backdrop-blur-[<value>]': {
            backdropFilter: 'blur(<value>)',
        },
    },
} satisfies RawStylesType;
