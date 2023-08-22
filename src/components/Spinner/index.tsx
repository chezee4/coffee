import {FC} from 'react';

import SpinnerLoading from "../../assets/img/Spinner.gif";
const Spinner: FC = () => {
    return (
        <img src={SpinnerLoading} alt="Spinner" className=" absolute z-10 w-full h-full"/>
    );
};

export default Spinner;