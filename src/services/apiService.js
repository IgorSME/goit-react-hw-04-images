export default async function apiService(searchName, page) {
  const url = `https://pixabay.com/api/?q=${searchName}&page=${page}&key=28041908-d52a5e823497e2788f8c70142&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
