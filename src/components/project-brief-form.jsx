'use client'

import { useState } from 'react'
import { CONTACT_EMAIL } from '@/lib/site'

const copy = {
  es: {
    name: 'Nombre', company: 'Empresa u organización', email: 'Correo de trabajo', route: '¿Qué necesita?', routes: ['Seleccionar o comprar material', 'Mejorar el desempeño de un producto', 'Caracterización o consultoría', 'Colaboración de I+D'], application: 'Aplicación o sector', base: 'Material base, matriz o sustrato', process: 'Proceso actual', target: 'Métrica que quiere mejorar', volume: 'Volumen o escala estimada', message: 'Contexto adicional', optional: 'Opcional', submit: 'Preparar correo', privacy: 'Al enviar, se abrirá su aplicación de correo con el brief preparado. Este sitio no almacena sus datos.', success: 'El brief está listo en su aplicación de correo. Si no se abrió, escriba directamente a', subject: 'Nuevo brief técnico desde la web',
  },
  en: {
    name: 'Name', company: 'Company or organization', email: 'Work email', route: 'What do you need?', routes: ['Select or purchase a material', 'Improve product performance', 'Characterization or consulting', 'R&D collaboration'], application: 'Application or sector', base: 'Base material, matrix or substrate', process: 'Current process', target: 'Metric you want to improve', volume: 'Estimated volume or scale', message: 'Additional context', optional: 'Optional', submit: 'Prepare email', privacy: 'Submitting opens your email application with the brief prepared. This site does not store your data.', success: 'Your brief is ready in your email application. If it did not open, email us directly at', subject: 'New technical brief from the website',
  },
}

export default function ProjectBriefForm({ locale, defaults = {} }) {
  const [submitted, setSubmitted] = useState(false)
  const t = copy[locale]

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const lines = Array.from(data.entries()).filter(([, value]) => value).map(([key, value]) => `${key}: ${value}`)
    const subject = encodeURIComponent(`${t.subject}${defaults.material ? ` · ${defaults.material}` : defaults.solution ? ` · ${defaults.solution}` : ''}`)
    const body = encodeURIComponent(lines.join('\n'))
    setSubmitted(true)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <form className="brief-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label><span>{t.name}</span><input name={t.name} autoComplete="name" required /></label>
        <label><span>{t.company}</span><input name={t.company} autoComplete="organization" required /></label>
        <label><span>{t.email}</span><input name={t.email} type="email" autoComplete="email" required /></label>
        <label><span>{t.route}</span><select name={t.route} defaultValue="" required><option value="" disabled>—</option>{t.routes.map((route) => <option key={route}>{route}</option>)}</select></label>
        <label><span>{t.application}</span><input name={t.application} required /></label>
        <label><span>{t.base}</span><input name={t.base} /></label>
        <label><span>{t.process}</span><input name={t.process} /></label>
        <label><span>{t.target}</span><input name={t.target} required /></label>
        <label><span>{t.volume} <small>({t.optional})</small></span><input name={t.volume} /></label>
        <label className="form-full"><span>{t.message} <small>({t.optional})</small></span><textarea name={t.message} rows="5" defaultValue={defaults.material ? `Material: ${defaults.material}` : defaults.solution ? `Solución: ${defaults.solution}` : ''} /></label>
      </div>
      <div className="form-submit"><button className="button button--primary" type="submit">{t.submit} <span aria-hidden="true">→</span></button><p>{t.privacy}</p></div>
      {submitted && <p className="form-status" role="status">{t.success} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>}
    </form>
  )
}
