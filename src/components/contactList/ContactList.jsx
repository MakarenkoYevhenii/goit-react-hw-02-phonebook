import styles from '../contactList/contactForm.module.css'

    const ContactList = ({names, removeHuman}) => {
        const elements = names.map(item => <li key={item.id} className={styles.items}>
            <p className={styles.people__items}>{item.name}: {item.number}</p> <button className={styles.form__delete__button} onClick={()=>removeHuman(item.id)}>Delete</button>
        </li>);
    
        return (
            <ul>
                {elements}
            </ul>
        )
    }

export default ContactList;
{/* <button onClick={()=>removeBook(item.id)}>Delete</button> */}