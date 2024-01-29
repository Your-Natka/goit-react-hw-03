import { FiPhone, FiUser } from "react-icons/fi";
import css from './Contact.module.css';

export const Contact = ({ contact: { name, number, id }, onDeleteContact }) => {
    return (
        <div className={css.item}>
            <div className={css.info}>
                <p className={css.name}><FiUser className={css.icon} /> {name}</p>
                <p className={css.number}><FiPhone className={css.icon} /> {number}</p>
            </div>
            <button className={css.button} onClick={() => onDeleteContact(id)}>Delete</button>
        </div>
    );
};