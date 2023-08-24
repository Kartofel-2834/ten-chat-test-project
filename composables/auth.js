export async function useLogin(username, password) {
  try {
    const response = await useAsyncData("login", () =>
      usePostRequest("/auth/login", { username, password })
    );

    const user = response.data.value;

    if (!user?.id) throw new Error("failed");

    localStorage.setItem("ten-user", JSON.stringify(user));
  } catch (err) {
    throw err;
  }
}
