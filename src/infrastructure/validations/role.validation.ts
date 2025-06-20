/*import * as Yup from 'yup';
import { RoleModel } from '../../core/models/role.model';

export const roleInitialValues: RoleModel = {
    name: "",
    description: "",
};

export const roleValidationSchema: Yup.ObjectSchema<RoleModel> = Yup.object({
    name: Yup.string()
        .required("El nombre es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres.")
        .max(50, "El nombre debe tener menos de 50 caracteres"),
    description: Yup.string()
        .max(256, "La descripción no debe tener más de 256 caracteres")
});*/