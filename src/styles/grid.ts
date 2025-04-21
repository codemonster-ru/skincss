import flex from './grid/flex';
import order from './grid/order';
import flexWrap from './grid/flexWrap';
import flexGrow from './grid/flexGrow';
import flexBasis from './grid/flexBasis';
import flexShrink from './grid/flexShrink';
import gridColumn from './grid/gridColumn';
import flexDirection from './grid/flexDirection';
import gridTemplateRows from './grid/gridTemplateRows';
import gridTemplateColumns from './grid/gridTemplateColumns';

export default {
    ...flex,
    ...order,
    ...flexWrap,
    ...flexGrow,
    ...flexBasis,
    ...flexShrink,
    ...gridColumn,
    ...flexDirection,
    ...gridTemplateRows,
    ...gridTemplateColumns,
};
