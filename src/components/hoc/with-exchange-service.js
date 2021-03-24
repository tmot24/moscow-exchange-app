import React from 'react';
import ExchangeServiceContext from "../exchange-service-context/exchange-service-context";

const WithExchangeService = () => (Wrapped) => {
    return (props) => {
        return (
            <ExchangeServiceContext.Consumer>
                {
                    (ExchangeService) => {
                        return <Wrapped {...props} ExchangeService={ExchangeService}/>;
                    }
                }
            </ExchangeServiceContext.Consumer>
        );
    };
};

export default WithExchangeService;