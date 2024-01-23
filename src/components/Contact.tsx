import { useState, FC } from 'react';
import '../App.css';

export const Contact: FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nMessage:\n${message}`);
        setEmail('');
        setMessage('');
        setName('');
    }

    return (
        <>
            <h2>Any questions? Contact Us!</h2>
            <form data-testid='form' onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                <label>Name:
                    <input
                        type='text'
                        data-testid='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label><br />
                <label>Email:
                    <input
                        type='email'
                        data-testid='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label><br />
                <label>Message:
                    <input
                        type='text'
                        data-testid='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label><br />
                <input type="submit" value='Submit!' className="submit" />
            </form>
        </>
    )
}