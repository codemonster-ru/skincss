export default {
    'auto-cols-auto': {
        gridAutoColumns: 'auto',
    },
    'auto-cols-min': {
        gridAutoColumns: 'min-content',
    },
    'auto-cols-max': {
        gridAutoColumns: 'max-content',
    },
    'auto-cols-fr': {
        gridAutoColumns: 'minmax(0, 1fr)',
    },
    arbitraryValues: {
        'auto-cols-(<variable>)': {
            gridAutoColumns: 'var(<variable>)',
        },
        'auto-cols-[<value>]': {
            gridAutoColumns: '<value>',
        },
    },
};
