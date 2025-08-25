export default {
    'mask-none': {
        maskImage: 'none',
    },
    'mask-radial-circle': {
        '--mask-radial-shape': 'circle',
    },
    'mask-radial-ellipse': {
        '--mask-radial-shape': 'ellipse',
    },
    'mask-radial-closest-corner': {
        '--mask-radial-size': 'closest-corner',
    },
    'mask-radial-closest-side': {
        '--mask-radial-size': 'closest-side',
    },
    'mask-radial-farthest-corner': {
        '--mask-radial-size': 'farthest-corner',
    },
    'mask-radial-farthest-side': {
        '--mask-radial-size': 'farthest-side',
    },
    'mask-radial-at-top-left': {
        '--mask-radial-position': 'top left',
    },
    'mask-radial-at-top': {
        '--mask-radial-position': 'top',
    },
    'mask-radial-at-top-right': {
        '--mask-radial-position': 'top right',
    },
    'mask-radial-at-left': {
        '--mask-radial-position': 'left',
    },
    'mask-radial-at-center': {
        '--mask-radial-position': 'center',
    },
    'mask-radial-at-right': {
        '--mask-radial-position': 'right',
    },
    'mask-radial-at-bottom-left': {
        '--mask-radial-position': 'bottom left',
    },
    'mask-radial-at-bottom': {
        '--mask-radial-position': 'bottom',
    },
    'mask-radial-at-bottom-right': {
        '--mask-radial-position': 'bottom right',
    },
    arbitraryStyles: {
        'mask-(<variable>)': {
            maskImage: 'var(<variable>)',
        },
        'mask-[<value>]': {
            maskImage: '<value>',
        },
        'mask-linear-<number>': {
            maskImage:
                'linear-gradient(<number>deg, black var(--mask-linear-from)), transparent var(--mask-linear-to))',
        },
        '-mask-linear-<number>': {
            maskImage:
                'linear-gradient(calc(<number>deg * -1), black var(--mask-linear-from)), transparent var(--mask-linear-to))',
        },
        'mask-linear-from-<number>': {
            maskImage:
                'linear-gradient(var(--mask-linear-position), black calc(var(--spacing * <number>)), transparent var(--mask-linear-to))',
        },
        'mask-linear-from-<percentage>': {
            maskImage:
                'linear-gradient(var(--mask-linear-position), black <percentage>, transparent var(--mask-linear-to))',
        },
        'mask-linear-from-<color>': {
            maskImage:
                'linear-gradient(var(--mask-linear-position), <color> var(--mask-linear-from), transparent var(--mask-linear-to))',
        },
        'mask-linear-from-(<variable>)': {
            maskImage:
                'linear-gradient(var(--mask-linear-position), black <variable>, transparent var(--mask-linear-to))',
        },
        'mask-linear-from-[<value>]': {
            maskImage: 'linear-gradient(var(--mask-linear-position), black <value>, transparent var(--mask-linear-to))',
        },
        'mask-linear-to-<number>': {
            maskImage:
                'linear-gradient(var(--mask-linear-position), black var(--mask-linear-from), transparent calc(var(--spacing * <number>)))',
        },
        'mask-linear-to-<percentage>': {
            maskImage:
                'linear-gradient(var(--mask-linear-position), black var(--mask-linear-from), transparent <percentage>)',
        },
        'mask-linear-to-<color>': {
            maskImage:
                'linear-gradient(var(--mask-linear-position), black var(--mask-linear-from), <color> var(--mask-linear-to))',
        },
        'mask-linear-to-(<variable>)': {
            maskImage:
                'linear-gradient(var(--mask-linear-position), black var(--mask-linear-from), transparent var(<variable>))',
        },
        'mask-linear-to-[<value>]': {
            maskImage:
                'linear-gradient(var(--mask-linear-position), black var(--mask-linear-from), transparent <value>)',
        },
        'mask-t-from-<number>': {
            maskImage: 'linear-gradient(to top, black calc(var(--spacing * <number>)), transparent var(--mask-top-to))',
        },
        'mask-t-from-<percentage>': {
            maskImage: 'linear-gradient(to top, black <percentage>, transparent var(--mask-top-to))',
        },
        'mask-t-from-<color>': {
            maskImage: 'linear-gradient(to top, <color> var(--mask-top-from), transparent var(--mask-top-to))',
        },
        'mask-t-from-(<variable>)': {
            maskImage: 'linear-gradient(to top, black var(<variable>), transparent var(--mask-top-to))',
        },
        'mask-t-from-[<value>]': {
            maskImage: 'linear-gradient(to top, black <value>, transparent var(--mask-top-to))',
        },
        'mask-t-to-<number>': {
            maskImage:
                'linear-gradient(to top, black var(--mask-top-from), transparent calc(var(--spacing * <number>))',
        },
        'mask-t-to-<percentage>': {
            maskImage: 'linear-gradient(to top, black var(--mask-top-from), transparent <percentage>)',
        },
        'mask-t-to-<color>': {
            maskImage: 'linear-gradient(to top, black var(--mask-top-from), <color> var(--mask-top-to))',
        },
        'mask-t-to-(<variable>)': {
            maskImage: 'linear-gradient(to top, black var(--mask-top-from), transparent var(<variable>))',
        },
        'mask-t-to-[<value>]': {
            maskImage: 'linear-gradient(to top, black var(--mask-top-from), transparent <value>)',
        },
        'mask-r-from-<number>': {
            maskImage:
                'linear-gradient(to right, black calc(var(--spacing * <number>)), transparent var(--mask-right-to))',
        },
        'mask-r-from-<percentage>': {
            maskImage: 'linear-gradient(to right, black <percentage>, transparent var(--mask-right-to))',
        },
        'mask-r-from-<color>': {
            maskImage: 'linear-gradient(to right, <color> var(--mask-right-from), transparent var(--mask-right-to))',
        },
        'mask-r-from-(<variable>)': {
            maskImage: 'linear-gradient(to right, black var(<variable>), transparent var(--mask-right-to))',
        },
        'mask-r-from-[<value>]': {
            maskImage: 'linear-gradient(to right, black <value>, transparent var(--mask-right-to))',
        },
        'mask-r-to-<number>': {
            maskImage:
                'linear-gradient(to right, black var(--mask-right-from), transparent calc(var(--spacing * <number>))',
        },
        'mask-r-to-<percentage>': {
            maskImage: 'linear-gradient(to right, black var(--mask-right-from), transparent <percentage>)',
        },
        'mask-r-to-<color>': {
            maskImage: 'linear-gradient(to right, black var(--mask-right-from), <color> var(--mask-right-to))',
        },
        'mask-r-to-(<variable>)': {
            maskImage: 'linear-gradient(to right, black var(--mask-right-from), transparent var(<variable>))',
        },
        'mask-r-to-[<value>]': {
            maskImage: 'linear-gradient(to right, black var(--mask-right-from), transparent <value>)',
        },
        'mask-b-from-<number>': {
            maskImage:
                'linear-gradient(to bottom, black calc(var(--spacing * <number>)), transparent var(--mask-bottom-to))',
        },
        'mask-b-from-<percentage>': {
            maskImage: 'linear-gradient(to bottom, black <percentage>, transparent var(--mask-bottom-to))',
        },
        'mask-b-from-<color>': {
            maskImage: 'linear-gradient(to bottom, <color> var(--mask-bottom-from), transparent var(--mask-bottom-to))',
        },
        'mask-b-from-(<variable>)': {
            maskImage: 'linear-gradient(to bottom, black var(<variable>), transparent var(--mask-bottom-to))',
        },
        'mask-b-from-[<value>]': {
            maskImage: 'linear-gradient(to bottom, black <value>, transparent var(--mask-bottom-to))',
        },
        'mask-b-to-<number>': {
            maskImage:
                'linear-gradient(to bottom, black var(--mask-bottom-from), transparent calc(var(--spacing * <number>))',
        },
        'mask-b-to-<percentage>': {
            maskImage: 'linear-gradient(to bottom, black var(--mask-bottom-from), transparent <percentage>)',
        },
        'mask-b-to-<color>': {
            maskImage: 'linear-gradient(to bottom, black var(--mask-bottom-from), <color> var(--mask-bottom-to))',
        },
        'mask-b-to-(<variable>)': {
            maskImage: 'linear-gradient(to bottom, black var(--mask-bottom-from), transparent var(<variable>))',
        },
        'mask-b-to-[<value>]': {
            maskImage: 'linear-gradient(to bottom, black var(--mask-bottom-from), transparent <value>)',
        },
        'mask-l-from-<number>': {
            maskImage:
                'linear-gradient(to left, black calc(var(--spacing * <number>)), transparent var(--mask-left-to))',
        },
        'mask-l-from-<percentage>': {
            maskImage: 'linear-gradient(to left, black <percentage>, transparent var(--mask-left-to))',
        },
        'mask-l-from-<color>': {
            maskImage: 'linear-gradient(to left, <color> var(--mask-left-from), transparent var(--mask-left-to))',
        },
        'mask-l-from-(<variable>)': {
            maskImage: 'linear-gradient(to left, black var(<variable>), transparent var(--mask-left-to))',
        },
        'mask-l-from-[<value>]': {
            maskImage: 'linear-gradient(to left, black <value>, transparent var(--mask-left-to))',
        },
        'mask-l-to-<number>': {
            maskImage:
                'linear-gradient(to left, black var(--mask-left-from), transparent calc(var(--spacing * <number>))',
        },
        'mask-l-to-<percentage>': {
            maskImage: 'linear-gradient(to bottom, black var(--mask-left-from), transparent <percentage>)',
        },
        'mask-l-to-<color>': {
            maskImage: 'linear-gradient(to bottom, black var(--mask-left-from), <color> var(--mask-left-to))',
        },
        'mask-l-to-(<variable>)': {
            maskImage: 'linear-gradient(to left, black var(--mask-left-from), transparent var(<variable>))',
        },
        'mask-l-to-[<value>]': {
            maskImage: 'linear-gradient(to left, black var(--mask-left-from), transparent <value>)',
        },
        'mask-y-from-<number>': {
            maskImage:
                'linear-gradient(to top, black calc(var(--spacing * <number>)), transparent var(--mask-top-to)), linear-gradient(to bottom, black calc(var(--spacing * <number>)), transparent var(--mask-bottom-to))',
            maskComposite: 'intersect',
        },
        'mask-y-from-<percentage>': {
            maskImage:
                'linear-gradient(to top, black <percentage>, transparent var(--mask-top-to)), linear-gradient(to bottom, black <percentage>, transparent var(--mask-bottom-to))',
            maskComposite: 'intersect',
        },
        'mask-y-from-<color>': {
            maskImage:
                'linear-gradient(to top, <color> var(--mask-top-from), transparent var(--mask-top-to)), linear-gradient(to bottom, <color> var(--mask-bottom-from), transparent var(--mask-bottom-to))',
            maskComposite: 'intersect',
        },
        'mask-y-from-(<variable>)': {
            maskImage:
                'linear-gradient(to top, black var(<variable>), transparent var(--mask-top-to)), linear-gradient(to bottom, black var(<variable>), transparent var(--mask-bottom-to))',
            maskComposite: 'intersect',
        },
        'mask-y-from-[<value>]': {
            maskImage:
                'linear-gradient(to top, black <value>, transparent var(--mask-top-to)), linear-gradient(to bottom, black <value>, transparent var(--mask-bottom-to))',
            maskComposite: 'intersect',
        },
        'mask-y-to-<number>': {
            maskImage:
                'linear-gradient(to top, black var(--mask-top-from), transparent calc(var(--spacing * <number>)), linear-gradient(to bottom, black var(--mask-bottom-from), transparent calc(var(--spacing * <number>))',
            maskComposite: 'intersect',
        },
        'mask-y-to-<percentage>': {
            maskImage:
                'linear-gradient(to bottom, black var(--mask-top-from), transparent <percentage>), linear-gradient(to bottom, black var(--mask-bottom-from), transparent <percentage>)',
            maskComposite: 'intersect',
        },
        'mask-y-to-<color>': {
            maskImage:
                'linear-gradient(to bottom, black var(--mask-top-from), <color> var(--mask-top-to)), linear-gradient(to bottom, black var(--mask-bottom-from), <color> var(--mask-bottom-to))',
            maskComposite: 'intersect',
        },
        'mask-y-to-(<variable>)': {
            maskImage:
                'linear-gradient(to top, black var(--mask-top-from), transparent var(<variable>)),linear-gradient(to bottom, black var(--mask-bottom-from), transparent var(<variable>))',
            maskComposite: 'intersect',
        },
        'mask-y-to-[<value>]': {
            maskImage:
                'linear-gradient(to top, black var(--mask-top-from), transparent <value>),linear-gradient(to bottom, black var(--mask-bottom-from), transparent <value>)',
            maskComposite: 'intersect',
        },
        'mask-x-from-<number>': {
            maskImage:
                'linear-gradient(to right, black calc(var(--spacing * <number>)), transparent var(--mask-right-to)), linear-gradient(to left, black calc(var(--spacing * <number>)), transparent var(--mask-left-to))',
            maskComposite: 'intersect',
        },
        'mask-x-from-<percentage>': {
            maskImage:
                'linear-gradient(to right, black <percentage>, transparent var(--mask-right-to)), linear-gradient(to left, black <percentage>, transparent var(--mask-left-to))',
            maskComposite: 'intersect',
        },
        'mask-x-from-<color>': {
            maskImage:
                'linear-gradient(to right, <color> var(--mask-right-from), transparent var(--mask-right-to)), linear-gradient(to left, <color>  var(--mask-left-from), transparent var(--mask-left-to))',
            maskComposite: 'intersect',
        },
        'mask-x-from-(<variable>)': {
            maskImage:
                'linear-gradient(to right, black var(<variable>), transparent var(--mask-right-to)), linear-gradient(to left, black var(<variable>), transparent var(--mask-left-to))',
            maskComposite: 'intersect',
        },
        'mask-x-from-[<value>]': {
            maskImage:
                'linear-gradient(to right, black <value>, transparent var(--mask-right-to)), linear-gradient(to left, black <value>, transparent var(--mask-left-to))',
            maskComposite: 'intersect',
        },
        'mask-x-to-<number>': {
            maskImage:
                'linear-gradient(to right, black var(--mask-right-from), transparent calc(var(--spacing * <number>)), linear-gradient(to left, black var(--mask-left-from), transparent calc(var(--spacing * <number>))',
            maskComposite: 'intersect',
        },
        'mask-x-to-<percentage>': {
            maskImage:
                'linear-gradient(to left, black var(--mask-right-from), transparent <percentage>), linear-gradient(to left, black var(--mask-left-from), transparent <percentage>)',
            maskComposite: 'intersect',
        },
        'mask-x-to-<color>': {
            maskImage:
                'linear-gradient(to left, black var(--mask-right-from), <color> var(--mask-right-to)), linear-gradient(to left, black var(--mask-left-from), <color> var(--mask-left-to))',
            maskComposite: 'intersect',
        },
        'mask-x-to-(<variable>)': {
            maskImage:
                'linear-gradient(to right, black var(--mask-right-from), transparent var(<variable>)),linear-gradient(to left, black var(--mask-left-from), transparent var(<variable>))',
            maskComposite: 'intersect',
        },
        'mask-x-to-[<value>]': {
            maskImage:
                'linear-gradient(to right, black var(--mask-right-from), transparent <value>),linear-gradient(to left, black var(--mask-left-from), transparent <value>)',
            maskComposite: 'intersect',
        },
        'mask-radial-<value>': {
            maskImage: 'radial-gradient(<value>)',
        },
        'mask-radial-<size>': {
            '--mask-radial-size': '<size>',
        },
        'mask-radial-[<size>_<size>]': {
            '--mask-radial-size': '<size> <size>',
        },
        'mask-radial-from-<number>': {
            maskImage:
                'radial-gradient(var(--mask-radial-shape) var(--mask-radial-size) at var(--mask-radial-position), black calc(var(--spacing * <number>)), transparent var(--mask-radial-to))',
        },
        'mask-radial-from-<percentage>': {
            maskImage:
                'radial-gradient(var(--mask-radial-shape) var(--mask-radial-size) at var(--mask-radial-position), black <percentage>, transparent var(--mask-radial-to))',
        },
        'mask-radial-from-<color>': {
            maskImage:
                'radial-gradient(var(--mask-radial-shape) var(--mask-radial-size) at var(--mask-radial-position), <color> var(--mask-radial-from), transparent var(--mask-radial-to))',
        },
        'mask-radial-from-(<variable>)': {
            maskImage:
                'radial-gradient(var(--mask-radial-shape) var(--mask-radial-size) at var(--mask-radial-position), black var(<variable>), transparent var(--mask-radial-to))',
        },
        'mask-radial-from-[<value>]': {
            maskImage:
                'radial-gradient(var(--mask-radial-shape) var(--mask-radial-size) at var(--mask-radial-position), black <value>, transparent var(--mask-radial-to))',
        },
        'mask-radial-to-<number>': {
            maskImage:
                'radial-gradient(var(--mask-radial-shape) var(--mask-radial-size) at var(--mask-radial-position), black var(--mask-radial-from), transparent calc(var(--spacing * <number>)))',
        },
        'mask-radial-to-<percentage>': {
            maskImage:
                'radial-gradient(var(--mask-radial-shape) var(--mask-radial-size) at var(--mask-radial-position), black var(--mask-radial-from), transparent <percentage>)',
        },
        'mask-radial-to-<color>': {
            maskImage:
                'radial-gradient(var(--mask-radial-shape) var(--mask-radial-size) at var(--mask-radial-position), black var(--mask-radial-from), <color> var(--mask-radial-to))',
        },
        'mask-radial-to-(<variable>)': {
            maskImage:
                'radial-gradient(var(--mask-radial-shape) var(--mask-radial-size) at var(--mask-radial-position), black var(--mask-radial-from), transparent var(<variable>))',
        },
        'mask-radial-to-[<value>]': {
            maskImage:
                'radial-gradient(var(--mask-radial-shape) var(--mask-radial-size) at var(--mask-radial-position), black var(--mask-radial-from), transparent <value>)',
        },
        'mask-conic-<number>': {
            maskImage:
                'conic-gradient(from <number>deg, black var(--mask-conic-from), transparent var(--mask-conic-to))',
        },
        '-mask-conic-<number>': {
            maskImage:
                'conic-gradient(from calc(<number>deg * -1), black var(--mask-conic-from), transparent var(--mask-conic-to))',
        },
        'mask-conic-from-<number>': {
            maskImage:
                'conic-gradient(from var(--mask-conic-position), black calc(var(--spacing * <number>)), transparent var(--mask-conic-to))',
        },
        'mask-conic-from-<percentage>': {
            maskImage:
                'conic-gradient(from var(--mask-conic-position), black <percentage>, transparent var(--mask-conic-to))',
        },
        'mask-conic-from-<color>': {
            maskImage:
                'conic-gradient(from var(--mask-conic-position), <color> var(--mask-conic-from), transparent var(--mask-conic-to))',
        },
        'mask-conic-from-(<variable>)': {
            maskImage:
                'conic-gradient(from var(--mask-conic-position), black var(<variable>), transparent var(--mask-conic-to))',
        },
        'mask-conic-from-[<value>]': {
            maskImage:
                'conic-gradient(from var(--mask-conic-position), black <value>, transparent var(--mask-conic-to))',
        },
        'mask-conic-to-<number>': {
            maskImage:
                'conic-gradient(from var(--mask-conic-position), black var(--mask-conic-from), transparent calc(var(--spacing * <number>))',
        },
        'mask-conic-to-<percentage>': {
            maskImage:
                'conic-gradient(from var(--mask-conic-position), black var(--mask-conic-from), transparent <percentage>)',
        },
        'mask-conic-to-<color>': {
            maskImage:
                'conic-gradient(from var(--mask-conic-position), black var(--mask-conic-from), <color> var(--mask-conic-to)',
        },
        'mask-conic-to-(<variable>)': {
            maskImage:
                'conic-gradient(from var(--mask-conic-position), black var(--mask-conic-from), transparent var(<variable>)',
        },
        'mask-conic-to-[<value>]': {
            maskImage:
                'conic-gradient(from var(--mask-conic-position), black var(--mask-conic-from), transparent <value>)',
        },
    },
} satisfies RawStylesType;
