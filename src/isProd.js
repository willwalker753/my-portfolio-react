require('dotenv').config();

const isProd = () => {
    let check = false;
    if (process.env.NODE_ENV !== 'development') {
        check = true;
    } 
    return check;
}

export default isProd;