export interface IProduct {
  id: number,
  name: string,
  technicalDetails: string,
  annualValue: string,
  photos: string[],
}

class ProductAPI {
    protected baseUrl = 'http://localhost:3001/user/product';

    getAll = async ({search, page, limit}: {search?: string, page: number, limit: number}): Promise<IProduct[]> => {
        try {
            const searchParam = search ? `&search=${search}` : '';
            const response = await fetch(`${this.baseUrl}?page=${page}&limit=${limit}${searchParam}`, {
                cache: 'force-cache',
                next: { revalidate: 300 }
            });
            return await response.json();
        } catch {
            return [];
        }
    };

    getById = async (id: string): Promise<IProduct | null> => {
        try {
            const response = await fetch(`${this.baseUrl}/${id}`, {
                cache: 'force-cache',
                next: { revalidate: 300 }
            });
            return await response.json();
        } catch {
            return null;
        }
    };
}

export default new ProductAPI();