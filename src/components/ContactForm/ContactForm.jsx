import { useId } from "react";
import css from "./ContactForm/ContactForm.module.css";

export const ContactForm = ({ onSubmit }) => {
  const usernameFildeId = useId();
  const userphoneFildeId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { name, phone } = form.elements;

    onSubmit({
      name: name.value,
      phone: phone.value,
    });

    // Посилання на DOM-елементи
    // console.log(phone або  name);

    // Значення полів
    // console.log(form.elements.name.value);
    // console.log(form.elements.phone.value);

    // Скидаємо значення полів після відправки
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        className={css.label}
        htmlFor={usernameFildeId}
      >
        Name
      </label>
      <input
        type="text"
        name="name"
        id={usernameFildeId}
      />
      <label
        className={css.label}
        htmlFor={userphoneFildeId}
      >
        Number
      </label>
      <input
        type="tel"
        name="phone"
        id={userphoneFildeId}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};