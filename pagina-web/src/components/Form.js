import {Form, Button} from "react-bootstrap";
import {useState } from "react";

function Formulario() {
    const [datos, setDatos] = useState({
        dificultad_Resp: '', 
        dolor_Pecho: '', 
        tos: '', 
        fatiga: '', 
        frec_Cardiaca_Ace: '', 
        dolor_Cabeza: '',
        dolor_Garganta:  '',
        fiebre: '',
        amigdalas_Rojas: '',
        voz_Gangosa: '', 
        vomito:  '', 
        voz_Ronca:  '',
        flema_Sangre:  '',
        hinchazon_Cuello_Rostro: '',
        deshidratacion: '',
        falta_Olfato_Gusto: '',
        perdida_Lucides: '',
        labios_Unas_Azules: '',
        estornudos: '',
        goteo_Nasal:  '',
        congestion_Nasal: '', 
        picor_Ojos:  ''
    })
    
      const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos)
    };
    
    

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    return (
        <div>
            <div className="formTitle" >
        </div>
        <Form style={{marginTop:"7%"}} onSubmit={enviarDatos}>
            <Form.Group className="mb-3" onChange={handleInputChange}>
                <Form.Label className="lab">¿Ha presentado dificultad para respirar?</Form.Label>
                <Form.Check label="No" type="radio" name="dificultad_Resp" value="0" />
                <Form.Check label="Si, algunas veces" type="radio" name="dificultad_Resp" value="0.6"/>
                <Form.Check label="Si, frecuentemente" type="radio" name="dificultad_Resp" value="0.8"/>
                <Form.Check label="Si, muy frecuente"  type="radio" name="dificultad_Resp" value="1"/>
            </Form.Group>

            <Form.Group className="mb-3" style={{marginTop:"5%"}} onChange={handleInputChange}>
                <Form.Label className="lab">¿Ha sentido dolor o presión en el pecho?</Form.Label><br/>
                <Form.Check label="No" type="radio" name="dolor_Pecho" value="0" inline/>
                <Form.Check label="Rara vez" type="radio" name="dolor_Pecho" value="0.2" inline/>
                <Form.Check label="Si, algunas veces" type="radio" name="dolor_Pecho" value="0.6" inline/>
                <Form.Check label="Si, frecuentemente" type="radio"  name="dolor_Pecho" value="0.8" inline/>
                <Form.Check label="Si, muy frecuente" type="radio" name="dolor_Pecho" value="1" inline/>
            </Form.Group>

            <Form.Group className="mb-3" style={{marginTop:"5%"}} onChange={handleInputChange}>
            <Form.Label className="lab">¿Con que frecuencia presenta tos?</Form.Label><br/>
                <Form.Select name="tos">
                    <option value="0">No he tenido tos</option>
                    <option value="0.2">Rara vez</option>
                    <option value="0.6">Algunas veces al día</option>
                    <option value="0.8">Frecuentemente</option>
                    <option value="1">La mayor parte del tiempo</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{marginTop:"5%"}} onChange={handleInputChange}>
                <Form.Label className="lab">¿Que tanto cansancio a sentido durante el día?</Form.Label><br/>
                <Form.Control className="form-range" type="range" id="range1" name="fatiga" step={0.2} min="0" max="1" style={{border:"none"}}/>
                <Form.Label style={{fontSize:"14px", width:"15%"}}>No me he sentido cansado</Form.Label>
                <Form.Label style={{marginLeft:"4%", fontSize:"14px"}}>Rara vez</Form.Label>
                <Form.Label style={{marginLeft:"8%", fontSize:"14px",textAlign:"center", width:"12%"}}>Algunas veces al día</Form.Label>
                <Form.Label style={{marginLeft:"8.5%", fontSize:"14px", textAlign:"center", width:"10%"}}>De manera constante</Form.Label>
                <Form.Label style={{marginLeft:"7%", fontSize:"14px", textAlign:"center", width:"15%"}}>La mayor parte del tiempo</Form.Label>
                <Form.Label style={{fontSize:"14px", textAlign:"Right", width:"13%"}}>Todo el tiempo</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" style={{marginTop:"5%"}} onChange={handleInputChange}>
                <Form.Label className="lab">¿Ha presentado fiebre?</Form.Label><br/>
                <Form.Check type="radio" label="No" name="fiebre" inline value="0"/>
                <Form.Check type="radio" label="Fiebre mayor a 37.5°C" name="fiebre" inline value="0.4"/>
                <Form.Check type="radio" label="Fiebre mayor a 38°C" name="fiebre" inline value="0.6"/>
            </Form.Group>

            <Form.Group className="mb-3" style={{marginTop:"5%"}} onChange={handleInputChange}>
                <Form.Label className="lab">¿Notó su voz gangosa los ultimos días?</Form.Label>
                <Form.Select name="voz_Gangosa">
                    <option value="0">No</option>
                    <option value="0.4">Si, cambio moderadamente</option>
                    <option value="0.8">Si, cambio srasticamente</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{marginTop:"5%"}} onChange={handleInputChange}>
                <Form.Label className="lab">¿Qué tan fuertes son los dolor de cabeza?</Form.Label>
                <Form.Check label="No tengo dolor de cabeza" type="radio" name="dolor_Cabeza" value="0"/>
                <Form.Check label="Dolor leve" type="radio" name="dolor_Cabeza" value="0.4"/>
                <Form.Check label="Dolor moderado/intenso" type="radio" name="dolor_Cabeza" value="0.6"/>
            </Form.Group>

            <Form.Group className="mb-3" style={{marginTop:"5%"}} onChange={handleInputChange}>
                <Form.Label className="lab">¿Ha tenido dolor de garganta?</Form.Label>
                <Form.Control className="form-range" type="range" id="range2" name="dolor_Garganta" step={0.4} min="0" max="0.8" style={{border:"none"}}/>
                <Form.Label style={{fontSize:"14px"}}>No he tenido dolor de garganta</Form.Label>
                <Form.Label style={{marginLeft:"17.5%", fontSize:"14px"}}>Dolor leve</Form.Label>
                <Form.Label style={{marginLeft:"23.3%", fontSize:"14px"}}>Dolor moderado/intenso</Form.Label>
            </Form.Group>
                
            <Form.Group className="mb-3" style={{marginTop:"5%"}} onChange={handleInputChange}>
                <Form.Label className="lab">¿Con que frecuencia presenta estornudos?</Form.Label>
                <Form.Select name="estornudos">
                    <option value="0">No tengo estornudos</option>
                    <option value="0.4">Rara vez tengo estornudos</option>
                    <option value="0.6">Algunas veces al día tengo estornudos</option>
                    <option value="0.8">Frecuentemente tengo estornudos</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{marginTop:"5%"}} onChange={handleInputChange}>
                <Form.Label className="lab">12. ¿Con que frecuencia presenta congestion nasal?</Form.Label>
                <Form.Check name="congestion_Nasal" value="0" label="No tengo congestion nasal" type="radio"/>
                <Form.Check name="congestion_Nasal" value="0.8" label="Algunas veces al día" type="radio"/>
                <Form.Check name="congestion_Nasal" value="1" label="Durante la mayor parte del día/todo el día" type="radio"/>
        
            </Form.Group>

            <Form.Group className="mb-3" style={{marginTop:"5%"}}onChange={handleInputChange}>
                <Form.Label className="lab">¿Cuál o cuáles síntomas ha presentado?</Form.Label>
                <Form.Check name="frec_Cardiaca_Ace" value="1" label="Frecuencia cardiaca acelerada"/>
                <Form.Check name="deshidratacion" value="1" label="Deshidratación" />
                <Form.Check name="amigdalas_Rojas" value="1" label="Amígdalas inflamadas"/>
                <Form.Check name="falta_Olfato_Gusto" value="1"label="Falta de olfato o gusto"/>
                <Form.Check name="perdida_Lucides" value="1" label="Perdida de lucides"/>
                <Form.Check name="labios_Unas_Azules" value="1" label="Labios o uñas moradas"/>
                <Form.Check name="picor_Ojos" value="1" label="Picor en ojos"/>
                <Form.Check name="flema_Sangre" value="1"label="Flemas con sangre"/>
                <Form.Check name="hinchazon_Cuello_Rostro" value="1" label="Hinchazón en el cuello o rostro"/>
                <Form.Check name="goteo_Nasal" value="1" label="Goteo nasal"/>
                <Form.Check type="switch" name="vomito" value="1" label="Nauseas o vomito"/>
                <Form.Check type="switch" name="voz_Ronca" value="1" label="Voz ronca"/>
            </Form.Group>

            <Button className="guardar" variant="primary" type="submit">
                Completado
               </Button>
            <ul>
                <li>{datos.dificultad_Resp}</li>
            </ul>

        </Form>

        </div>
        
            
    );
}

export default Formulario;
