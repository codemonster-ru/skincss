export default {
    'line-clamp-none': {
        overflow: 'visible',
        display: 'block',
        '-webkit-box-orient': 'horizontal',
        '-webkit-line-clamp': 'unset',
    },
    arbitraryStyles: {
        'line-clamp-<number>': {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '<number>',
        },
        'line-clamp-(<variable>)': {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': 'var(<variable>)',
        },
        'line-clamp-[<value>]': {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '<value>',
        },
    },
} satisfies RawStylesType;
