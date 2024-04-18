export const Wrapper = {
    display: 'flex',
    maxWidth: '1080px',
    width: '90%',
    margin: '50px auto',
    padding: '60px 60px 10px 60px',
    backgroundColor: '#000000',
    borderRadius: '10px',
    '@media (max-width: 890px)': {
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    '@media (max-width: 590px)': {
        padding: '60px 30px 10px 30px',
    },
    '@media (max-width: 440px)': {
        padding: '70px 20px 10px 20px',
    },
};

export const WrapLeft = {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    color: '#E1E1E1',
    fontSize: '16px',
    paddingRight: '60px',
    '@media (max-width: 1100px)': {
        width: '70%',
        paddingRight: '30px',
    },
    '@media (max-width: 960px)': {
        width: '80%',
        paddingRight: '20px',
    },
    '@media (max-width: 890px)': {
        width: '100%',
    },
    '@media (max-width: 440px)': {
        fontSize: '14px',
    },
};

export const How = {
    fontSize: '26px', fontWeight: '800', color: '#32E7FF'
};

export const ContractAddress = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#C3F9FD',
    padding: '10px',
    borderRadius: '3px',
    width: 'auto',
    marginBottom: '10px',
};

export const WrapRight = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '150px',
    width: '400px',
    height: '400px',
    '@media (max-width: 1100px)': {
        width: '300px',
        height: '300px',
    },
    '@media (max-width: 890px)': {
        padding: '20px 0'
    },
    '@media (max-width: 590px)': {
        width: '200px',
        height: '200px',
    },
    '@media (max-width: 440px)': {
        width: '150px',
        height: '150px',
    },
};

export const Img = {
    width: '100%', borderRadius: '10px'
}