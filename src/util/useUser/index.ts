export function setName(name: string, time: number) {
  const obj = { value: name, expire: Date.now() + time * 60 * 1000 }; // time 분
  localStorage.setItem("name", JSON.stringify(obj));
}

export function getName() {
  type name = {
    value: string;
    expire: number;
  };

  const obj: name = JSON.parse(localStorage.getItem("name") ?? "{}");

  if (obj.expire < Date.now()) {
    localStorage.removeItem("name");

    return null;
  }

  return obj.value;
}

export function setStudentId(id: string, time: number) {
  const obj = { value: id, expire: Date.now() + time * 60 * 1000 }; // time 분
  localStorage.setItem("id", JSON.stringify(obj));
}

export function getStudentId() {
  type id = {
    value: string;
    expire: number;
  };

  const obj: id = JSON.parse(localStorage.getItem("id") ?? "{}");

  if (obj.expire < Date.now()) {
    localStorage.removeItem("id");

    return null;
  }

  return obj.value;
}
