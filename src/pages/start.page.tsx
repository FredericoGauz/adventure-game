import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Chat } from '../components/chat/chat/chat.cp';

export const Wrapper = styled.div`
    background: #000000;
    border: 1px solid #916513;
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    .chat-wrapper {
        .title {
            color: #dbdbdb;
            font-family: 'Playfair Display', serif;
            font-size: 1.7rem;
            letter-spacing: 3.2px;
            padding: 0.7rem 0.2rem;
        }
    }
`;

export interface StartPageProps {}

export const StartPage = observer(({}: StartPageProps) => {
    return (
        <Wrapper>
            <div className="chat-wrapper">
                <div className="title">Quest for Adventure</div>
                <Chat />
            </div>
        </Wrapper>
    );
});
