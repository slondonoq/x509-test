import sslImage from './assets/ssl.jpeg'
import httpsImage from './assets/https.png'

function App() {

  return (
    <>
      <h1>Pruebas certificados X.509</h1>
      <p>Esta es una página estática creada para servir como base para probar una de las aplicaciones más comúnes de los certificados X.509: los certificados <strong>SSL (Secure Socket Layer)</strong> para así poder comunicarse con esta página mediante el protocolo <strong>HTTPS (HyperText Transfer Protocol Secure)</strong>.</p>
      <img alt="diagrama uso de SSL en HTTPS" src={sslImage}/>
      <p>Como se puede observar en el siguiente diagrama, el uso de estos certificados permite encriptar el tráfico para así tener una comunicación más segura entre usuario final y sistema de software</p>
      <img alt="diagrama encripcion HTTPS" src={httpsImage}/>
    </>
  )
}

export default App
