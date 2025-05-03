// filter
import blur from './filters/filter/blur';
import brightness from './filters/filter/brightness';
import contrast from './filters/filter/contrast';
import dropShadow from './filters/filter/dropShadow';
import grayscale from './filters/filter/grayscale';
import hueRotate from './filters/filter/hueRotate';
import invert from './filters/filter/invert';
import saturate from './filters/filter/saturate';
import sepia from './filters/filter/sepia';

// backdrop filter
import backdropFilterBlur from './filters/backdropFilter/blur';
import backdropFilterBrightness from './filters/backdropFilter/brightness';
import backdropFilterContrast from './filters/backdropFilter/contrast';
import backdropFilterGrayscale from './filters/backdropFilter/grayscale';
import backdropFilterHueRotate from './filters/backdropFilter/hueRotate';
import backdropFilterInvert from './filters/backdropFilter/invert';
import backdropFilterOpacity from './filters/backdropFilter/opacity';
import backdropFilterSaturate from './filters/backdropFilter/saturate';

export default {
    // filter
    ...blur,
    ...brightness,
    ...contrast,
    ...dropShadow,
    ...grayscale,
    ...hueRotate,
    ...invert,
    ...saturate,
    ...sepia,
    // backdrop filter
    ...backdropFilterBlur,
    ...backdropFilterBrightness,
    ...backdropFilterContrast,
    ...backdropFilterGrayscale,
    ...backdropFilterHueRotate,
    ...backdropFilterInvert,
    ...backdropFilterOpacity,
    ...backdropFilterSaturate,
};
