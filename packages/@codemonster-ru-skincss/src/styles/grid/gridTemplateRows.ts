export default {
    'grid-rows-none': {
        gridTemplateRows: 'none',
    },
    'grid-rows-subgrid': {
        gridTemplateRows: 'subgrid',
    },
    arbitraryStyles: {
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
} satisfies RawStylesType;
