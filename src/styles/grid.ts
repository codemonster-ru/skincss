import flex from './grid/flex';
import order from './grid/order';
import gridRow from './grid/gridRow';
import flexWrap from './grid/flexWrap';
import flexGrow from './grid/flexGrow';
import flexBasis from './grid/flexBasis';
import placeSelf from './grid/placeSelf';
import alignSelf from './grid/alignSelf';
import alignItems from './grid/alignItems';
import placeItems from './grid/placeItems';
import flexShrink from './grid/flexShrink';
import gridColumn from './grid/gridColumn';
import justifySelf from './grid/justifySelf';
import alignContent from './grid/alignContent';
import justifyItems from './grid/justifyItems';
import gridAutoRows from './grid/gridAutoRows';
import placeContent from './grid/placeContent';
import gridAutoFlow from './grid/gridAutoFlow';
import flexDirection from './grid/flexDirection';
import justifyContent from './grid/justifyContent';
import gridAutoColumns from './grid/gridAutoColumns';
import gridTemplateRows from './grid/gridTemplateRows';
import gridTemplateColumns from './grid/gridTemplateColumns';

export default {
    // TODO: gap
    ...flex,
    ...order,
    ...gridRow,
    ...flexWrap,
    ...flexGrow,
    ...flexBasis,
    ...placeSelf,
    ...alignSelf,
    ...alignItems,
    ...placeItems,
    ...flexShrink,
    ...gridColumn,
    ...justifySelf,
    ...alignContent,
    ...justifyItems,
    ...gridAutoRows,
    ...placeContent,
    ...gridAutoFlow,
    ...flexDirection,
    ...justifyContent,
    ...gridAutoColumns,
    ...gridTemplateRows,
    ...gridTemplateColumns,
};
