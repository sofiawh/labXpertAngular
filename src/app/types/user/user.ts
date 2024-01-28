import {UserRole} from "./user-role";

export interface User {
  userId: number,
  email: string,
  password: string,
  personalInfo: string,
  username: string,
  userRole: UserRole
}
