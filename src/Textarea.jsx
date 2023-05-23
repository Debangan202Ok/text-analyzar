import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import PropTypes from 'prop-types'


export default function Textarea(props) {
  const [text, setText] = useState('');
  const [styl, setStyl] = useState("");
  const handler = () => {
    setText(text.toUpperCase())
    setStyl("")
    props.showAlert("UpperCase","Successfully coneverted")
  }
  const handler2 = () => {
    let newText = text;
    setText(newText.toLowerCase())
    setStyl("")
    props.showAlert("LowerCase","Successfully coneverted")
  }
  const handler3 = () => {
    setText(text.toLowerCase())
    setStyl("capitalize");
    props.showAlert("Capitalize","Successfully coneverted")
  }
  const handlerReset = () => {
    setText("");
    props.showAlert("Reset","Successfully")
  }
  return (
    <>
      <Form style={{ width: "80vw", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label><h1 className='my-3'>Text box</h1></Form.Label>
          <Form.Control placeholder={props.addText} style={{ textTransform: styl }} as="textarea" rows={4} value={text} onChange={e => setText(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handler}>Transform UpperCase</Button>
        <Button className='m-2' variant="secondary" onClick={handler2}>Transform LowerCase</Button>
        <Button className='m-2' variant="success" onClick={handler3}>Transform Capitalize</Button>
        <Button className='m-2' variant="danger" onClick={handlerReset}>Reset</Button>
      </Form>
      <ListGroup>
        <ListGroup.Item style={{ width: "70vw", margin: "auto", marginTop: 20 }}>Text Summary
          <p>{text.split(" ").filter(e =>{return e.length!=0}).length} words and {text.split("").filter(e => {return e!=" "}).length} characters and {text.split("").filter(e => {return e==" "}).length} Spaces</p>
          Reading time
          <p>{0.008 * text.split(" ").filter(e =>{return e.length!=0}).length} Minutes read</p>
          Text Preview
          <p>{text}</p>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}
Textarea.propTypes = {
  showAlert : PropTypes.func,
  addText : PropTypes.string
}