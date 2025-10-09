export const cleanGraphQLResponse = (response: any) => {
  const cleanObject = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(cleanObject);
    } else if (obj && typeof obj === "object") {
      if (obj.data) {
        return cleanObject(obj.data);
      } else if (obj.attributes) {
        const { attributes, ...rest } = obj;
        return { ...cleanObject(attributes), ...cleanObject(rest) };
      } else {
        const cleaned: any = {};
        for (const key in obj) {
          cleaned[key] = cleanObject(obj[key]);
        }
        return cleaned;
      }
    }
    return obj;
  };

  return cleanObject(response);
};