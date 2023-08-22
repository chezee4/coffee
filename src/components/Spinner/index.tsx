import {FC} from 'react';

import SpinnerLoading from "../../assets/img/Spinner.gif";
const Spinner: FC = () => {
    return (
        <img src={SpinnerLoading} alt="Spinner" className="absolute top-0 left-0 right-0 bottom-0 "/>
    );
};

export default Spinner;