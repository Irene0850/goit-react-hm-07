import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) {
    return (
      <div className={css.loaderBox}>
        <div className={css.loader}></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          item={contact}
          onDeleteContact={() => handleDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
