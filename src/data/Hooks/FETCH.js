

export const useFetch = ( metodo , createAsyncThunk ) => {

if(metodo === 'GET'){
return(
  createAsyncThunk(
    
          "Characters/get-personajes", 
          
          async () => {
          
              try {
                  const response = await fetch("https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes")
                  const data = await response.json()
                  return data
              } catch (error) {
                  console.log(error);
                  
                  return error
              }
      
          })
)
         
     
}
        
if (metodo === 'POST'){

   return(createAsyncThunk(
      "Characters/post-personaje",
      
      async (personaje) => {
          
          try {
          const post = await fetch('https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes', 
              {
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(personaje)
          })
    
        } catch (error) {
          console.error(error)
          
        }})
) 
}
       
if(metodo === 'PUT'){
  
  return(createAsyncThunk(
            "Characters/put-personaje",
            
            async (personaje) => {
                try {
                const put = await fetch(`https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes/${personaje.id}`, {
                  method:'PUT',
                  headers: {'Content-Type' : 'application/json'},
                  body: JSON.stringify(personaje)
                })
          
              } catch (error) {
                console.error(error)
                
              }})) 

}
          
if(metodo === 'DELETE'){

  return(createAsyncThunk(
            "Characters/remove-personaje",
            
            async (personaje) => {
                try {
                    const remove = await fetch(`https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes/${personaje.id}`, 
                    {
                      method:'DELETE',
                      headers: {'Content-Type' : 'application/json'},
                      body: JSON.stringify(personaje)
                    })
              
                  } catch (error) {
                    console.error(error)
                    
                  }})) 
}}