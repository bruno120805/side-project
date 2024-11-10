export const VALID_ROLES = {
  admin: 'admin',
  user: 'user',
} as const;

export type ValidRoles = (typeof VALID_ROLES)[keyof typeof VALID_ROLES];
