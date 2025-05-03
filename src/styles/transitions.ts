import transitionBehavior from './transitions/transitionBehavior';
import transitionDuration from './transitions/transitionDuration';
import transitionProperty from './transitions/transitionProperty';

export default {
    ...transitionBehavior,
    ...transitionDuration,
    ...transitionProperty,
};
