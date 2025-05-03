import blur from './filters/filter/blur';
import brightness from './filters/filter/brightness';
import contrast from './filters/filter/contrast';
import dropShadow from './filters/filter/dropShadow';

export default {
    ...blur,
    ...brightness,
    ...contrast,
    ...dropShadow,
};
