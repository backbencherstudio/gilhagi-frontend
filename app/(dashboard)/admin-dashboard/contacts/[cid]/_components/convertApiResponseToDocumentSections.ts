// Create a function to convert API response to document sections
export const convertApiResponseToDocumentSections = (documentData: any) => {
    if (!documentData?.data) return [];
  
    const baseUrl = process.env.NEXT_PUBLIC_IMAGE_API_URL; // Replace with your actual base URL

    console.log(baseUrl);
    return [
      {
        title: "Electricity Provider",
        subtitle: "Electricity Provider Document",
        files: documentData.data.electricity_provider ? [
          { 
            name: documentData.data.electricity_provider.split('/').pop() || "electricity_provider.png", 
            image: `${baseUrl}${documentData.data.electricity_provider}` 
          }
        ] : []
      },
      {
        title: "Debit Mandate",
        subtitle: "SEPA Direct Debit Mandate",
        files: documentData.data.debit_mandate ? [
          { 
            name: documentData.data.debit_mandate.split('/').pop() || "debit_mandate.bin", 
            image: `${baseUrl}${documentData.data.debit_mandate}` 
          }
        ] : []
      },
      {
        title: "Power of Attorney",
        subtitle: "Power Attorney Document",
        files: documentData.data.power_attorney ? [
          { 
            name: documentData.data.power_attorney.split('/').pop() || "power_attorney.png", 
            image: `${baseUrl}${documentData.data.power_attorney}` 
          }
        ] : []
      },
      {
        title: "Electricity Meter",
        subtitle: "Photo of The Meter",
        files: documentData.data.electricity_meter ? [
          { 
            name: documentData.data.electricity_meter.split('/').pop() || "electricity_meter.png", 
            image: `${baseUrl}${documentData.data.electricity_meter}` 
          }
        ] : []
      },
      {
        title: "Price Increases",
        subtitle: "Price Increases Document",
        files: documentData.data.price_increases ? [
          { 
            name: documentData.data.price_increases.split('/').pop() || "price_increases.jpg", 
            image: `${baseUrl}${documentData.data.price_increases}` 
          }
        ] : []
      },
      {
        title: "Other Documents",
        subtitle: "Additional Contract Documents",
        files: documentData.data.other_document ? [
          { 
            name: documentData.data.other_document.split('/').pop() || "other_document.jpg", 
            image: `${baseUrl}${documentData.data.other_document}` 
          }
        ] : []
      }
    ].filter(section => section.files.length > 0); // Only include sections with files
  };
  
