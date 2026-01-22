
export interface ProviderType {
    provider_name: string;
    service_areas: string;
    renewable: boolean;
    status: boolean;
}

export interface GetProvidersResponseType {
    success: boolean;
    message: string;
    data: {
        provider_name: string;
        service_areas: string;
        renewable: boolean;
        status: boolean;
        updated_at: string;
        created_at: string;
        id: number;
    }[];
}


export interface CreateProviderResponseType {
    success: boolean;
    message: string;
    data: {
        provider_name: string;
        service_areas: string;
        renewable: boolean;
        status: boolean;
        updated_at: string;
        created_at: string;
        id: number;
    };
}


