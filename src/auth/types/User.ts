import { Role } from "./Role";

export type User = {
    id: number;
    username: string;
    email: string | null; 
    phone: string | null;
    role: Role;
}