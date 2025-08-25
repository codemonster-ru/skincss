export default {
    'perspective-dramatic': {
        perspective: 'var(--perspective-dramatic)',
    },
    'perspective-near': {
        perspective: 'var(--perspective-near)',
    },
    'perspective-normal': {
        perspective: 'var(--perspective-normal)',
    },
    'perspective-midrange': {
        perspective: 'var(--perspective-midrange)',
    },
    'perspective-distant': {
        perspective: 'var(--perspective-distant)',
    },
    'perspective-none': {
        perspective: 'none',
    },
    arbitraryStyles: {
        'perspective-(<variable>)': {
            perspective: 'var(<variable>)',
        },
        'perspective-[<value>]': {
            perspective: '<value>',
        },
    },
} satisfies RawStylesType;
