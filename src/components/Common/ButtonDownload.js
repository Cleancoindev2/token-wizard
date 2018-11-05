import React from 'react'

export const ButtonDownload = ({ disabled, onClick, extraClass }) => (
  <button
    className={`sw-ButtonDownload ${extraClass ? extraClass : ''}`}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    Download
  </button>
)
