export default {
    'p-px': {
        padding: '1px',
    },
    'px-px': {
        paddingInline: '1px',
    },
    'py-px': {
        paddingBlock: '1px',
    },
    'ps-px': {
        paddingInlineStart: '1px',
    },
    'pe-px': {
        paddingInlineEnd: '1px',
    },
    'pt-px': {
        paddingTop: '1px',
    },
    'pr-px': {
        paddingRight: '1px',
    },
    'pb-px': {
        paddingBottom: '1px',
    },
    'pl-px': {
        paddingLeft: '1px',
    },
    arbitraryStyles: {
        'p-<number>': {
            padding: 'calc(var(--spacing) * <number>)',
        },
        'p-(<variable>)': {
            padding: 'var(<variable>)',
        },
        'p-[<value>]': {
            padding: '<value>',
        },
        'px-<number>': {
            paddingInline: 'calc(var(--spacing) * <number>)',
        },
        'px-(<variable>)': {
            paddingInline: 'var(<variable>)',
        },
        'px-[<value>]': {
            paddingInline: '<value>',
        },
        'py-<number>': {
            paddingBlock: 'calc(var(--spacing) * <number>)',
        },
        'py-(<variable>)': {
            paddingBlock: 'var(<variable>)',
        },
        'py-[<value>]': {
            paddingBlock: '<value>',
        },
        'ps-<number>': {
            paddingInlineStart: 'calc(var(--spacing) * <number>)',
        },
        'ps-(<variable>)': {
            paddingInlineStart: 'var(<variable>)',
        },
        'ps-[<value>]': {
            paddingInlineStart: '<value>',
        },
        'pe-<number>': {
            paddingInlineEnd: 'calc(var(--spacing) * <number>)',
        },
        'pe-(<variable>)': {
            paddingInlineEnd: 'var(<variable>)',
        },
        'pe-[<value>]': {
            paddingInlineEnd: '<value>',
        },
        'pt-<number>': {
            paddingTop: 'calc(var(--spacing) * <number>)',
        },
        'pt-(<variable>)': {
            paddingTop: 'var(<variable>)',
        },
        'pt-[<value>]': {
            paddingTop: '<value>',
        },
        'pr-<number>': {
            paddingRight: 'calc(var(--spacing) * <number>)',
        },
        'pr-(<variable>)': {
            paddingRight: 'var(<variable>)',
        },
        'pr-[<value>]': {
            paddingRight: '<value>',
        },
        'pb-<number>': {
            paddingBottom: 'calc(var(--spacing) * <number>)',
        },
        'pb-(<variable>)': {
            paddingBottom: 'var(<variable>)',
        },
        'pb-[<value>]': {
            paddingBottom: '<value>',
        },
        'pl-<number>': {
            paddingLeft: 'calc(var(--spacing) * <number>)',
        },
        'pl-(<variable>)': {
            paddingLeft: 'var(<variable>)',
        },
        'pl-[<value>]': {
            paddingLeft: '<value>',
        },
    },
} satisfies RawStylesType;
