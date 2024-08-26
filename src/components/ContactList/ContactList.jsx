import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.contactList}>
            {contacts.map(({ id, name, number }) => {
                return (
                    <li key={id}>
                        <Contact
                            name={name}
                            number={number}
                            id={id}
                            onDeleteContact={onDeleteContact}
                        />
                    </li>
                )
            })}
        </ul>
    );
}

export default ContactList