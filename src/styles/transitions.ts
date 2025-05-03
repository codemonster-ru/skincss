import transitionBehavior from './transitions/transitionBehavior';
import transitionDuration from './transitions/transitionDuration';
import transitionProperty from './transitions/transitionProperty';
import transitionTimingFunction from './transitions/transitionTimingFunction';

export default {
    ...transitionBehavior,
    ...transitionDuration,
    ...transitionProperty,
    ...transitionTimingFunction,
};
