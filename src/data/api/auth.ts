export const signIn = (user: string, password: string) =>
  new Promise((resolve) => {
    console.log("signIn", user, password);
    resolve({
      success: true,
      payload: {
        token:
          "asd9f0as98df0as9d8f9sd8f0a9sd8f.a0-9sd8f0a9sd8f0a9sd8f0as9d8f9dsf.as8d7f9as8d7f9a8sd7f987sd8f7",
      },
    });
  });
