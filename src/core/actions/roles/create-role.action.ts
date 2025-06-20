import { AxiosError } from "axios";
import { ApiResponse } from "../../../infrastructure/interfaces/api.response";
import { ApiErrorResponse } from "../../../infrastructure/interfaces/api-error.response";
import { personsApi } from "../../api/persons.api";
import { RolesResponse } from "../../../infrastructure/interfaces/roles.response";
import { RoleModel } from "../../models/role.model";

export const createRoleAction = async (
    role: RoleModel
): Promise<ApiResponse<RolesResponse>> => {

    try {

        const { data } = await personsApi.post<ApiResponse<RolesResponse>>(
            "/roles",
            role
        );

        return data
        
    } catch (error) {
        const apiError = error as AxiosError<ApiErrorResponse>;

        if(apiError.response) {
            throw new Error(apiError.response.data.message)
        }
        else if (apiError.request) {
            throw new Error("Error de conexion");
        }
        else {
            throw new Error("Error desconocido");
        }
    }

}