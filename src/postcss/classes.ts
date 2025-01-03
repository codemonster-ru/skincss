const createClasses = (root: any, { Rule }: any) => {
    let a = new Rule({ selector: 'a', source: root.source });

    a.append({
        prop: 'color',
        value: 'black',
        source: root.source,
        important: root.important
    });

    root.append(a);
};

exports.createClasses = createClasses;