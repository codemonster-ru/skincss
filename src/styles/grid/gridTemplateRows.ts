export default {
    'grid-rows-none': {
        gridTemplateRows: 'none',
    },
    'grid-rows-subgrid': {
        gridTemplateRows: 'subgrid',
    },
    arbitraryValues: {
        'grid-rows-<number>': {
            gridTemplateRows: 'repeat(<number>, minmax(0, 1fr))',
        },
        'grid-rows-(<variable>)': {
            gridTemplateRows: 'var(<variable>)',
        },
        'grid-rows-[<value>]': {
            gridTemplateRows: '<value>',
        },
    },
};
