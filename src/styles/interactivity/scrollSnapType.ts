export default {
    'snap-none': {
        scrollSnapType: 'none',
    },
    'snap-x': {
        scrollSnapType: 'x var(--scroll-snap-strictness)',
    },
    'snap-y': {
        scrollSnapType: 'y var(--scroll-snap-strictness)',
    },
    'snap-both': {
        scrollSnapType: 'both var(--scroll-snap-strictness)',
    },
    'snap-mandatory': {
        '--scroll-snap-strictness': 'mandatory',
    },
    'snap-proximity': {
        '--scroll-snap-strictness': 'proximity',
    },
};
