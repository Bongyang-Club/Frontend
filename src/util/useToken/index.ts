export function setToken(token: string, time: number) {
  const obj = { value: token, expire: Date.now() + time * 60 * 1000 }; // time 분
  localStorage.setItem("token", JSON.stringify(obj));
}

export function getToken() {
  type token = {
    value: string;
    expire: number;
  };

  const obj: token = JSON.parse(localStorage.getItem("token") ?? "");

  if (obj.expire < Date.now()) {
    localStorage.removeItem("token");

    return null;
  }

  return obj.value;
}
