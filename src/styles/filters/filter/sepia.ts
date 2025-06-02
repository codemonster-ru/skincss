export default {
    sepia: {
        filter: 'sepia(100%)',
    },
    arbitraryValues: {
        'sepia-<number>': {
            filter: 'sepia(<number>%)',
        },
        'sepia-(<variable>)': {
            filter: 'sepia(var(<variable>))',
        },
        'sepia-[<value>]': {
            filter: 'sepia(<value>)',
        },
    },
};
