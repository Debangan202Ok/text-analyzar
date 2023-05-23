import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './MyNavbar';
import Textarea from './Textarea';
import { useState } from 'react';
import AlertDismissibleExample from './AlertDismissibleExample';

export default function App() {
  const [alertMssg, setAlertMssg] = useState(null);
  const showAlert = (mssg, type) => {
    setAlertMssg({ mssg: mssg, type: type })
    setTimeout(() => {
      setAlertMssg(null)
    }, 2000)
  }
  const [modes, setMode] = useState([{ bg: "light", txt: "light" }]);
  const handlerMode = () => {
    setMode([{ bg: "dark", txt: "dark" }])
    document.body.style.backgroundColor = "#121212"
    document.body.style.color = "white"
  }
  const handlerMode2 = () => {
    setMode([{ bg: "primary", txt: "dark" }])
    document.body.style.backgroundColor = "#001400"
    document.body.style.color = "white"
  }
  const handlerMode3 = () => {
    setMode([{ bg: "light", txt: "light" }])
    document.body.style.backgroundColor = "#fff"
    document.body.style.color = "black"
  }

  return (
    <div>
      <Mynavbar about="About" click={handlerMode} click2={handlerMode2} click3={handlerMode3} colors={modes} />
      <AlertDismissibleExample alert={alertMssg} />
      <Textarea addText='Enter your text here' showAlert={showAlert} />
    </div>
  )
}
