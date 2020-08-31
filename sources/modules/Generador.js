import template from "./template.js";
import Guest from "./Guest.js";
let tempHabitacionesRenderizado = "";

const limpiarcampos = (
  nombre,
  apellido,
  email,
  telefono,
  fecha,
  cantpersonas
) => {
  (nombre.value = ""),
    (apellido.value = ""),
    (email.value = ""),
    (telefono.value = ""),
    (fecha.value = ""),
    (cantpersonas.value = "");
};

//export { generarModal };
