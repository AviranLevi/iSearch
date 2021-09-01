import { createUseStyles } from 'react-jss';

export default createUseStyles({
    title: {
        fontSize: ({ fontSize }) => fontSize,
        fontWeight: ({ fontWeight }) => fontWeight
    },
});
