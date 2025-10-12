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

export function createExcerpt(markdownString: string, maxLength = 250): string {
  if (!markdownString) return "";

  const plainText = markdownString
    .replace(/(\r\n|\n|\r)/gm, " ")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\|.*\|/g, "")
    .replace(/#+\s/g, "")
    .replace(/(\*|_)/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  let trimmedText = plainText.substring(0, maxLength);
  trimmedText = trimmedText.substring(
    0,
    Math.min(trimmedText.length, trimmedText.lastIndexOf(" "))
  );

  return `${trimmedText}...`;
}
