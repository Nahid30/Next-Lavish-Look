import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    navbar : {
        backgroundColor : '#E6425E',
        '& a': {
            color : '#fff', 
            marginLeft : 10,
        }
    },
    main : {
        minHeight: '80vh',
    },
    footer : {
        textAlign: 'center',
        
    }
    
})

export default useStyles;