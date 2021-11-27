

export const createProduct = (productData) => {
    return fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
  };
export const uploadImage = (file) => {
    return fetch('/api/products/upload', {
      method: 'POST',
      headers: {
        
      },
      body: file,
    });
  };