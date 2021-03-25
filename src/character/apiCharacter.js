export const singleCharacter = (characterId) => {
  return fetch(`https://swapi.dev/api/people/${characterId}`, {
    method: 'GET',
  })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json();
      } else {
        return response.text();
      }
    })
    .catch((err) => console.log(err));
};
