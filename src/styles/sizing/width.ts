import height from './height';

export default {
    'w-3xs': {
        width: '16rem',
    },
    'w-2xs': {
        width: '18rem',
    },
    'w-xs': {
        width: '20rem',
    },
    'w-sm': {
        width: '24rem',
    },
    'w-md': {
        width: '28rem',
    },
    'w-lg': {
        width: '32rem',
    },
    'w-xl': {
        width: '36rem',
    },
    'w-2xl': {
        width: '42rem',
    },
    'w-3xl': {
        width: '48rem',
    },
    'w-4xl': {
        width: '56rem',
    },
    'w-5xl': {
        width: '64rem',
    },
    'w-6xl': {
        width: '72rem',
    },
    'w-7xl': {
        width: '80rem',
    },
    'w-auto': {
        width: 'auto',
    },
    'w-px': {
        width: '1px',
    },
    'w-full': {
        width: '100%',
    },
    'w-screen': {
        width: '100vw',
    },
    'w-dvw': {
        width: '100dvw',
    },
    'w-dvh': {
        width: '100dvh',
    },
    'w-lvw': {
        width: '100lvw',
    },
    'w-lvh': {
        width: '100lvh',
    },
    'w-svw': {
        width: '100svw',
    },
    'w-svh': {
        width: '100svh',
    },
    'w-min': {
        width: 'min-content',
    },
    'w-max': {
        width: 'max-content',
    },
    'w-fit': {
        width: 'fit-content',
    },
    'size-auto': {
        width: 'auto',
        height: 'auto',
    },
    'size-px': {
        width: '1px',
        height: '1px',
    },
    'size-full': {
        width: '100%',
        height: '100%',
    },
    'size-dvw': {
        width: '100dvw',
        height: '100dvw',
    },
    'size-dvh': {
        width: '100dvh',
        height: '100dvh',
    },
    'size-lvw': {
        width: '100lvw',
        height: '100lvw',
    },
    'size-lvh': {
        width: '100lvh',
        height: '100lvh',
    },
    'size-svw': {
        width: '100svw',
        height: '100svw',
    },
    'size-svh': {
        width: '100svh',
        height: '100svh',
    },
    'size-min': {
        width: 'min-content',
        height: 'min-content',
    },
    'size-max': {
        width: 'max-content',
        height: 'max-content',
    },
    'size-fit': {
        width: 'fit-content',
        height: 'fit-content',
    },
    arbitraryValues: {
        'w-<number>': {
            width: 'calc(var(--spacing) * <number>)',
        },
        'w-<fraction>': {
            width: 'calc(<fraction> * 100%)',
        },
        'w-(<variable>)': {
            width: 'var(<variable>)',
        },
        'w-[<value>]': {
            width: '<value>',
        },
        'size-<number>': {
            width: 'calc(var(--spacing) * <number>)',
            height: 'calc(var(--spacing) * <number>)',
        },
        'size-<fraction>': {
            width: 'calc(<fraction> * 100%)',
            height: 'calc(<fraction> * 100%)',
        },
        'size-(<variable>)': {
            width: 'var(<variable>)',
        },
        'size-[<value>]': {
            width: '<value>',
        },
    },
};
