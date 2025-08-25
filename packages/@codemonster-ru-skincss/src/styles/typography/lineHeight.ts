export default {
    'leading-none': {
        lineHeight: '1',
    },
    arbitraryStyles: {
        'text-<size>/<number>': {
            fontSize: '<size>',
            lineHeight: 'calc(var(--spacing) * <number>)',
        },
        'text-<size>/(<variable>)': {
            fontSize: '<size>',
            lineHeight: 'var(<variable>)',
        },
        'text-<size>/[<value>]': {
            fontSize: '<size>',
            lineHeight: '<value>',
        },
        'leading-<number>': {
            lineHeight: 'calc(var(--spacing) * <number>)',
        },
        'leading-(<variable>)': {
            lineHeight: 'var(<variable>)',
        },
        'leading-[<value>]': {
            lineHeight: '<value>',
        },
    },
} satisfies RawStylesType;
