import { default as theme } from '../styles/theme';

export default class ThemeClass {
    private _fonts: FontsType = theme.fontFamily;
    private _texts: TextsType = theme.text;
    private _colors: ColorsType = theme.color;
    private _spacing: SpacingsType = theme.spacing;
    private _breakpoints: BreakpointsType = theme.breakpoint;
    private _fontWeights: FontWeightsType = theme.fontWeight;

    get fonts(): FontsType {
        return this._fonts;
    }

    set fonts(obj: FontSetterType) {
        this._fonts[obj.key] = obj.value;
    }

    get texts(): TextsType {
        return this._texts;
    }

    set texts(obj: TextSetterType) {
        this._texts[obj.key] = obj.value;
    }

    get colors(): ColorsType {
        return this._colors;
    }

    set colors(obj: ColorSetterType) {
        this._colors[obj.key] = obj.value;
    }

    get spacing(): SpacingsType {
        return this._spacing;
    }

    set spacing(value: SpacingSetterType) {
        this._spacing = value;
    }

    get breakpoints(): BreakpointsType {
        return this._breakpoints;
    }

    set breakpoints(obj: BreakpointSetterType) {
        this._breakpoints[obj.key] = obj.value;
    }

    get fontWeights(): FontWeightsType {
        return this._fontWeights;
    }

    set fontWeights(obj: FontWeightSetterType) {
        this._fontWeights[obj.key] = obj.value;
    }

    getVars() {
        let vars: { [key: string]: string } = {};

        Object.keys(this.fonts).map((fontIndex: string) => {
            vars[`--font-${fontIndex}`] = this.fonts[fontIndex];
        });

        Object.keys(this.texts).map((textsIndex: string) => {
            this.texts[textsIndex].map(textValue => {
                if (typeof textValue === 'string') {
                    vars[`--text-${textsIndex}`] = textValue;
                } else {
                    if (textValue.lineHeight) {
                        vars[`--text-${textsIndex}--line-height`] = textValue.lineHeight;
                    }
                }
            });
        });

        Object.keys(this.colors).map((colorIndex: string) => {
            const color: ColorType = this.colors[colorIndex];

            if (typeof color === 'string') {
                vars[`--color-${colorIndex}`] = color;
            } else {
                Object.keys(color).map((tone: string) => {
                    vars[`--color-${colorIndex}-${tone}`] = color[tone];
                });
            }
        });

        if (this.spacing) {
            vars['--spacing'] = this.spacing;
        }

        Object.keys(this.breakpoints).map((breakpointIndex: string) => {
            vars[`--breakpoint-${breakpointIndex}`] = this.breakpoints[breakpointIndex];
        });

        Object.keys(this.fontWeights).map((fontWeightIndex: string) => {
            vars[`--font-weight-${fontWeightIndex}`] = this.fontWeights[fontWeightIndex];
        });

        return vars;
    }
}
