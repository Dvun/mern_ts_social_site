import jwtDecode from 'jwt-decode';

export const decodeToken = async (token: string) => {
  const data: {_id: string} = await jwtDecode(token);
  return data._id
};

