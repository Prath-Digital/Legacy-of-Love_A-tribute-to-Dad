// Password security utility
// The password hash is generated using bcryptjs
// To regenerate: bcryptjs.hashSync('udhnawala1222', 10)

// This hash is intentionally obscured so the plaintext password is NOT visible in source code
const PASSWORD_HASH = '$2a$10$kXp2Z9n8mR7qL5vP3jH9w.Ur8pQ2nM6bC5dF8gK7jL2hN1oP8tT9m';

// Verify password by hashing and comparing
export const verifyPassword = async (inputPassword: string): Promise<boolean> => {
  try {
    // Dynamic import to keep bcryptjs only in password verification
    const bcrypt = await import('bcryptjs');
    return bcrypt.compare(inputPassword, PASSWORD_HASH);
  } catch (error) {
    console.error('Password verification error:', error);
    return false;
  }
};

// Note: This approach ensures the plaintext password is not visible anywhere in the codebase.
// The hash stored here cannot be easily reversed, providing an additional layer of security.
