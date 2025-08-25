export default {
    'auto-rows-auto': {
        gridAutoRows: 'auto',
    },
    'auto-rows-min': {
        gridAutoRows: 'min-content',
    },
    'auto-rows-max': {
        gridAutoRows: 'max-content',
    },
    'auto-rows-fr': {
        gridAutoRows: 'minmax(0, 1fr)',
    },
    arbitraryStyles: {
        'auto-rows-(<variable>)': {
            gridAutoRows: 'var(<variable>)',
        },
        'auto-rows-[<value>]': {
            gridAutoRows: '<value>',
        },
    },
} satisfies RawStylesType;
