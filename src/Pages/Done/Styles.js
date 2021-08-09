import { makeStyles } from "@material-ui/styles";

const makeStyle = makeStyles({

    Dcontainer: {
        fontFamily: 'Lucida Handwriting,cursive',
        fontSize: '30px',
        border: '1px solid',
        borderColor: '#c299ff',
        borderRadius: '20px',
        width: '50%',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '5px'
    },

    doneTask: {
        border: '1px solid',
        borderColor: '#c299ff',
        borderRadius: '20px',
        width: '100%',
        marginBottom: '7px',
        paddingLeft: '10px',
    },

    title: {
        fontFamily: 'Lucida Handwriting, cursive',
        fontSize: '20px',
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '10px'
    },

    btn: {
        backgroundImage: 'linear-gradient(140deg, #c299ff 0%, #a366ff 50%, #8533ff 75%)',
        '&:focus': {
            outline: 'unset'
        }
    },

    tasksCont: {
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

export default makeStyle;