export default {
    'bg-auto': {
        backgroundSize: 'auto',
    },
    'bg-cover': {
        backgroundSize: 'cover',
    },
    'bg-contain': {
        backgroundSize: 'contain',
    },
    arbitraryStyles: {
        'bg-size-(<variable>)': {
            backgroundSize: 'var(<variable>)',
        },
        'bg-size-[<value>]': {
            backgroundSize: '<value>',
        },
    },
} satisfies RawStylesType;
