import backfaceVisibility from './transforms/backfaceVisibility';
import perspective from './transforms/perspective';
import perspectiveOrigin from './transforms/perspectiveOrigin';
import rotate from './transforms/rotate';
import scale from './transforms/scale';
import skew from './transforms/skew';
import transform from './transforms/transform';

export default {
    ...backfaceVisibility,
    ...perspective,
    ...perspectiveOrigin,
    ...rotate,
    ...scale,
    ...skew,
    ...transform,
};
