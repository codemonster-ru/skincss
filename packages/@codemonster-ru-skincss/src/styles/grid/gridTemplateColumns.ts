export default {
    'grid-cols-none': {
        gridTemplateColumns: 'none',
    },
    'grid-cols-subgrid': {
        gridTemplateColumns: 'subgrid',
    },
    arbitraryValues: {
        'grid-cols-<number>': {
            gridTemplateColumns: 'repeat(<number>, minmax(0, 1fr))',
        },
        'grid-cols-(<variable>)': {
            gridTemplateColumns: 'var(<variable>)',
        },
        'grid-cols-[<value>]': {
            gridTemplateColumns: '<value>',
        },
    },
};
