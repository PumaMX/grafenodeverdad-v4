'use client'

import { useId, useRef } from 'react'

export default function DirectorMessageDialog({ locale, message }) {
  const dialogRef = useRef(null)
  const titleId = useId()
  const closeLabel = locale === 'es' ? 'Cerrar mensaje' : 'Close message'
  const readLabel = locale === 'es' ? 'Leer' : 'Read'

  function openDialog() {
    if (!dialogRef.current?.open) dialogRef.current?.showModal()
  }

  function closeDialog() {
    dialogRef.current?.close()
  }

  function closeFromBackdrop(event) {
    if (event.target === event.currentTarget) closeDialog()
  }

  return (
    <>
      <button className="director-trigger" type="button" onClick={openDialog} aria-haspopup="dialog">
        <strong aria-hidden="true">↗</strong>
        <span>{message.label}</span>
        <small>{readLabel}</small>
      </button>
      <dialog ref={dialogRef} className="director-dialog" aria-labelledby={titleId} onClick={closeFromBackdrop}>
        <article className="director-dialog__card">
          <button className="director-dialog__close" type="button" onClick={closeDialog} aria-label={closeLabel}>×</button>
          <p className="eyebrow">{message.label}</p>
          <h2 id={titleId}>{message.title}</h2>
          <div className="director-dialog__body">
            {message.paragraphs.map((paragraph, index) => (
              <p className={index === 4 ? 'director-dialog__pledge' : undefined} key={`${index}-${paragraph.slice(0, 28)}`}>{paragraph}</p>
            ))}
          </div>
          <footer className="director-dialog__signature">
            <strong>{message.directorName}</strong>
            <span>{message.role}</span>
            <small>{message.companyName}</small>
            {message.address && <address>{message.address}</address>}
          </footer>
        </article>
      </dialog>
    </>
  )
}
