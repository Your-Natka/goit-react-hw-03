import { CgGirl } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
 
export const Contact = ({ name, number }) => {
  return (
    <>
      <p>
        <CgGirl /> {name}
      </p>
      <p>
        <BsFillTelephoneFill />
        {number}
      </p>
      <button type="button">Delete</button>
    </>
  );
};