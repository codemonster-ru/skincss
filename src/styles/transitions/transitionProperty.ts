export default {
    transition: {
        transitionProperty:
            'color, background-color, border-color, text-decoration-color, fill, stroke, --gradient-from, --gradient-via, --gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter',
        transitionTimingFunction: 'var(--default-transition-timing-function)',
        transitionDuration: 'var(--default-transition-duration)',
    },
    'transition-all': {
        transitionProperty: 'all',
        transitionTimingFunction: 'var(--default-transition-timing-function)',
        transitionDuration: 'var(--default-transition-duration)',
    },
    'transition-colors': {
        transitionProperty:
            'color, background-color, border-color, text-decoration-color, fill, stroke, --gradient-from, --gradient-via, --gradient-to',
        transitionTimingFunction: 'var(--default-transition-timing-function)',
        transitionDuration: 'var(--default-transition-duration)',
    },
    'transition-opacity': {
        transitionProperty: 'opacity',
        transitionTimingFunction: 'var(--default-transition-timing-function)',
        transitionDuration: 'var(--default-transition-duration)',
    },
    'transition-shadow': {
        transitionProperty: 'box-shadow',
        transitionTimingFunction: 'var(--default-transition-timing-function)',
        transitionDuration: 'var(--default-transition-duration)',
    },
    'transition-transform': {
        transitionProperty: 'transform, translate, scale, rotate',
        transitionTimingFunction: 'var(--default-transition-timing-function)',
        transitionDuration: 'var(--default-transition-duration)',
    },
    'transition-none': {
        transitionProperty: 'none',
    },
};
