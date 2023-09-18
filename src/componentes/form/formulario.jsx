import { useState } from "react"
import styles from "./app.module.css"

function App() {

  function handleSubmit(e) {
    e.preventDefault()
  }

  let [peso, setpeso] = useState(0)

  let [altura, setaltura] = useState(0)
  let [alturac, setalturac] = useState(0)

  let [resultado, setresultado] = useState(0)

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.titulo}>Calculadora de IMC</h1>
        <div>
          <label htmlFor="peso">Peso (kg)</label>
          <input onChange={(e) => {
            setpeso(e.target.value)
          }} type="number" step="0.10" id="peso" placeholder="ex: 81,5" />
        </div>
        <div className="inputContainer">
          <label htmlFor="altura">Altura (em metros)</label>
          <input className="input2" onChange={(e) => {
            setaltura(e.target.value)
          }} type="number" step="0.01" placeholder="ex: 1,83" id="altura" />
        </div>
        <button onClick={() => {
          setresultado(peso / (altura * altura))
          document.querySelector("input").value = " "
          document.querySelector(".input2").value = " "
        }} type="submit" className={styles.btn}>Calcular</button>
        <div>Seu IMC é <span className={styles.resultado}>{resultado.toFixed(2)}</span></div>
      </form>
      <div className={styles.articles}>
        <article className={styles.article}>
          <p className={styles.articleCondicao}>
            Acima de 40,0
          </p>
          <h3 className={styles.aricleTitulo}>Obesidade
            grau III</h3>
          <p className={styles.articleDescricao}>
            Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.
          </p>
        </article>
        <article className={styles.article}>
          <p className={styles.articleCondicao}>
            Entre 35,0 e 39,9
          </p>
          <h3 className={styles.aricleTitulo}>Obesidade
            grau II</h3>
          <p className={styles.articleDescricao}>
            Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.
          </p>
        </article>
        <article className={styles.article}>
          <p className={styles.articleCondicao}>
            Entre 30,0 e 34,9
          </p>
          <h3 className={styles.aricleTitulo}>Obesidade grau I</h3>
          <p className={styles.articleDescricao}>
            Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.
          </p>
        </article>
        <article className={styles.article}>
          <p className={styles.articleCondicao}>
            Entre 25,0 e 29,9
          </p>
          <h3 className={styles.aricleTitulo}>Sobrepeso</h3>
          <p className={styles.articleDescricao}>
            Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer
          </p>
        </article>
        <article className={styles.article}>
          <p className={styles.articleCondicao}>
            Entre 18,6 e 24,9
          </p>
          <h3 className={styles.aricleTitulo}>Peso ideal/normal</h3>
          <p className={styles.articleDescricao}>
            Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.
          </p>
        </article>
        <article className={styles.article}>
          <p className={styles.articleCondicao}>
            18,5 ou menos
          </p>
          <h3 className={styles.aricleTitulo}>Abaixo do normal</h3>
          <p className={styles.articleDescricao}>
            Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.
          </p>
        </article>
      </div>
    </>


  )
}

export default App
