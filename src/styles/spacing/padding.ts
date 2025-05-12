const styles = <
    {
        [index: string]: object;
    }
>{
    'p-px': {
        padding: '1px',
    },
    'px-px': {
        paddingInline: '1px',
    },
    'py-px': {
        paddingBlock: '1px',
    },
    'ps-px': {
        paddingInlineStart: '1px',
    },
    'pe-px': {
        paddingInlineEnd: '1px',
    },
    'pt-px': {
        paddingTop: '1px',
    },
    'pr-px': {
        paddingRight: '1px',
    },
    'pb-px': {
        paddingBottom: '1px',
    },
    'pl-px': {
        paddingLeft: '1px',
    },
};

for (let step = 1; step <= 100; ++step) {
    styles[`p-${step}`] = {
        padding: `calc(var(--spacing) * ${step});`,
    };
}

export default styles;
