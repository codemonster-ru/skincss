export default {
    'list-image-none': {
        listStyleImage: 'none',
    },
    arbitraryStyles: {
        'list-image-(<variable>)': {
            listStyleImage: 'var(<variable>)',
        },
        'list-image-[<value>]': {
            listStyleImage: '<value>',
        },
    },
} satisfies RawStylesType;
