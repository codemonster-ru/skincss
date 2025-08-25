export default {
    'indent-px': {
        textIndent: '1px',
    },
    '-indent-px': {
        textIndent: '-1px',
    },
    arbitraryStyles: {
        'indent-<number>': {
            textIndent: 'calc(var(--spacing) * <number>)',
        },
        '-indent-<number>': {
            textIndent: 'calc(var(--spacing) * -<number>)',
        },
        'indent-(<variable>)': {
            textIndent: 'var(<variable>)',
        },
        'indent-[<value>]': {
            textIndent: '<value>',
        },
    },
} satisfies RawStylesType;
