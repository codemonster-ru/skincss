export default {
    'max-h-none': {
        maxHeight: 'none',
    },
    'max-h-px': {
        maxHeight: '1px',
    },
    'max-h-full': {
        maxHeight: '100%',
    },
    'max-h-screen': {
        maxHeight: '100vw',
    },
    'max-h-dvw': {
        maxHeight: '100dvw',
    },
    'max-h-dvh': {
        maxHeight: '100dvh',
    },
    'max-h-lvw': {
        maxHeight: '100lvw',
    },
    'max-h-lvh': {
        maxHeight: '100lvh',
    },
    'max-h-svw': {
        maxHeight: '100svw',
    },
    'max-h-svh': {
        maxHeight: '100svh',
    },
    'max-h-min': {
        maxHeight: 'min-content',
    },
    'max-h-max': {
        maxHeight: 'max-content',
    },
    'max-h-fit': {
        maxHeight: 'fit-content',
    },
    arbitraryStyles: {
        'max-h-<number>': {
            maxHeight: 'calc(var(--spacing) * <number>)',
        },
        'max-h-<fraction>': {
            maxHeight: 'calc(<fraction> * 100%)',
        },
        'max-h-(<variable>)': {
            maxHeight: 'var(<variable>)',
        },
        'max-h-[<value>]': {
            maxHeight: '<value>',
        },
    },
} satisfies RawStylesType;
