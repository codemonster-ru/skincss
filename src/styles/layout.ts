import clear from './layout/clear';
import float from './layout/float';
import zIndex from './layout/zIndex';
import columns from './layout/columns';
import display from './layout/display';
import overflow from './layout/overflow';
import position from './layout/position';
import objectFit from './layout/objectFit';
import isolation from './layout/isolation';
import boxSizing from './layout/boxSizing';
import visibility from './layout/visibility';
import breakAfter from './layout/breakAfter';
import breakBefore from './layout/breakBefore';
import breakInside from './layout/breakInside';
import aspectRatio from './layout/aspectRatio';
import objectPosition from './layout/objectPosition';
import topRightBottomLeft from './layout/topRightBottomLeft';
import overscrollBehavior from './layout/overscrollBehavior';
import boxDecorationBreak from './layout/boxDecorationBreak';

export default {
    ...float,
    ...clear,
    ...zIndex,
    ...columns,
    ...display,
    ...overflow,
    ...position,
    ...objectFit,
    ...isolation,
    ...boxSizing,
    ...visibility,
    ...breakAfter,
    ...breakBefore,
    ...breakInside,
    ...aspectRatio,
    ...objectPosition,
    ...topRightBottomLeft,
    ...overscrollBehavior,
    ...boxDecorationBreak,
};
