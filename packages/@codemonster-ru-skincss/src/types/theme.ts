interface FontsType {
    [key: string]: string;
}

interface FontSetterType {
    key: string;
    value: string;
}

type TextType = (
    | string
    | {
          lineHeight: string;
      }
)[];

interface TextsType {
    [key: string]: TextType;
}

interface TextSetterType {
    key: string;
    value: TextType;
}

type ColorType = string | { [key: string]: string };

interface ColorsType {
    [key: string]: ColorType;
}

interface ColorSetterType {
    key: string;
    value: ColorType;
}

type SpacingsType = string;

type SpacingSetterType = string;

interface BreakpointsType {
    [key: string]: string;
}

interface BreakpointSetterType {
    key: string;
    value: string;
}

interface FontWeightsType {
    [key: string]: string;
}

interface FontWeightSetterType {
    key: string;
    value: string;
}

interface GlobalThemeType {
    fontFamily: FontsType;
    color: ColorsType;
    spacing: SpacingsType;
    breakpoint: BreakpointsType;
    text: TextsType;
    fontWeight: FontWeightsType;
}
