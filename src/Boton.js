import PropTypes from 'prop-types'

export function Boton({text}) {
    return <button onClick={function () { 
        alert('Tu respuesta fue enviada')
    }}>
        {text}
    </button>
}

Boton.propTypes = {
    text: PropTypes.string.isRequired
}

Boton.defaulProps = {
    nombre: 'Some User'
}