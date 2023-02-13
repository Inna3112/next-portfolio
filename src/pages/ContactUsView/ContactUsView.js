import { useState } from 'react';
import Title from '../../components/Title/Title';
import sContainer from '../App/sass/Container.module.scss';
import api from '../../../pages/api/api';
import FormContact from './components/FormContact';
import { state } from '../../mock/mock';
import s from './sass/ContactUsView.module.scss';

function ContactUsView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [isDisable, setIsDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDisable(true);
    api.createMessage(name, email, message)
      .then(() => {
        setIsSent(true);
      })
      .catch(() => {
        setError('An error occurred');
      })
      .finally(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsDisable(false);
        setIsLoading(false);
        setTimeout(() => {
          setIsSent(false);
          setError('');
        }, 20000);
      });
  };

  return (
    <div id="contacts" className={s.contactsBlock}>
      {isLoading && <p>Is loading...</p>}
      <div className={`${sContainer.container} ${s.contactsContainer}`}>
        <Title text="Contacts" />
        <div className={s.contacts}>
          <form id="form" className={s.contactForm} onSubmit={onSubmitHandler}>
            <input
              className={s.formControl}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <input
              className={s.formControl}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <textarea
              className={s.formControl}
              placeholder="Comment"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
            <button type="submit" disabled={isDisable}>Send your message</button>
            <div id="contactsMessage" className={!error ? s.infoMessage : `${s.infoMessage} ${s.error}`}>
              {isSent ? 'Your message has been sent' : error}
            </div>
          </form>
          <div className={s.contactsInfo}>
            <h2 className={s.contactsTitle}>Get in touch</h2>
            <FormContact formInfoItems={state.formInfoItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsView;
