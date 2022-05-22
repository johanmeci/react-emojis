import { useState } from "react";

import styles from "../../styles/emojiPicker.module.scss";

export default function EmojiSearch({onSearch}) {

  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
    onSearch(e);
  }

  return (
    <input className={styles.search} onChange={handleChange} type="text" value={value}/>
  )
}