import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const jssStyle = (theme: Theme) =>
    createStyles({
        pageTitle: {
            textAlign: 'center',
            marginTop: '160px',
            marginBottom: '180px',
            fontWeight: 400
        },
        subTitle: {
            textAlign: 'center',
            marginTop: '25px',
            fontWeight: 600

        },
        pageSubTitleWithSignature: {
            textAlign: 'center',
            // marginTop: '140px',
            fontWeight: 600

        },
        pageSubTitle_signature: {
            textAlign: 'center',
            maxWidth: '500px',
            // marginBottom: '20px',
        },
        page: {
            maxWidth: '750px',
            margin: 'auto',
        },
        blockBaseInfo: {
            hight: '400px',
            marginBottom: '120px',
            marginTop: '40px',
            padding: '30px',

        },
        hikeName: {
            marginTop: '20px',
        },
        subscription: {
            marginTop: '5px',
        },
        textEditorDiscription: {
            marginTop: '110px',
        },
        textEditorTeam: {
            marginTop: '40px',
        },
        titleBlock: {
            textAlign: 'center'
        },
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
        tentIcon: {
            height: '100px',
            '& path': {
                stroke: '#e5e5e5',
                strokeWidth: '10px',
            }
        },
        visibilityCheck: {
            marginTop: '30px',
            marginBottim: '20px',
        },
        visabilityCheckLabel: {
            fontWeight: 500,
            marginBottom: '-2px'
        },
        ecoCheck: {
            marginBottom: '-15px'

        },
        ecoCheckLabel: {
            marginBottom: '-2px'
        },
        buttonCreate: {
            borderRadius: '20px',
            width: '100%',
            maxWidth: '250px',
            margin: 'auto',
            // marginTop: '80px',
            marginBottom: '150px'
        },
        difficultyTitle: {
            marginRight: '10px'
        },
        difficulty: {
            maxWidth: '150px',
            width: '100%',
        },

        regionCountryBox: {
            marginTop: '5px',
        },

        regionLine: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        countryRegionSelect: {
            width: '48%'
        },

        EcoTypeDifficultBox: {
            marginTop: '70px',
        },
        diffTypeEcoLine: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        datePicker: {
            width: '48%'
        }


    })


export default makeStyles(jssStyle);

