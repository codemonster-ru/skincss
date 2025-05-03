import transitionBehavior from './transitions/transitionBehavior';
import transitionDelay from './transitions/transitionDelay';
import transitionDuration from './transitions/transitionDuration';
import transitionProperty from './transitions/transitionProperty';
import transitionTimingFunction from './transitions/transitionTimingFunction';

export default {
    ...transitionBehavior,
    ...transitionDelay,
    ...transitionDuration,
    ...transitionProperty,
    ...transitionTimingFunction,
};
