import * as CryptoJS from 'crypto-js';

// const SECRET_KEY = process.env.REACT_APP_SECRETE_KEY ?? 'miniServer';
const SECRET_KEY = 'todo-list';
const invalidKey = 'REACT_APP_SECRETE_KEY environment variable not set. Please set the variable with a secure secret key';

if (!SECRET_KEY) throw new Error(invalidKey);

function encryptMessage(message: string | object): string {
  if (!SECRET_KEY) throw new Error(invalidKey);

  const messageSting = typeof message === 'object' ? JSON.stringify(message) : message;

  const encrypted = CryptoJS.AES.encrypt(messageSting, SECRET_KEY);
  return encrypted.toString();
}

function decryptMessage(encryptedMessage: string, returnJson = true): string {
  if (!SECRET_KEY) throw new Error(invalidKey);

  try {
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, SECRET_KEY);
    const decryptString = decrypted.toString(CryptoJS.enc.Utf8);

    return returnJson ? JSON.parse(decryptString) : decryptString;
  } catch (error) {
    throw error;
  }
}

export { encryptMessage, decryptMessage };
