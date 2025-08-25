export default {
    'animate-none': {
        animation: 'none',
    },
    arbitraryStyles: {
        'animate-(<variable>)': {
            animation: 'var(<variable>)',
        },
        'animate-[<value>]': {
            animation: '<value>',
        },
    },
} satisfies RawStylesType;
