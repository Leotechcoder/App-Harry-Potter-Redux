import { configureStore } from "@reduxjs/toolkit";

import personajesReducer from "../Feature/Personajes/PersonajesSlice";

export const store = configureStore(
     {
        reducer:{
         personajes: personajesReducer,
      }
      
     }
)