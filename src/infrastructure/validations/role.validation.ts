import * as Yup from 'yup'
import { RoleModel } from '../../core/models/role.model';

export const roleInitialValues: RoleModel = {
    name: "",
    description: ""
};

export const roleValidationSchema: Yup.ObjectSchema<RoleModel> = 
    Yup.object({
        name: Yup.string()
            .required("El nombre es requerido")
            .min(3, "El nombre de tener al menos 3 caracteres")
            .max(50, "EL nombre no puede tener mas de 50 caracteres"),
        description: Yup.string()
            .required("La descripción es requerida")
            .max(256, "La descripcipon no puede tener mas de 256 caracteres")
    });