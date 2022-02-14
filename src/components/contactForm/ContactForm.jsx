import styles from '../contactForm/contactForm.module.css'

const ContactForm = ({handleSubmit, handleChange}) => {
    return (
         <form onSubmit={handleSubmit} className={styles.form__style}>
          <div className={styles.form__registration}>
            <p>Name</p>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={styles.registration__input}
            />
            <p>Phone</p>
            <input
              onChange={handleChange}
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={styles.registration__input}
            />
            <button type="submit" className={styles.button__submit}>Add Contact</button>
          </div>
        </form>     
    );
  }

export default ContactForm;
