import React from 'react';
import styled from 'styled-components';
import AccountBoxclone from './accountbox/Accountboxclone';

const AppContainer = styled.div`
   width: 100%;
   height: 100%;
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center
`;

function Loginpage() {
    return (
        <AppContainer>
            {AccountBoxclone("signup")}
        </AppContainer>
    )
}

export default Loginpage;