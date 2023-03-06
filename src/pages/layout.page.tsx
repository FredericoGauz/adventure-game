import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    padding: 8px;
    width: 100vw;
    height: 100vh;
    background: black;
`;

export interface LayoutProps {}

export const Layout = observer(({}: LayoutProps) => {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    );
});
