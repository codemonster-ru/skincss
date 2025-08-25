export default {
    'ol,ul': {
        margin: '0',
        padding: '0',
        listStyle: 'none',
    },
    'img,video': {
        height: 'auto',
        maxWidth: '100%',
    },
    '*,::before,::after': {
        borderWidth: '0',
        borderStyle: 'solid',
        borderColor: '#000',
    },
    'h1,h2,h3,h4,h5,h6': {
        fontSize: 'inherit',
        fontWeight: 'inherit',
    },
    'img,svg,video,canvas,audio,iframe,embed,object': {
        display: 'block',
        verticalAlign: 'middle',
    },
    'blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre': {
        margin: '0',
    },
} satisfies RawStylesType;
