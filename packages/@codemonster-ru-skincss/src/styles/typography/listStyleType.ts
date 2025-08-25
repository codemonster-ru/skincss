export default {
    'list-disc': {
        listStyleType: 'disc',
    },
    'list-decimal': {
        listStyleType: 'decimal',
    },
    'list-none': {
        listStyleType: 'none',
    },
    arbitraryStyles: {
        'list-(<variable>)': {
            listStyleType: 'var(<variable>)',
        },
        'list-[<value>]': {
            listStyleType: '<value>',
        },
    },
} satisfies RawStylesType;
