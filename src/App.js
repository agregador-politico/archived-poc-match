import { useState } from 'react'
import { AdvancedForm } from './components/forms/AdvancedForm'

export default function App() {
  const [formValues, setFormValues] = useState([])

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    const response = await fetch('http://67.205.161.189:8000/match', requestOptions);
    const data = await response.json();

    console.log(data)

    setSubmitting(true)
    setFormValues(data)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
  }

  const formSchema = [
    { name: 'nome', label: 'Nome', componentType: 'text', required: false },
    {
      name: 'pergunta-1',
      label: 'Como você votaria no projeto da Reforma do Imposto de Renda (PL 2337/21)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-2',
      label: 'Como você votaria no projeto da Autonomia do Banco Central (PLP 19/19)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-3',
      label: 'Como você votaria no projeto da Privatização dos Correios (PL 591/2021)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-4',
      label: 'Como você votaria no projeto que flexibiliza as regras de licenciamento ambiental (PL 3729/04)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-5',
      label: 'Como você votaria no projeto que flexibiliza venda e porte de armas de fogo (PL 3723/19)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-6',
      label: 'Como você votaria no projeto da Reforma da Previdência (PEC 06/2019)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-7',
      label: 'Como você votaria no projeto da Reforma Eleitoral (PEC 125/2011)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-8',
      label: 'Como você votaria no projeto da Reforma Trabalhista (MP 1045/21)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-9',
      label: 'Como você votaria no projeto de privatização da Eletrobras (MP 1031/21)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-10',
      label: 'Como você votaria no Pacote Anticrime (PL 10372/18)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-11',
      label: 'Como você votaria no projeto do Voto Impresso (PEC 135/19)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
      ],
    },
    {
      name: 'pergunta-12',
      label: 'Como você votaria no projeto do Teto de Gastos (PEC 241/2016)?',
      componentType: 'radioGroup',
      options: [
        { label: 'A favor', value: '1.0' },
        { label: 'Contra', value: '0.0' },
        { label: 'Não sei', value: '0.5' },
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
      
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div className="container">
              <a className="navbar-brand" href="#page-top">Agragador Político</a>
          </div>
      </nav>
      <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
               
                <img className="masthead-avatar mb-5" src="./img/mulher-icone.png" alt="..." />
               
                <h1 className="masthead-heading text-uppercase mb-0">Agragador Político</h1>
               
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <p className="masthead-subheading font-weight-light mb-0">
                  Bem vindo ao Match! Aqui você descobre com qual deputado vc realmente da MATCH!
                </p>
            </div>
        </header>
      <section className="page-section portfolio" id="portfolio">
            <div className="container">
              <div className="flex">
                <div className="form section">
                  <AdvancedForm schema={formSchema} onSubmit={handleSubmit}>
                  </AdvancedForm>
                </div>
              </div>
            </div>
      </section>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <h2 className="page-section-heading text-center text-uppercase text-white">Resultado</h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 ms-auto">
                <p className="lead">
                  {
                    JSON.stringify(formValues, null, 2)
                  }
                </p>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}