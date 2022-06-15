
import styles from "./LabelBox.module.css";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props{
    children: string
    onClick: ()=>void,
}

export const LabelBox = ({children, onClick} : Props) => {
  return (
    <>
      <div className={styles["label-box"]} onClick={onClick}>
          <p>#{children}</p>
          <FontAwesomeIcon icon={faTrash} size="lg"/>
      </div>
    </>
  );
};
