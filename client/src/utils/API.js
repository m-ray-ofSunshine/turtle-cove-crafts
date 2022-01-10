

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
  export const deleteSingleProduct = async (id) => {
    
    return await fetch(`/api/products/${id}`, {method: "DELETE", body: id}).then(res => res.json())
    
};
  export const updateSingleProduct = async (id, data) => {
  
    return await fetch(`/api/products/${id}`, {method: "PUT",headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}).then(res => res.json())
    
};
export const getProductData = async (req,res) => {
  return await fetch("/api/products").then(res => res.json())
  
};
export const getSingleProductData = async (id) => {
  
  return await fetch(`/api/products/${id}`).then(res => res.json())
  
};
export const createUser = async (userData) => {
  return await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = async (userData) => {
  return await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};
export const updateMe = (userData, token) => {
  return fetch('/api/users/me', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });
};