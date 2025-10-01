export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: "Email обязателен",
  EMAIL_INVALID: "Некорректный формат email",
  USERNAME_REQUIRED: "Никнейм обязателен",
  USERNAME_MIN: "Никнейм должен быть не менее 3 символов",
  USERNAME_MAX: "Никнейм должен быть не более 20 символов",
  USERNAME_INVALID: "Только буквы, цифры и подчеркивания",
  PASSWORD_REQUIRED: "Пароль обязателен",
  PASSWORD_MIN: "Пароль должен быть не менее 6 символов",
  CONFIRM_PASSWORD_REQUIRED: "Подтверждение пароля обязательно",
  PASSWORDS_MATCH: "Пароли должны совпадать",
} as const;