import React from 'react'
import {TextInput,Button,Icon} from 'react-materialize'

function Contacto()
{
return (
    <div className="row">

        <div className="col s12">
                Contacto
        </div>

        <div className="col s12">
              <TextInput
                icon="email"
                id="TextInput-4"
                label="Asunto"
              />
        </div>

        <div className="col s12">
        <TextInput
                icon="email"
                id="TextInput-4"
                label="Email"
              />

        </div>
        <div className="col s12">
        <TextInput
                icon="email"
                id="TextInput-4"
                label="Consulta"
              />

        </div>
        <div className="col s12">
            <Button
                node="button"
                type="submit"
                waves="light"
                >
                Submit
                <Icon right>
                    send
                </Icon>
            </Button>
        </div>

    </div>


)

}

export default Contacto