export default {
    'font-sans': {
        fontFamily: 'var(--font-sans)',
    },
    'font-serif': {
        fontFamily: 'var(--font-serif)',
    },
    'font-mono': {
        fontFamily: 'var(--font-mono)',
    },
    arbitraryStyles: {
        'font-(<variable>)': {
            fontFamily: 'var(<variable>)',
        },
        'font-[<value>]': {
            fontFamily: '<value>',
        },
    },
} satisfies RawStylesType;
