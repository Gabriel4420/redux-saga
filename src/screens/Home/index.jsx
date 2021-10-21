import React from 'react'
import './styles.css'
import SectionComponent from '../../components/sectionComponent'
import ButtonComponent from '../../components/buttonComponent'
import { useSelector, useDispatch } from 'react-redux'
/* import { connect } from 'react-redux' */

const Home = (props) => {
  const name = useSelector((state) => state.user.name)
  const dispatch = useDispatch()
  const handleName = () => {

    dispatch({
        type:'SET_NAME',
        payload: {name:`${props.author}`}
    })
  }

  return (
    <div>
      <main>
        <div className="Banner">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHhS2G2wXSMCQ/profile-displayphoto-shrink_200_200/0/1600124041155?e=1637798400&v=beta&t=11R0Uq7VB3sxdvVfi8xGVow6Gqk7JHL6Jh6S26a74dY"
            alt="perfil"
          />
          <h2>{name}</h2>

          <ButtonComponent
            theme="secondary"
            value="Reveal Name"
            bordered="little rounded"
            onClick={handleName}
          />
        </div>
      </main>

      <SectionComponent title="Sobre mim" backgroundColor="Primary">
        <div className="paragraph">
          <p>
            Acredito que sempre podemos ir além, basta ter 99% de transpiração e
            1% de inspiração, como já dizia Einstein.
          </p>
          <p>
            Sou um grande entusiasta da tecnologia da informação e analise de
            sistemas, apesar de estar iniciando minha carreira profissional, eu
            já aprendi na raça, que para crescer na vida é preciso ralar e
            batalhar sempre.
          </p>
          <p>
            E nessa jornada louca e cheia de reviravoltas que é a vida, eu busco
            sempre evoluir no conhecimento e ajudar o máximo de pessoas que
            puder no meio do caminho.
          </p>
        </div>

        <ButtonComponent
          theme="primary"
          value="Saiba Mais"
          bordered="little rounded"
        />
      </SectionComponent>
    </div>
  )
}

/* const mapStateToProps = (state) => {
  return {
    name: state.user.name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (newName) =>
      dispatch({
        type: 'SET_NAME',
        payload: { name: newName },
      }),
  }
} */
export default Home
