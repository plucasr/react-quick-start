type SiginInVoid = (email: string, password: string) => void;
type UseLoginResponse = {
  signIn: SiginInVoid;
};

export const useLogin = (): UseLoginResponse => {
  const signIn: SiginInVoid = (email, password) => {
    console.log(email, password);
  };
  return { signIn };
};
