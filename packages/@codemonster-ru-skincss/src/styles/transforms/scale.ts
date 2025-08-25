export default {
    'scale-none': {
        scale: 'none',
    },
    'scale-3d': {
        scale: 'var(--scale-x) var(--scale-y) var(--scale-z)',
    },
    arbitraryStyles: {
        'scale-<number>': {
            scale: '<number>% <number>%',
        },
        '-scale-<number>': {
            scale: 'calc(<number>% * -1) calc(<number>% * -1)',
        },
        'scale-(<variable>)': {
            scale: 'var(<variable>) var(<variable>)',
        },
        'scale-[<value>]': {
            scale: '<value>',
        },
        'scale-x-<number>': {
            scale: '<number>% var(--scale-y)',
        },
        '-scale-x-<number>': {
            scale: 'calc(<number>% * -1) var(--scale-y)',
        },
        'scale-x-(<variable>)': {
            scale: 'var(<variable>) var(--scale-y)',
        },
        'scale-x-[<value>]': {
            scale: '<value> var(--scale-y)',
        },
        'scale-y-<number>': {
            scale: 'var(--scale-x) <number>%',
        },
        '-scale-y-<number>': {
            scale: 'var(--scale-x) calc(<number>% * -1)',
        },
        'scale-y-(<variable>)': {
            scale: 'var(--scale-x) var(<variable>)',
        },
        'scale-y-[<value>]': {
            scale: 'var(--scale-x) <value>',
        },
        'scale-z-<number>': {
            scale: 'var(--scale-x) var(--scale-y) <number>%',
        },
        '-scale-z-<number>': {
            scale: 'var(--scale-x) var(--scale-y) calc(<number>% * -1)',
        },
        'scale-z-(<variable>)': {
            scale: 'var(--scale-x) var(--scale-y) var(<variable>)',
        },
        'scale-z-[<value>]': {
            scale: 'var(--scale-x) var(--scale-y) <value>',
        },
    },
} satisfies RawStylesType;
