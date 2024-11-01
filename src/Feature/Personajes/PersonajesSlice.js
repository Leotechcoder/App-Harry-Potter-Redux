import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useFetch } from "../../data/Hooks/FETCH";

const initialState = {
  Characters:  [],
  Charactertoedit: null,
  loading: false,
  error: null,
}


//funciones para actualizar la data en el servidor
export const getPersonajes = useFetch('GET' , createAsyncThunk)

export const postPersonaje = useFetch('POST' , createAsyncThunk)
    
export const putPersonaje = useFetch('PUT' , createAsyncThunk)

export const removePersonaje = useFetch('DELETE' , createAsyncThunk)


//slice que maneja el state de los personajes traidos desde el servidor
export const Person = createSlice(
    {
        name: 'Characters',
        initialState ,
        reducers: {
            //agregar y actualizar personaje
            createPersonaje: (state, action) => {
                const { id } = action.payload
                if(id){
                    const index =state.Characters.findIndex((personaje)=>personaje.id === id)
                    state.Characters.splice(index, 1, action.payload)
                }else{
                    const id = (state.Characters.length + 1);
                    action.payload.id = id;
                    state.Characters.push(action.payload)
                }
            },
            //eliminar personaje
            deletePersonaje: (state, action) => {
            const newPersonaje = state.Characters.filter(personaje => personaje.id!== action.payload)
            state.Characters = newPersonaje    
            },
            //editar personaje
            updatePersonaje: (state, action) => {
                const id = action.payload
                const newpersonaje = state.Characters.find(personaje => personaje.id == id)
                state.Charactertoedit = newpersonaje
            },
        },
        extraReducers: (builder)=>{
            builder
            .addCase(getPersonajes.pending, (state) => {
                state.loading = true
            })
            .addCase(getPersonajes.fulfilled, (state, action) => {
                state.loading = false
                state.Characters = action.payload
            })
            .addCase(getPersonajes.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(postPersonaje.pending, (state) => {
                state.loading = true
            })
            .addCase(postPersonaje.fulfilled, (state) => {
                state.loading = false
                
            })
            .addCase(postPersonaje.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(putPersonaje.pending, (state) => {
                state.loading = true
            })
            .addCase(putPersonaje.fulfilled, (state) => {
                state.loading = false
                
            })
            .addCase(putPersonaje.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(removePersonaje.pending, (state) => {
                state.loading = true
            })
            .addCase(removePersonaje.fulfilled, (state) => {
                state.loading = false
                
            })
            .addCase(removePersonaje.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
        }
}
)

export const { createPersonaje,  deletePersonaje , updatePersonaje} = Person.actions;
export default Person.reducer;

