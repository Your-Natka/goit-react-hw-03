import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const validation = Yup.object().shape({
    name: Yup.string()
        .min(3, "Not enough symbols!")
        .max(50, "Too long!")
        .required("Required field!"),
    number: Yup.string()
        .min(9, "Not enough symbols!")
        .max(9, "Too long!")
        .required("Required field!"),
});

export const ContactForm = ({ onAdd }) => {
    const nameField = useId();
    const numberField = useId();

    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
            onSubmit={(values, actions) => {
                onAdd({ id: nanoid(5), ...values });
                actions.resetForm();
            }}
            validationSchema={validation}
        >
            <Form className={css.form}>
                <div className={css.item}>
                    <label className={css.label} htmlFor={nameField}>Name</label>
                    <Field className={css.input} type="text" name="name" id={nameField} />
                    <ErrorMessage className={css.error} name="name" component="span"/>
                </div>
                <div className={css.item}>
                    <label className={css.label} htmlFor={numberField}>Number</label>
                    <Field className={css.input} type="text" name="number" id={numberField}/>
                    <ErrorMessage className={css.error} name="number" component="span"/>
                </div>
                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}