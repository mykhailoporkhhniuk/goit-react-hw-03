import css from './Contact.module.css'

const Contact = ({ name, number, id, onDeleteContact }) => {
    return (
        <div className={css.contactWrapper}>
            <div className={css.infoWrapper}>
                <p>👤 {name}</p>
                <p>📞 {number}</p>
            </div>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </div>
    );
}

export default Contact