import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

export default function Loading({ src, ...restProps }) {
    const profileImage = 'https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdweZW5Ra69F4jKL39o-nRkek0fp03WngXS4tiegd4gIiZ4I2PB8LUc6LHsWhoAlvvBKtkw754aLQEjB7cWPyZ5fSw.png?r=bf3'

    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={profileImage} data-testid="loading-picture" />
        </Spinner>
    );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
};