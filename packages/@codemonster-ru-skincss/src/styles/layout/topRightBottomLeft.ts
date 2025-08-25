export default {
    'inset-px': {
        inset: '1px',
    },
    '-inset-px': {
        inset: '-1px',
    },
    'inset-full': {
        inset: '100%',
    },
    '-inset-full': {
        inset: '-100%',
    },
    'inset-auto': {
        inset: 'auto',
    },
    'inset-x-px': {
        insetInline: '1px',
    },
    '-inset-x-px': {
        insetInline: '-1px',
    },
    'inset-x-full': {
        insetInline: '100%',
    },
    '-inset-x-full': {
        insetInline: '-100%',
    },
    'inset-x-auto': {
        insetInline: 'auto',
    },
    'inset-y-px': {
        insetBlock: '1px',
    },
    '-inset-y-px': {
        insetBlock: '-1px',
    },
    'inset-y-full': {
        insetBlock: '100%',
    },
    '-inset-y-full': {
        insetBlock: '-100%',
    },
    'inset-y-auto': {
        insetBlock: 'auto',
    },
    'start-px': {
        insetInlineStart: '1px',
    },
    '-start-px': {
        insetInlineStart: '-1px',
    },
    'start-full': {
        insetInlineStart: '100%',
    },
    '-start-full': {
        insetInlineStart: '-100%',
    },
    'start-auto': {
        insetInlineStart: 'auto',
    },
    'end-px': {
        insetInlineEnd: '1px',
    },
    '-end-px': {
        insetInlineEnd: '-1px',
    },
    'end-full': {
        insetInlineEnd: '100%',
    },
    '-end-full': {
        insetInlineEnd: '-100%',
    },
    'end-auto': {
        insetInlineEnd: 'auto',
    },
    'top-px': {
        top: '1px',
    },
    '-top-px': {
        top: '-1px',
    },
    'top-full': {
        top: '100%',
    },
    '-top-full': {
        top: '-100%',
    },
    'top-auto': {
        top: 'auto',
    },
    'right-px': {
        right: '1px',
    },
    '-right-px': {
        right: '-1px',
    },
    'right-full': {
        right: '100%',
    },
    '-right-full': {
        right: '-100%',
    },
    'right-auto': {
        right: 'auto',
    },
    'bottom-px': {
        bottom: '1px',
    },
    '-bottom-px': {
        bottom: '-1px',
    },
    'bottom-full': {
        bottom: '100%',
    },
    '-bottom-full': {
        bottom: '-100%',
    },
    'bottom-auto': {
        bottom: 'auto',
    },
    'left-px': {
        left: '1px',
    },
    '-left-px': {
        left: '-1px',
    },
    'left-full': {
        left: '100%',
    },
    '-left-full': {
        left: '-100%',
    },
    'left-auto': {
        left: 'auto',
    },
    arbitraryStyles: {
        'inset-<number>': {
            inset: 'calc(var(--spacing) * <number>)',
        },
        '-inset-<number>': {
            inset: 'calc(var(--spacing) * -<number>)',
        },
        'inset-<fraction>': {
            inset: 'calc(<fraction> * 100%)',
        },
        '-inset-<fraction>': {
            inset: 'calc(<fraction> * -100%)',
        },
        'inset-(<variable>)': {
            inset: 'var(<variable>)',
        },
        'inset-[<value>]': {
            inset: '<value>',
        },
        'inset-x-<number>': {
            insetInline: 'calc(var(--spacing) * <number>)',
        },
        '-inset-x-<number>': {
            insetInline: 'calc(var(--spacing) * -<number>)',
        },
        'inset-x-<fraction>': {
            insetInline: 'calc(<fraction> * 100%)',
        },
        '-inset-x-<fraction>': {
            insetInline: 'calc(<fraction> * -100%)',
        },
        'inset-x-(<variable>)': {
            insetInline: 'var(<variable>)',
        },
        'inset-x-[<value>]': {
            insetInline: '<value>',
        },
        'inset-y-<number>': {
            insetBlock: 'calc(var(--spacing) * <number>)',
        },
        '-inset-y-<number>': {
            insetBlock: 'calc(var(--spacing) * -<number>)',
        },
        'inset-y-<fraction>': {
            insetBlock: 'calc(<fraction> * 100%)',
        },
        '-inset-y-<fraction>': {
            insetBlock: 'calc(<fraction> * -100%)',
        },
        'inset-y-(<variable>)': {
            insetBlock: 'var(<variable>)',
        },
        'inset-y-[<value>]': {
            insetBlock: '<value>',
        },
        'start-<number>': {
            insetInlineStart: 'calc(var(--spacing) * <number>)',
        },
        '-start-<number>': {
            insetInlineStart: 'calc(var(--spacing) * -<number>)',
        },
        'start-<fraction>': {
            insetInlineStart: 'calc(<fraction> * 100%)',
        },
        '-start-<fraction>': {
            insetInlineStart: 'calc(<fraction> * -100%)',
        },
        'start-(<variable>)': {
            insetInlineStart: 'var(<variable>)',
        },
        'start-[<value>]': {
            insetInlineStart: '<value>',
        },
        'end-<number>': {
            insetInlineEnd: 'calc(var(--spacing) * <number>)',
        },
        '-end-<number>': {
            insetInlineEnd: 'calc(var(--spacing) * -<number>)',
        },
        'end-<fraction>': {
            insetInlineEnd: 'calc(<fraction> * 100%)',
        },
        '-end-<fraction>': {
            insetInlineEnd: 'calc(<fraction> * -100%)',
        },
        'end-(<variable>)': {
            insetInlineEnd: 'var(<variable>)',
        },
        'end-[<value>]': {
            insetInlineEnd: '<value>',
        },
        'top-<number>': {
            top: 'calc(var(--spacing) * <number>)',
        },
        '-top-<number>': {
            top: 'calc(var(--spacing) * -<number>)',
        },
        'top-<fraction>': {
            top: 'calc(<fraction> * 100%)',
        },
        '-top-<fraction>': {
            top: 'calc(<fraction> * -100%)',
        },
        'top-(<variable>)': {
            top: 'var(<variable>)',
        },
        'top-[<value>]': {
            top: '<value>',
        },
        'right-<number>': {
            right: 'calc(var(--spacing) * <number>)',
        },
        '-right-<number>': {
            right: 'calc(var(--spacing) * -<number>)',
        },
        'right-<fraction>': {
            right: 'calc(<fraction> * 100%)',
        },
        '-right-<fraction>': {
            right: 'calc(<fraction> * -100%)',
        },
        'right-(<variable>)': {
            right: 'var(<variable>)',
        },
        'right-[<value>]': {
            right: '<value>',
        },
        'bottom-<number>': {
            bottom: 'calc(var(--spacing) * <number>)',
        },
        '-bottom-<number>': {
            bottom: 'calc(var(--spacing) * -<number>)',
        },
        'bottom-<fraction>': {
            bottom: 'calc(<fraction> * 100%)',
        },
        '-bottom-<fraction>': {
            bottom: 'calc(<fraction> * -100%)',
        },
        'bottom-(<variable>)': {
            bottom: 'var(<variable>)',
        },
        'bottom-[<value>]': {
            bottom: '<value>',
        },
        'left-<number>': {
            left: 'calc(var(--spacing) * <number>)',
        },
        '-left-<number>': {
            left: 'calc(var(--spacing) * -<number>)',
        },
        'left-<fraction>': {
            left: 'calc(<fraction> * 100%)',
        },
        '-left-<fraction>': {
            left: 'calc(<fraction> * -100%)',
        },
        'left-(<variable>)': {
            left: 'var(<variable>)',
        },
        'left-[<value>]': {
            left: '<value>',
        },
    },
} satisfies RawStylesType;
