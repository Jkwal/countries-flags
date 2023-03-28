import {Info} from "./Info";
import {useDetails} from "./use-details";
import {NavigateFunction} from "react-router-dom";

interface CountryDetailsProps {
    navigate: NavigateFunction,
    name?: string,
}

export const CountryDetails = ({name = '', navigate}: CountryDetailsProps) => {
    const {status, error, currentCountry} = useDetails(name);
    return (
        <>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </>
    )
}