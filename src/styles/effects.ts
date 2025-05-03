import backgroundBlendMode from './effects/backgroundBlendMode';
import boxShadow from './effects/boxShadow';
import maskClip from './effects/maskClip';
import mixBlendMode from './effects/mixBlendMode';
import opacity from './effects/opacity';
import textShadow from './effects/textShadow';

export default {
    ...backgroundBlendMode,
    ...boxShadow,
    ...maskClip,
    ...mixBlendMode,
    ...opacity,
    ...textShadow,
};
