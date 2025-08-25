export default {
    'underline-offset-auto': {
        textUnderlineOffset: 'auto',
    },
    arbitraryStyles: {
        'underline-offset-<number>': {
            textUnderlineOffset: '<number>px',
        },
        '-underline-offset-<number>': {
            textUnderlineOffset: 'calc(<number>px * -1)',
        },
        'underline-offset-(<variable>)': {
            textUnderlineOffset: 'var(<variable>)',
        },
        'underline-offset-[<value>]': {
            textUnderlineOffset: '<value>',
        },
    },
} satisfies RawStylesType;
