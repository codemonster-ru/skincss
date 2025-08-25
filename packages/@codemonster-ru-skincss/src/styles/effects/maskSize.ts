export default {
    'mask-auto': {
        maskSize: 'auto',
    },
    'mask-cover': {
        maskSize: 'cover',
    },
    'mask-contain': {
        maskSize: 'contain',
    },
    arbitraryStyles: {
        'mask-size-(<variable>)': {
            maskSize: 'var(<variable>)',
        },
        'mask-size-[<value>]': {
            maskSize: '<value>',
        },
    },
} satisfies RawStylesType;
