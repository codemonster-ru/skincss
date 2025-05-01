import borderColor from './borders/borderColor';
import borderRadius from './borders/borderRadius';
import borderStyle from './borders/borderStyle';
import borderWidth from './borders/borderWidth';
import outlineColor from './borders/outlineColor';
import outlineWidth from './borders/outlineWidth';

export default {
    ...borderColor,
    ...borderRadius,
    ...borderStyle,
    ...borderWidth,
    ...outlineColor,
    ...outlineWidth,
};
