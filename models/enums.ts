enum Enum_UserRole {
  estudiante = 'Estudiante',
  lider = 'Líder',
  administrador = 'Administrador',
}

enum Enum_UserStatus {
  pendiente = 'Pendiente',
  autorizado = 'Autorizado',
  no_autorizado = 'No Autorizado',
}

enum Enum_SubscriptionStatus {
  aceptada = 'Aceptada',
  rechazada = 'Rechazada',
}

enum Enum_ProjectStatus {
  activo = 'Activo',
  inactivo = 'Inactivo',
}

enum Enum_ProjectPhase {
  iniciado = 'Iniciado',
  en_desarrollo = 'En Desarrollo',
  terminado = 'Terminado',
  null = '',
}

enum Enum_ObjectiveType {
  general = 'General',
  especifico = 'Específico',
}

export {
  Enum_UserRole,
  Enum_UserStatus,
  Enum_SubscriptionStatus,
  Enum_ProjectStatus,
  Enum_ProjectPhase,
  Enum_ObjectiveType,
};
