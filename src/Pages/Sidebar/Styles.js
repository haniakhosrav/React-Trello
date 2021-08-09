import { makeStyles } from "@material-ui/styles";

const makeStyle = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh',
        background: '#fafafa',
        padding: '20px',
    },

    base: {
        '&:focus': {
            outline: 'unset',
        },
        '&:hover': {
            border: '1px solid',
            borderColor: '#cccccc',
        },
        width: '100%',
        padding: '5px',
        borderRadius: '20px',
        marginTop: '5px',
        display: 'flex',
        justifyContent: 'flex-start'
    },

    icon: {
        height: '20px',
        width: '20px',
        marginLeft: '12px'
    }
})

export default makeStyle;