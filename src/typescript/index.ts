const endpoint = "http://localhost:8080/users";

interface User {
  id: number;
  username: string;
  password: string;
  avatar: string;
  date: string;
  country: string;
  premium: boolean;
}

const fetchApi = async () => {
  const response = await fetch(endpoint);
  const data: User[] = await response.json();
  console.log(data);
  return data;
};
fetchApi();
