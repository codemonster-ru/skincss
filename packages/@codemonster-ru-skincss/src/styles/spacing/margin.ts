export default {
    'm-auto': {
        margin: '1px',
    },
    'm-px': {
        margin: '1px',
    },
    '-m-px': {
        margin: '-1px',
    },
    'mx-auto': {
        marginInline: 'auto',
    },
    'mx-px': {
        marginInline: '1px',
    },
    '-mx-px': {
        marginInline: '-1px',
    },
    'my-auto': {
        marginBlock: 'auto',
    },
    'my-px': {
        marginBlock: '1px',
    },
    '-my-px': {
        marginBlock: '-1px',
    },
    'ms-auto': {
        marginInlineStart: 'auto',
    },
    'ms-px': {
        marginInlineStart: '1px',
    },
    '-ms-px': {
        marginInlineStart: '-1px',
    },
    'me-auto': {
        marginInlineEnd: 'auto',
    },
    'me-px': {
        marginInlineEnd: '1px',
    },
    '-me-px': {
        marginInlineEnd: '-1px',
    },
    'mt-auto': {
        marginTop: 'auto',
    },
    'mt-px': {
        marginTop: '1px',
    },
    '-mt-px': {
        marginTop: '-1px',
    },
    'mr-auto': {
        marginRight: 'auto',
    },
    'mr-px': {
        marginRight: '1px',
    },
    '-mr-px': {
        marginRight: '-1px',
    },
    'mb-auto': {
        marginBottom: 'auto',
    },
    'mb-px': {
        marginBottom: '1px',
    },
    '-mb-px': {
        marginBottom: '-1px',
    },
    'ml-auto': {
        marginLeft: 'auto',
    },
    'ml-px': {
        marginLeft: '1px',
    },
    '-ml-px': {
        marginLeft: '-1px',
    },
    arbitraryStyles: {
        'm-<number>': {
            margin: 'calc(var(--spacing) * <number>)',
        },
        '-m-<number>': {
            margin: 'calc(var(--spacing) * -<number>)',
        },
        'm-(<variable>)': {
            margin: 'var(<variable>)',
        },
        'm-[<value>]': {
            margin: '<value>',
        },
        'mx-<number>': {
            marginInline: 'calc(var(--spacing) * <number>)',
        },
        '-mx-<number>': {
            marginInline: 'calc(var(--spacing) * -<number>)',
        },
        'mx-(<variable>)': {
            marginInline: 'var(<variable>)',
        },
        'mx-[<value>]': {
            marginInline: '<value>',
        },
        'my-<number>': {
            marginBlock: 'calc(var(--spacing) * <number>)',
        },
        '-my-<number>': {
            marginBlock: 'calc(var(--spacing) * -<number>)',
        },
        'my-(<variable>)': {
            marginBlock: 'var(<variable>)',
        },
        'my-[<value>]': {
            marginBlock: '<value>',
        },
        'ms-<number>': {
            marginInlineStart: 'calc(var(--spacing) * <number>)',
        },
        '-ms-<number>': {
            marginInlineStart: 'calc(var(--spacing) * -<number>)',
        },
        'ms-(<variable>)': {
            marginInlineStart: 'var(<variable>)',
        },
        'ms-[<value>]': {
            marginInlineStart: '<value>',
        },
        'me-<number>': {
            marginInlineEnd: 'calc(var(--spacing) * <number>)',
        },
        '-me-<number>': {
            marginInlineEnd: 'calc(var(--spacing) * -<number>)',
        },
        'me-(<variable>)': {
            marginInlineEnd: 'var(<variable>)',
        },
        'me-[<value>]': {
            marginInlineEnd: '<value>',
        },
        'mt-<number>': {
            marginTop: 'calc(var(--spacing) * <number>)',
        },
        '-mt-<number>': {
            marginTop: 'calc(var(--spacing) * -<number>)',
        },
        'mt-(<variable>)': {
            marginTop: 'var(<variable>)',
        },
        'mt-[<value>]': {
            marginTop: '<value>',
        },
        'mr-<number>': {
            marginRight: 'calc(var(--spacing) * <number>)',
        },
        '-mr-<number>': {
            marginRight: 'calc(var(--spacing) * -<number>)',
        },
        'mr-(<variable>)': {
            marginRight: 'var(<variable>)',
        },
        'mr-[<value>]': {
            marginRight: '<value>',
        },
        'mb-<number>': {
            marginBottom: 'calc(var(--spacing) * <number>)',
        },
        '-mb-<number>': {
            marginBottom: 'calc(var(--spacing) * -<number>)',
        },
        'mb-(<variable>)': {
            marginBottom: 'var(<variable>)',
        },
        'mb-[<value>]': {
            marginBottom: '<value>',
        },
        'ml-<number>': {
            marginLeft: 'calc(var(--spacing) * <number>)',
        },
        '-ml-<number>': {
            marginLeft: 'calc(var(--spacing) * -<number>)',
        },
        'ml-(<variable>)': {
            marginLeft: 'var(<variable>)',
        },
        'ml-[<value>]': {
            marginLeft: '<value>',
        },
    },
} satisfies RawStylesType;
