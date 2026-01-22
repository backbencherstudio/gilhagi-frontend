export interface GetTariffsResponseType {
    success: boolean;   
    message: string;
    data: {
        id: number;
        provider_id: number;
        tariff_name: string;
        price_per_kwh: number;
        base_fee: number;
        bonus: number;
        price_guarantee: number;
        renewable_energy: boolean;
        recommended: boolean;
    }[];
}

