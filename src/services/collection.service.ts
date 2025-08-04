import axiosInstance from "@/config/axiosInterceptor.server";

//Crear una colección
export async function createCollection(body: {
    collectionName: string;
    title: string;
    userId: number;
}) {
    try {
        const res = await axiosInstance.post(
            `/collections/createCollection`,
            body
        );
        return res.data.data;
    } catch (error: any) {
        console.error(`Error - Code: ${error.code}, Message: ${error.message}`);
        throw error;
    }
}

//Listado de colecciones paginadas y filtro
export async function allCollection({
    id,
    page,
    searchText,
    orderField,
    orderDirection,
}: {
    id: number | string;
    page: string | number;
    searchText?: string | undefined;
    orderField?: string | undefined;
    orderDirection?: string | undefined;
}) {
    try {
        const params = new URLSearchParams();

        if (id !== undefined) {
            params.append("id", id.toString());
        }

        if (page !== undefined) {
            params.append("page", page.toString());
        }

        if (searchText !== undefined) {
            params.append("searchText", searchText);
        }

        if (orderField !== undefined) {
            params.append("orderField", orderField);
        }

        if (orderDirection !== undefined) {
            params.append("orderDirection", orderDirection);
        }

        const res = await axiosInstance.get(
            `/collections/allCollections?${params.toString()}`
        );

        return res.data.data;
    } catch (error: any) {
        console.error(`Error - Code: ${error.code}, Message: ${error.message}`);
        throw error;
    }
}

//Obtener una colección por id
export async function collectionById(id: string) {
    try {
        const res = await axiosInstance.get(`/collections/collectionId?id=${id}`);
        return res.data.data;
    } catch (error: any) {
        console.error(`Error - Code: ${error.code}, Message: ${error.message}`);
        throw error;
    }
}

//Actualizar el nombre de una colección
export async function updateCollection(body: {
    title: string;
    collectionId: string;
}) {
    try {
        const res = await axiosInstance.put(`/collections/updateCollection`, body);
        return res.data.data;
    } catch (error: any) {
        console.error(`Error - Code: ${error.code}, Message: ${error.message}`);
        throw error;
    }
}

//Eliminar una colección
export async function deleteCollection(id: number | string | undefined) {
    try {
        const res = await axiosInstance.delete(`/collections/deteleCollection?id=${id}`);
        return res.data.data;
    } catch (error: any) {
        console.error(`Error - Code: ${error.code}, Message: ${error.message}`);
        throw error;
    }
}
