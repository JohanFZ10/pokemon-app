export type UserCredentials = {
    email: string;
    password: string;
    repeatPassword: string;
}

export const initialUserCredentials: UserCredentials = {
    email: '',
    password: '',
    repeatPassword: '',
}