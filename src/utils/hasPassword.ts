import bcrypt from "bcrypt";
const saltRounds = 12;
const myPlaintextPassword = "s0//P4$$w0rD";

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};
