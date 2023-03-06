import { lowerCase } from 'lodash';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { yes } from '../../../language/words.examples';

const initialMessages = [
    'Welcome Miguel!',
    'This is the start of an amazing adventure.',
    'Are you ready?',
];

export const Wrapper = styled.div`
    border: 1px solid #134e91;
    padding: 0.8em 1em;
    .messages {
        display: grid;
        align-content: start;

        gap: 0.3rem;
        width: 400px;
        height: 300px;
        padding: 0.8em 1em;

        overflow: hidden;

        &:hover {
            overflow: auto;
        }

        .message {
            color: #b9b9b9;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.85rem;
            letter-spacing: 0.05em;
        }
    }

    .input {
        input {
            width: 100%;
            padding: 0.3em;
        }
    }
`;

const chatInputFormTag = 'chat-input';

export interface ChatProps {}

export const Chat = observer(({}: ChatProps) => {
    const [messages, setMessages] = useState(initialMessages);
    const { register, watch, resetField } = useForm();
    const input = watch(chatInputFormTag);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const scrollToBottom = () => {
        console.log(messagesEndRef.current);
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const addMessage = (message: string) =>
        setMessages((messages) => [...messages, message]);
    useEffect(() => {
        if (yes.includes(lowerCase(input))) {
            addMessage(input);
            resetField(chatInputFormTag);
            addMessage('Great, your adventure begins now!');
        }

        return () => {};
    }, [input]);

    return (
        <Wrapper>
            <div className="messages">
                {messages.map((message, i) => (
                    <div key={i} className="message">
                        {message}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="input">
                <input type="text" {...register(chatInputFormTag)} />
            </div>
        </Wrapper>
    );
});
