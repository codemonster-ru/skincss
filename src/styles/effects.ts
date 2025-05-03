import backgroundBlendMode from './effects/backgroundBlendMode';
import boxShadow from './effects/boxShadow';
import mixBlendMode from './effects/mixBlendMode';
import opacity from './effects/opacity';
import textShadow from './effects/textShadow';

export default {
    ...backgroundBlendMode,
    ...boxShadow,
    ...mixBlendMode,
    ...opacity,
    ...textShadow,
};
