export default {
    outline: {
        outlineWidth: '1px',
    },
    arbitraryStyles: {
        'outline-<number>': {
            outlineWidth: '<number>px',
        },
        'outline-(<variable>)': {
            outlineWidth: 'var(<variable>)',
        },
        'outline-[<value>]': {
            outlineWidth: '<value>',
        },
    },
} satisfies RawStylesType;
