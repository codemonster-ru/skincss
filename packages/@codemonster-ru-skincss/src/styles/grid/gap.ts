export default {
    arbitraryStyles: {
        'gap-<number>': {
            gap: 'calc(var(--spacing) * <value>)',
        },
        'gap-(<variable>)': {
            gap: 'var(<variable>)',
        },
        'gap-[<value>]': {
            gap: '<value>',
        },
        'gap-x-<number>': {
            columnGap: 'calc(var(--spacing) * <value>)',
        },
        'gap-x-(<variable>)': {
            columnGap: 'var(<variable>)',
        },
        'gap-x-[<value>]': {
            columnGap: '<value>',
        },
        'gap-y-<number>': {
            rowGap: 'calc(var(--spacing) * <value>)',
        },
        'gap-y-(<variable>)': {
            rowGap: 'var(<variable>)',
        },
        'gap-y-[<value>]': {
            rowGap: '<value>',
        },
    },
} satisfies RawStylesType;
