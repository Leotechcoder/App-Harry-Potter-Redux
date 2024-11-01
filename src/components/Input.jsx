

const Input = ({ name , handlechange , value , type='text' }) => {


  return (
    <>
      <input
            type={type}
            className="form-control w-100 my-2"
            name={name}
            value = {value}
            onChange={handlechange}
            id={name}
            placeholder= {name}
            required
        />
    </>
  )
}

export default Input
