export default {
    'aspect-square': {
        aspectRatio: '1 / 1',
    },
    'aspect-video': {
        aspectRatio: '16 / 9',
    },
    'aspect-auto': {
        aspectRatio: 'auto',
    },
    arbitraryValues: {
        'aspect-<ratio>': {
            aspectRatio: '<ratio>',
        },
        'aspect-(<variable>)': {
            aspectRatio: 'var(<variable>)',
        },
        'aspect-[<value>]': {
            aspectRatio: '<value>',
        },
    },
};
