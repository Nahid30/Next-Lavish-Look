import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    navbar : {
        backgroundColor : '#E6425E',
        '& a': {
            color : '#fff', 
            marginLeft : 10,
        }
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    secTittle: {
        fontSize: '1.5rem',
        textAlign: 'center',
        color: '#E6425E', 
        fontWeight: 'lighter'
    },
    grow: {
        flexGrow: 1,
    },
    main : {
        minHeight: '80vh',
    },
    footer : {
        textAlign: 'center',
        color:'#E6425E',
        marginTop: 60,
        
    }
    
})

export default useStyles;