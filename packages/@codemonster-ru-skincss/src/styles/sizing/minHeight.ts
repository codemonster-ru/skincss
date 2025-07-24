export default {
    'min-h-auto': {
        minHeight: 'auto',
    },
    'min-h-px': {
        minHeight: '1px',
    },
    'min-h-full': {
        minHeight: '100%',
    },
    'min-h-screen': {
        minHeight: '100vw',
    },
    'min-h-dvw': {
        minHeight: '100dvw',
    },
    'min-h-dvh': {
        minHeight: '100dvh',
    },
    'min-h-lvw': {
        minHeight: '100lvw',
    },
    'min-h-lvh': {
        minHeight: '100lvh',
    },
    'min-h-svw': {
        minHeight: '100svw',
    },
    'min-h-svh': {
        minHeight: '100svh',
    },
    'min-h-min': {
        minHeight: 'min-content',
    },
    'min-h-max': {
        minHeight: 'max-content',
    },
    'min-h-fit': {
        minHeight: 'fit-content',
    },
    arbitraryValues: {
        'min-h-<number>': {
            minHeight: 'calc(var(--spacing) * <number>)',
        },
        'min-h-<fraction>': {
            minHeight: 'calc(<fraction> * 100%)',
        },
        'min-h-(<variable>)': {
            minHeight: 'var(<variable>)',
        },
        'min-h-[<value>]': {
            minHeight: '<value>',
        },
    },
};
