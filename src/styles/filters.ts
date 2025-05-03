import blur from './filters/filter/blur';
import brightness from './filters/filter/brightness';
import contrast from './filters/filter/contrast';

export default {
    ...blur,
    ...brightness,
    ...contrast,
};
