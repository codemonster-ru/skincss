export default {
    'content-none': {
        content: 'none',
    },
    arbitraryStyles: {
        'content-(<variable>)': {
            content: 'var(<variable>)',
        },
        'content-[<value>]': {
            content: '<value>',
        },
    },
} satisfies RawStylesType;
