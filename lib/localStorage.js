/**
 * Get the value from localStorage if the key matches
 * @param key localStorage value
 * @param defaultValue if not found return this as the value
 * @returns {{}|any} matching key, or default value
 */
const getValue = (key, defaultValue = {}) => {
  try {
    // read value from local storage
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.log(error);
    return defaultValue;
  }
}

/**
 * Set a value in localStorage
 * @param key name of the value
 * @param value data to store with the key
 */
const setValue = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

const removeValue = (key) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.log(error)
  }
}

export { getValue, setValue, removeValue }
