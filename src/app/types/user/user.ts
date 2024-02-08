import {UserRole} from "./user-role";

export interface User {
  userID: number,
  email: string,
  password: string,
  personalInfo: string,
  username: string,
  userRole: UserRole
}
