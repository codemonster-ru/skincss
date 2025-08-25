export default {
    'translate-full': {
        translate: '100% 100%',
    },
    '-translate-full': {
        translate: '-100% -100%',
    },
    'translate-px': {
        translate: '1px 1px',
    },
    '-translate-px': {
        translate: '-1px -1px',
    },
    'translate-x-full': {
        translate: '100% var(--translate-y)',
    },
    '-translate-x-full': {
        translate: '-100% var(--translate-y)',
    },
    'translate-x-px': {
        translate: '1px var(--translate-y)',
    },
    '-translate-x-px': {
        translate: '-1px var(--translate-y)',
    },
    'translate-y-full': {
        translate: 'var(--translate-x) 100%',
    },
    '-translate-y-full': {
        translate: 'var(--translate-x) -100%',
    },
    'translate-y-px': {
        translate: 'var(--translate-x) 1px',
    },
    '-translate-y-px': {
        translate: 'var(--translate-x) -1px',
    },
    'translate-z-px': {
        translate: 'var(--translate-x) var(--translate-y) 1px',
    },
    '-translate-z-px': {
        translate: 'var(--translate-x) var(--translate-y) -1px',
    },
    'translate-none': {
        translate: 'none',
    },
    arbitraryStyles: {
        'translate-<number>': {
            translate: 'calc(var(--spacing) * <number>) calc(var(--spacing) * <number>)',
        },
        '-translate-<number>': {
            translate: 'calc(var(--spacing) * -<number>) calc(var(--spacing) * -<number>)',
        },
        'translate-<fraction>': {
            translate: 'calc(<fraction> * 100%) calc(<fraction> * 100%)',
        },
        '-translate-<fraction>': {
            translate: 'calc(<fraction> * -100%) calc(<fraction> * -100%)',
        },
        'translate-(<variable>)': {
            translate: 'var(<variable>) var(<variable>)',
        },
        'translate-[<value>]': {
            translate: '<value> <value>',
        },
        'translate-x-<number>': {
            translate: 'calc(var(--spacing) * <number>) var(--translate-y)',
        },
        '-translate-x-<number>': {
            translate: 'calc(var(--spacing) * -<number>) var(--translate-y)',
        },
        'translate-x-<fraction>': {
            translate: 'calc(<fraction> * 100%) var(--translate-y)',
        },
        '-translate-x-<fraction>': {
            translate: 'calc(<fraction> * -100%) var(--translate-y)',
        },
        'translate-x-(<variable>)': {
            translate: 'var(<variable>) var(--translate-y)',
        },
        'translate-x-[<value>]': {
            translate: '<value> var(--translate-y)',
        },
        'translate-y-<number>': {
            translate: 'var(--translate-x) calc(var(--spacing) * <number>)',
        },
        '-translate-y-<number>': {
            translate: 'var(--translate-x) calc(var(--spacing) * -<number>)',
        },
        'translate-y-<fraction>': {
            translate: 'var(--translate-x) calc(<fraction> * 100%)',
        },
        '-translate-y-<fraction>': {
            translate: 'var(--translate-x) calc(<fraction> * -100%)',
        },
        'translate-y-(<variable>)': {
            translate: 'var(--translate-x) var(<variable>)',
        },
        'translate-y-[<value>]': {
            translate: 'var(--translate-x) <value>',
        },
        'translate-z-<number>': {
            translate: 'var(--translate-x) var(--translate-y) calc(var(--spacing) * <number>)',
        },
        '-translate-z-<number>': {
            translate: 'var(--translate-x) var(--translate-y) calc(var(--spacing) * -<number>)',
        },
        'translate-z-(<variable>)': {
            translate: 'var(--translate-x) var(--translate-y) var(<variable>)',
        },
        'translate-z-[<value>]': {
            translate: 'var(--translate-x) var(--translate-y) <value>',
        },
    },
} satisfies RawStylesType;
