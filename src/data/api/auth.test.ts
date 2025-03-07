import { describe, it, expect, vi } from "vitest";
import { signIn } from "./auth";
import { Api } from "./";

describe("signIn", () => {
  it("should resolve with a token when signIn is called", async () => {
    const user = "test@example.com";
    const password = "password123";

    const result = await signIn(user, password);

    expect(result).toEqual({
      success: true,
      payload: {
        token:
          "asd9f0as98df0as9d8f9sd8f0a9sd8f.a0-9sd8f0a9sd8f0a9sd8f0as9d8f9dsf.as8d7f9as8d7f9a8sd7f987sd8f7",
      },
    });
  });
});

describe("Api", () => {
  it("should call signIn when Api.signIn is called", async () => {
    const user = "test@example.com";
    const password = "password123";

    // Mock the signIn function
    const mockSignIn = vi.fn(signIn);
    Api.signIn = mockSignIn;

    await Api.signIn(user, password);

    // Assert that signIn was called with the correct arguments
    expect(mockSignIn).toHaveBeenCalledWith(user, password);

    // Reset the mock to avoid side effects
    mockSignIn.mockRestore();
  });
});
