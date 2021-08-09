import { makeStyles } from "@material-ui/styles";

const makeStyle = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },

    main: {
        flex: 1,
    },

    sidebar: {
        width: '20%',
        height: '100%',
        overflow: 'hidden',
    },

    header: {
        height: '50px',
        backgroundImage: 'linear-gradient(140deg, #c299ff 0%, #a366ff 50%, #8533ff 75%)',
        position: 'relative',
        position: 'sticky',
        top: 0,
        zIndex: 1
    },

    icon: {
        color: '#000000',
        height: '30px', 
        width: '30px',
        marginTop: '10px',
        marginLeft: '10px',
        '&:focus': {
            outline: 'unset',
        },
    },

    title: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Brush Script MT, Brush Script Std, cursive',
        color: '#000000',
        fontSize: '35px',
        position: 'absolute',
        top: 0,
        left: '45%'
    },

    background: {
        height: '90%',
        width: '60%'
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    enter: {
        backgroundImage: 'linear-gradient(140deg, #c299ff 0%, #a366ff 50%, #8533ff 75%)',
        '&:focus': {
            outline: 'unset'
        }
    },

    title2: {
        fontFamily: 'Lucida Handwriting,cursive',
        fontSize: '30px',
        marginTop: '5px',
        textAlign: 'center'
    },
})

export default makeStyle;