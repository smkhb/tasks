export function extractQueryParams(query) {
  return query.substring(1).split("&").reduce((queryParams, param) => {
    let [key, value] = param.split("="); 
    value = value.replace(/\+/g, ' '); // Substitui '+' por espaço
    queryParams[key] = value;

    return queryParams 
  }, {});
}