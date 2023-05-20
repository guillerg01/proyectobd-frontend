export const postRadio = async (id,value) => {
    const url = `http://localhost:3000/people/${id}`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        value: value
      }),
      headers: {
        "content-type": "application/json",
      },
    })
    
    return response.json();
  };