import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj = {};
  try {
    const first = await uploadPhoto();
    const second = await createUser();
    obj.photo = first;
    obj.user = second;
  } catch (error) {
    obj.photo = null;
    obj.user = null;
  }
  return obj;
}
