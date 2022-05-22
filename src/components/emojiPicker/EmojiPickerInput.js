import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";

import styles from "../../styles/emojiPicker.module.scss";

export default function EmojiPickerInput() {

  const refInput = useRef(null);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.titleContainer}>Emoji Picker App</h1>
      <input className={styles.inputSearch} ref={refInput} type="text" placeholder="Search emoji..." />
      <EmojiPicker ref={refInput} />
    </div>
  )
}