export async function useApiRequest(path = "/", method = "GET", options) {
  const config = useRuntimeConfig();

  return $fetch(path, { baseURL: config.public.baseURL, method, ...options });
}

export async function usePostRequest(path = "/", body = {}, options) {
  return useApiRequest(path, "POST", {
    ...options,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}
