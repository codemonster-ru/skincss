export default {
    'min-w-3xs': {
        minWidth: '16rem',
    },
    'min-w-2xs': {
        minWidth: '18rem',
    },
    'min-w-xs': {
        minWidth: '20rem',
    },
    'min-w-sm': {
        minWidth: '24rem',
    },
    'min-w-md': {
        minWidth: '28rem',
    },
    'min-w-lg': {
        minWidth: '32rem',
    },
    'min-w-xl': {
        minWidth: '36rem',
    },
    'min-w-2xl': {
        minWidth: '42rem',
    },
    'min-w-3xl': {
        minWidth: '48rem',
    },
    'min-w-4xl': {
        minWidth: '56rem',
    },
    'min-w-5xl': {
        minWidth: '64rem',
    },
    'min-w-6xl': {
        minWidth: '72rem',
    },
    'min-w-7xl': {
        minWidth: '80rem',
    },
    'min-w-auto': {
        minWidth: 'auto',
    },
    'min-w-px': {
        minWidth: '1px',
    },
    'min-w-full': {
        minWidth: '100%',
    },
    'min-w-screen': {
        minWidth: '100vw',
    },
    'min-w-dvw': {
        minWidth: '100dvw',
    },
    'min-w-dvh': {
        minWidth: '100dvh',
    },
    'min-w-lvw': {
        minWidth: '100lvw',
    },
    'min-w-lvh': {
        minWidth: '100lvh',
    },
    'min-w-svw': {
        minWidth: '100svw',
    },
    'min-w-svh': {
        minWidth: '100svh',
    },
    'min-w-min': {
        minWidth: 'min-content',
    },
    'min-w-max': {
        minWidth: 'max-content',
    },
    'min-w-fit': {
        minWidth: 'fit-content',
    },
    arbitraryStyles: {
        'min-w-<number>': {
            minWidth: 'calc(var(--spacing) * <number>)',
        },
        'min-w-<fraction>': {
            minWidth: 'calc(<fraction> * 100%)',
        },
        'min-w-(<variable>)': {
            minWidth: 'var(<variable>)',
        },
        'min-w-[<value>]': {
            minWidth: '<value>',
        },
    },
} satisfies RawStylesType;
