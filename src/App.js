import { useState } from 'react'
import { AdvancedForm } from './components/forms/AdvancedForm'

export default function App() {
  const [formValues, setFormValues] = useState([])

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true)
    setFormValues(values)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
  }

  const formSchema = [
    { name: 'nome', label: 'Nome', componentType: 'text', required: true },
    //{ name: 'playable', label: 'Playable', componentType: 'checkbox' },
    {
      name: 'pergunta-1',
      label: 'Como você votaria no projeto da Reforma do Imposto de Renda (PL 2337/21)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-2',
      label: 'Como você votaria no projeto da Autonomia do Banco Central (PLP 19/19)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-3',
      label: 'Como você votaria no projeto da Privatização dos Correios (PL 591/2021)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-4',
      label: 'Como você votaria no projeto que flexibiliza as regras de licenciamento ambiental (PL 3729/04)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-5',
      label: 'Como você votaria no projeto que flexibiliza venda e porte de armas de fogo (PL 3723/19)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-6',
      label: 'Como você votaria no projeto da Reforma da Previdência (PEC 06/2019)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-7',
      label: 'Como você votaria no projeto da Reforma Eleitoral (PEC 125/2011)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-8',
      label: 'Como você votaria no projeto da Reforma Trabalhista (MP 1045/21)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-9',
      label: 'Como você votaria no projeto de privatização da Eletrobras (MP 1031/21)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-10',
      label: 'Como você votaria no Pacote Anticrime (PL 10372/18)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-11',
      label: 'Como você votaria no projeto do Voto Impresso (PEC 135/19)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'pergunta-12',
      label: 'Como você votaria no projeto do Teto de Gastos (PEC 241/2016)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: 'a_favor' },
        { label: 'Contra', value: 'contra' },
        { label: 'Não sei', value: 'nao_sei' },
      ],
    },
    {
      name: 'comentario',
      label: 'Comentário',
      componentType: 'textarea',
    },
  ]

  return (
    <>
      <h1>Advanced Form</h1>

      <div className="flex">
        <div className="form section">
          <AdvancedForm schema={formSchema} onSubmit={handleSubmit} />
        </div>
        <div className="results section">
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}

    //{
    //  name: 'class',
    //  label: 'Class',
    //  componentType: 'select',
    //  options: [
    //    { label: 'Ranger', value: 'ranger' },
    //    { label: 'Wizard', value: 'wizard' },
    //    { label: 'Healer', value: 'healer' },
    //  ],
    //},
    //{
    //  name: 'spell',
    //  label: 'Spell',
    //  componentType: 'select',
    //  options: [
    //    { label: 'Fire', value: 'fire' },
    //    { label: 'Ice', value: 'ice' },
    //  ],
    //  condition: { key: 'class', value: 'wizard', operator: '=' },
    //},