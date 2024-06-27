export function buildRoutePath(path){
  const routeParameters = /:([a-zA-Z]+)/g // :id
  const pathWithParams = path.replace(routeParameters, "(?<$1>[a-z0-9\-_]+)") // (?<id>[a-z0-9\-_]+)
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`) 
  return pathRegex; // /^/tasks/(?<id>[a-z0-9\-_]+)(?<query>\?(.*))?$/
}