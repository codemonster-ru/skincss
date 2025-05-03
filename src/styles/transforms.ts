import backfaceVisibility from './transforms/backfaceVisibility';
import perspective from './transforms/perspective';
import perspectiveOrigin from './transforms/perspectiveOrigin';

export default {
    ...backfaceVisibility,
    ...perspective,
    ...perspectiveOrigin,
};
