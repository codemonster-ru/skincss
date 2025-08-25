export default {
    border: {
        borderWidth: '1px',
    },
    'border-x': {
        borderInlineWidth: '1px',
    },
    'border-y': {
        borderBlockWidth: '1px',
    },
    'border-s': {
        borderInlineStartWidth: '1px',
    },
    'border-e': {
        borderInlineEndWidth: '1px',
    },
    'border-t': {
        borderTopWidth: '1px',
    },
    'border-r': {
        borderRightWidth: '1px',
    },
    'border-b': {
        borderBottomWidth: '1px',
    },
    'border-l': {
        borderLeftWidth: '1px',
    },
    arbitraryStyles: {
        'border-<number>': {
            borderWidth: '<number>px',
        },
        'border-(length:<variable>)': {
            borderWidth: 'var(<variable>)',
        },
        'border-[<value>]': {
            borderWidth: '<value>',
        },
        'border-x-<number>': {
            borderInlineWidth: '<number>px',
        },
        'border-x-(length:<variable>)': {
            borderInlineWidth: 'var(<variable>)',
        },
        'border-x-[<value>]': {
            borderInlineWidth: '<value>',
        },
        'border-y-<number>': {
            borderBlockWidth: '<number>px',
        },
        'border-y-(length:<variable>)': {
            borderBlockWidth: 'var(<variable>)',
        },
        'border-y-[<value>]': {
            borderBlockWidth: '<value>',
        },
        'border-s-<number>': {
            borderInlineStartWidth: '<number>px',
        },
        'border-s-(length:<variable>)': {
            borderInlineStartWidth: 'var(<variable>)',
        },
        'border-s-[<value>]': {
            borderInlineStartWidth: '<value>',
        },
        'border-e-<number>': {
            borderInlineEndWidth: '<number>px',
        },
        'border-e-(length:<variable>)': {
            borderInlineEndWidth: 'var(<variable>)',
        },
        'border-e-[<value>]': {
            borderInlineEndWidth: '<value>',
        },
        'border-t-<number>': {
            borderTopWidth: '<number>px',
        },
        'border-t-(length:<variable>)': {
            borderTopWidth: 'var(<variable>)',
        },
        'border-t-[<value>]': {
            borderTopWidth: '<value>',
        },
        'border-r-<number>': {
            borderRightWidth: '<number>px',
        },
        'border-r-(length:<variable>)': {
            borderRightWidth: 'var(<variable>)',
        },
        'border-r-[<value>]': {
            borderRightWidth: '<value>',
        },
        'border-b-<number>': {
            borderBottomWidth: '<number>px',
        },
        'border-b-(length:<variable>)': {
            borderBottomWidth: 'var(<variable>)',
        },
        'border-b-[<value>]': {
            borderBottomWidth: '<value>',
        },
        'border-l-<number>': {
            borderLeftWidth: '<number>px',
        },
        'border-l-(length:<variable>)': {
            borderLeftWidth: 'var(<variable>)',
        },
        'border-l-[<value>]': {
            borderLeftWidth: '<value>',
        },
    },
} satisfies RawStylesType;
