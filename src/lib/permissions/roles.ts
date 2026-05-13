import type { Role } from "@/lib/cms/types";
import type { Visibility } from "@/lib/cms/types";

const adminRoles: Role[] = ["OWNER", "ADMIN"];
const editorRoles: Role[] = ["OWNER", "ADMIN", "EDITOR"];
const authenticatedRoles: Role[] = ["OWNER", "ADMIN", "EDITOR", "FRIEND", "MEMBER"];

const roleRank: Record<Role, number> = {
  PUBLIC: 0,
  MEMBER: 1,
  FRIEND: 2,
  EDITOR: 3,
  ADMIN: 4,
  OWNER: 5,
};

export function hasRoleAtLeast(role: Role, minimumRole: Role) {
  return roleRank[role] >= roleRank[minimumRole];
}

export function canAccessAdmin(role: Role) {
  return adminRoles.includes(role);
}

export function canManageContent(role: Role) {
  return editorRoles.includes(role);
}

export function canManageUsers(role: Role) {
  return role === "OWNER" || role === "ADMIN";
}

export function canManageSettings(role: Role) {
  return role === "OWNER";
}

export function canManageFeatureFlags(role: Role) {
  return role === "OWNER" || role === "ADMIN";
}

export function canViewFriendFeatures(role: Role) {
  return role === "OWNER" || role === "ADMIN" || role === "FRIEND";
}

export function canViewVisibility(role: Role, visibility: Visibility) {
  switch (visibility) {
    case "PUBLISHED":
    case "UNLISTED":
      return true;
    case "FRIEND_ONLY":
      return canViewFriendFeatures(role);
    case "PRIVATE":
      return authenticatedRoles.includes(role);
    case "ADMIN_ONLY":
    case "DRAFT":
      return canAccessAdmin(role) || canManageContent(role);
    default:
      return false;
  }
}
