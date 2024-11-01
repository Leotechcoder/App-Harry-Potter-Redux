import { useRouteError } from "react-router-dom"


const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div className="container-fluid vh-100 vw-100 text-center align-content-center">
      <h1>Oops! Algo fallo..</h1>
      <span>Error:{error.status} <br /> {error.data}</span>
    </div>
  )
}

export default Error
