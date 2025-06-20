import { AxiosError } from "axios";
import { ApiResponse } from "../../../infrastructure/interfaces/api.response";
import { ApiErrorResponse } from "../../../infrastructure/interfaces/api-error.response";
import { personsApi } from "../../api/persons.api";
import { RolesResponse } from "../../../infrastructure/interfaces/roles.response";

export const deleteRoleAction = async (
     roleId: string
): Promise<ApiResponse<RolesResponse>> => {

    try {

        const { data } = await personsApi
            .delete<ApiResponse<RolesResponse>>(
                `/roles/${roleId}`,
                
            );

        return data;

    } catch (error) {
        const apiError = error as AxiosError<ApiErrorResponse>;

        if (apiError.response) {
            throw new Error(apiError.response.data.message)
        } else if (apiError.request) {
            throw new Error("Error de conexión.")
        } else {
            throw new Error("Error desconocido.")
        }
    }

}