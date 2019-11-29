export default function filter(visibility: string = "Show All", action: any) {
  switch (action.type) {
    case "SET_FILTER":
      return action.visibility;

    default:
      return visibility;
  }
}
