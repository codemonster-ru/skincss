export default {
    'bg-none': {
        backgroundImage: 'none',
    },
    'bg-linear-to-t': {
        backgroundImage: 'linear-gradient(to top, var(--gradient-stops))',
    },
    'bg-linear-to-tr': {
        backgroundImage: 'linear-gradient(to top right, var(--gradient-stops))',
    },
    'bg-linear-to-r': {
        backgroundImage: 'linear-gradient(to right, var(--gradient-stops))',
    },
    'bg-linear-to-br': {
        backgroundImage: 'linear-gradient(to bottom right, var(--gradient-stops))',
    },
    'bg-linear-to-b': {
        backgroundImage: 'linear-gradient(to bottom, var(--gradient-stops))',
    },
    'bg-linear-to-bl': {
        backgroundImage: 'linear-gradient(to bottom left, var(--gradient-stops))',
    },
    'bg-linear-to-l': {
        backgroundImage: 'linear-gradient(to left, var(--gradient-stops))',
    },
    'bg-linear-to-tl': {
        backgroundImage: 'linear-gradient(to top left, var(--gradient-stops))',
    },
    'bg-radial': {
        backgroundImage: 'radial-gradient(in oklab, var(--gradient-stops))',
    },
    arbitraryStyles: {
        'bg-(image:<variable>)': {
            backgroundImage: 'var(<variable>)',
        },
        'bg-[<value>]': {
            backgroundImage: '<value>',
        },
        'bg-linear-<angle>': {
            backgroundImage: 'linear-gradient(<angle> in oklab, var(--gradient-stops))',
        },
        '-bg-linear-<angle>': {
            backgroundImage: 'linear-gradient(-<angle> in oklab, var(--gradient-stops))',
        },
        'bg-linear-(<variable>)': {
            backgroundImage: 'linear-gradient(var(--gradient-stops, var(<variable>)))',
        },
        'bg-linear-[<value>]': {
            backgroundImage: 'linear-gradient(var(--gradient-stops, <value>))',
        },
        'bg-radial-(<variable>)': {
            backgroundImage: 'radial-gradient(var(--gradient-stops,  var(<variable>)))',
        },
        'bg-radial-[<value>]': {
            backgroundImage: 'radial-gradient(var(--gradient-stops, <value>))',
        },
        'bg-conic-<angle>': {
            backgroundImage: 'conic-gradient(from <angle> in oklab, var(--gradient-stops))',
        },
        '-bg-conic-<angle>': {
            backgroundImage: 'conic-gradient(from -<angle> in oklab, var(--gradient-stops))',
        },
        'bg-conic-(<variable>)': {
            backgroundImage: 'var(<variable>)',
        },
        'bg-conic-[<value>]': {
            backgroundImage: '<value>',
        },
        'from-<color>': {
            '--gradient-from': '<color>',
        },
        'from-<percentage>': {
            '--gradient-from-position': '<percentage>',
        },
        'from-(<variable>)': {
            '--gradient-from': 'var(<variable>)',
        },
        'from-[<value>]': {
            '--gradient-from': '<value>',
        },
        'via-<color>': {
            '--gradient-via': '<color>',
        },
        'via-<percentage>': {
            '--gradient-via-position': '<percentage>',
        },
        'via-(<variable>)': {
            '--gradient-via': 'var(<variable>)',
        },
        'via-[<value>]': {
            '--gradient-via': '<value>',
        },
        'to-<color>': {
            '--gradient-to': '<color>',
        },
        'to-<percentage>': {
            '--gradient-to-position': '<percentage>',
        },
        'to-(<variable>)': {
            '--gradient-to': 'var(<variable>)',
        },
        'to-[<value>]': {
            '--gradient-to': '<value>',
        },
    },
} satisfies RawStylesType;
