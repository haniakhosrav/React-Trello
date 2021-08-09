import { makeStyles } from "@material-ui/styles";

const makeStyle = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        padding: '50px'
    },

    field: {
        borderRadius: '10px',
        '&:focus': {
            outline: 'unset',
        },
        width: '100%',
        height: '100px',
        background: '#fafafa',
        borderColor: '#bfbfbf'
    },

    btn: {
        backgroundImage: 'linear-gradient(140deg, #c299ff 0%, #a366ff 50%, #8533ff 75%)',
        '&:focus': {
            outline: 'unset'
        },
        position: 'absolute',
        right: 0,
        top: '105px',
    },

    cont: {
        width: '50%',
        marginTop: '10px',
        position: 'relative',
        marginRight: 'auto',
        marginLeft: 'auto'
    },

    check: {
        height: '40px',
        width: '40px',
        cursor: 'pointer',
        '&:hover': {
            height: '50px',
            width: '50px'
        }
    },

    taskCont: {
        border: '1px solid',
        borderColor: '#c299ff',
        marginTop: '15px',
        borderRadius: '15px',
        height: '80px',
        padding: '12px'
    }
})

export default makeStyle;