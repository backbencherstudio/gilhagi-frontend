// Re-export public and private axios instances
// Use publicAxios for unauthenticated requests (login, register, public data)
// Use privateAxios for authenticated requests (automatically adds Bearer token)
export { publicAxios } from './publicAxios'
export { privateAxios } from './privateAxios'

// For backward compatibility, export privateAxios as axiosInstance
// Note: Consider migrating to explicit publicAxios or privateAxios imports
export { privateAxios as axiosInstance } from './privateAxios'
