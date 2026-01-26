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



export interface CreateAndEditTariffType {
    vendor_id: number;
    tariff_name: string;
    price_kwh: number;
    basic_fee: number;
    exchange_bonus: number;
    rates: number;
    price_guarantee: string;
    renewable: number;
    status: number;
}

