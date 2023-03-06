import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
    ul {
        display: flex;
        padding: 0.5rem;
        gap: 1rem;
        justify-content: center;
    }
`
export interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
    const {pathname} = useLocation();
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to="/" className={pathname === '/' ? 'font-bold' : ''}>Main</Link>
                </li>
                <li>
                    <Link to="/second" className={pathname === '/second' ? 'font-bold' : ''}>Second</Link>
                </li>
            </ul>
        </Wrapper>
    );
};
