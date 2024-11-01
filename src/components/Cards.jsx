

const Cards = ({ personaje }) => {

    const { id, nombre, casa } = personaje;

  return (
    <div key={id} className="card article my-2 bg-body-tertiary h-auto" >
          <img src="/harry-potter.jpg.webp" className="card-img-top p-2" alt="..."/>
          <div className="card-body">

            <h4 className="card-title text-center">
              {nombre}
            </h4>
            <span className="card-text d-block text-center pb-4">
              {casa}
            </span>
            

          </div>
        </div>
  )
}

export default Cards
