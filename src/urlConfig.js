const baseUrl = process.env.API || "https://nadshop-server.herokuapp.com";
//const baseUrl = "http://localhost:2001";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};