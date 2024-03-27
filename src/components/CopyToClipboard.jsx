import {React, useState} from 'react';
import copyedIcon from "../assets/img/checked.svg"
export default function CopyToClipboard() {
    const [textToCopy, setTextToCopy] = useState('3X8GcLiH2HttjyqePg7MazpMbwbgq5URUMTyDz5tkmdE');
    const [isCopied, setIsCopied] = useState(false);
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setIsCopied(true);
          })
          .catch(err => {
            console.error('Failed to copy to clipboard: ', err);
          });
      };
      const copy = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
      <path d="M17 13.5867V18.0867C17 21.8367 15.5 23.3367 11.75 23.3367H7.25C3.5 23.3367 2 21.8367 2 18.0867V13.5867C2 9.83667 3.5 8.33667 7.25 8.33667H11.75C15.5 8.33667 17 9.83667 17 13.5867Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24 6.58667V11.0867C24 14.8367 22.5 16.3367 18.75 16.3367H17.5714V13.0152C17.5714 9.26524 16.0714 7.76524 12.3214 7.76524H9V6.58667C9 2.83667 10.5 1.33667 14.25 1.33667H18.75C22.5 1.33667 24 2.83667 24 6.58667Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>;

  return (
    <div className="copytoclipboard-inner">
      <div className="copytoclipboard">
          <p>
          ca :- {textToCopy}
          </p>
        <button onClick={handleCopyToClipboard}>
          {!isCopied && (
          <span>
              {copy}
          </span>
          )}
          {isCopied && (
          <span className='copyed'>
              <img src={copyedIcon} alt="" />
          </span>
          )}
        </button>
      </div>
    </div>
    
  )
}