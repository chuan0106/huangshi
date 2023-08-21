const get = (url, param) => {
  let search = param
    ? '?' +
      JSON.stringify(param)
        .replace(/[{}""]/g, '')
        .replace(/,/g, '&')
        .replace(/:/g, '=')
    : '';
  const _url = url + search;
  return fetch(_url).then(function(response) {
    return response.json();
  });
};

const post = (url, param) => {
  return fetch(url, {
    body: JSON.stringify(param),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  }).then(response => response.json());
};

const FetchComponent = Component => {
  return (url, param) => {
    return <Component get={get} post={post} />;
  };
};

export default FetchComponent;