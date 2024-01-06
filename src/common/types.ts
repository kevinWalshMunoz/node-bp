// Database
export interface Pokemon {
  id: string;
  name: string;
}

// Requests
export interface ILoginRequest {
  email: string;
  password: string;
}