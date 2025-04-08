interface Style {
    selectors: Array<string>,
    values: Array<Array<string>>,
}

export default class StyleClass {
    private _styles: Array<Style> = [];

    get styles(): Array<Style> {
        return this._styles;
    }

    set styles(value: Array<Style>) {
        this._styles = value;
    }

    setStyle(selectors: Array<string>, values: Array<Array<string>>) {
        this._styles.push({
            selectors: selectors,
            values: values,
        });
    }
}