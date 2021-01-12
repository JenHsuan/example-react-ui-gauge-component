export default {
    template: {
        main: {
            color: '#ffffff',
            bg: '#000000',
            textAlign:'center'
        }
    },
    layout: {
        main: {
            display: 'grid',
            gridTemplateColumns: 'repeat(19, 1fr)',
            gridAutoRows: '200px',
            paddingLeft:'5%',
            paddingRight:'5%',
            bg: '#000'
        }
    },
    gauge:{
        leftTop: {
            position: 'relative',
            marginTop:'5%',
            marginLeft:'5%',
            gridColumnStart: 4,
            gridColumnEnd: 9,
            gridRowStart: 1,
            gridRowEnd: 3,
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            cursor: 'pointer'
        },
        leftBottom: {
            position: 'relative',
            marginTop:'15%',
            marginLeft:'5%',
            gridColumnStart: 4,
            gridColumnEnd: 9,
            gridRowStart: 3,
            gridRowEnd: 6,
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            cursor: 'pointer'
        },
        rightTop: {
            position: 'relative',
            marginTop:'5%',
            marginLeft:'5%',
            gridColumnStart: 11,
            gridColumnEnd: 16,
            gridRowStart: 1,
            gridRowEnd: 3,
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            cursor: 'pointer'
        },
        rightBottom: {
            position: 'relative',
            marginTop:'15%',
            marginLeft:'5%',
            gridColumnStart: 11,
            gridColumnEnd: 16,
            gridRowStart: 3,
            gridRowEnd: 6,
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            cursor: 'pointer'
        }
    }
};