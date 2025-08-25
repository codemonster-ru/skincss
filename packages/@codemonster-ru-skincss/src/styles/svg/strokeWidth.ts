export default {
    arbitraryStyles: {
        'stroke-<number>': {
            strokeWidth: '<number>',
        },
        'stroke-(length:<variable>)': {
            strokeWidth: 'var(<variable>)',
        },
        'stroke-[<value>]': {
            strokeWidth: '<value>',
        },
    },
} satisfies RawStylesType;
