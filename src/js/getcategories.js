export async function getCategories() {
  try {
    const response = await fetch(
      'https://books-backend.p.goit.global/books/category-list'
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
