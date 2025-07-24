export default {
    arbitraryValues: {
        'border-spacing-<number>': {
            borderSpacing: 'calc(var(--spacing) * <number>)',
        },
        'border-spacing-(<variable>)': {
            borderSpacing: 'var(<variable>)',
        },
        'border-spacing-[<value>]': {
            borderSpacing: '<value>',
        },
        'border-spacing-x-<number>': {
            borderSpacing: 'calc(var(--spacing) * <number>) var(--border-spacing-y)',
        },
        'border-spacing-x-(<variable>)': {
            borderSpacing: 'var(<variable>) var(--border-spacing-y)',
        },
        'border-spacing-x-[<value>]': {
            borderSpacing: '<value> var(--border-spacing-y)',
        },
        'border-spacing-y-<number>': {
            borderSpacing: 'var(--border-spacing-x) calc(var(--spacing) * <number>)',
        },
        'border-spacing-y-(<variable>)': {
            borderSpacing: 'var(--border-spacing-x) var(<variable>)',
        },
        'border-spacing-y-[<value>]': {
            borderSpacing: 'var(--border-spacing-x) <value>',
        },
    },
};
