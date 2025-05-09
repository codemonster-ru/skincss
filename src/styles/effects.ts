import backgroundBlendMode from './effects/backgroundBlendMode';
import boxShadow from './effects/boxShadow';
import maskClip from './effects/maskClip';
import maskComposite from './effects/maskComposite';
import maskImage from './effects/maskImage';
import maskMode from './effects/maskMode';
import maskOrigin from './effects/maskOrigin';
import maskPosition from './effects/maskPosition';
import maskRepeat from './effects/maskRepeat';
import maskSize from './effects/maskSize';
import maskType from './effects/maskType';
import mixBlendMode from './effects/mixBlendMode';
import opacity from './effects/opacity';
import textShadow from './effects/textShadow';

export default {
    ...backgroundBlendMode,
    ...boxShadow,
    ...maskClip,
    ...maskComposite,
    ...maskImage,
    ...maskMode,
    ...maskOrigin,
    ...maskPosition,
    ...maskRepeat,
    ...maskSize,
    ...maskType,
    ...mixBlendMode,
    ...opacity,
    ...textShadow,
};
