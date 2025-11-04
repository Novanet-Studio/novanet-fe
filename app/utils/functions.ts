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

export const markdownToHtml = ({
  markdown,
  portrait,
}: {
  markdown: any;
  portrait?: any;
}) => {
  const getHTMLConvertion = (block: any) => {
    //? images block
    if (block.startsWith("![")) {
      const alt = block.match(/!\[(.*?)\]/)[1];
      const imgUrl = block.match(/\((.*?)\)/)[1];
      const labelMatch = block.match(/\*(.*?)\*/);
      const label = labelMatch ? labelMatch[1] : "";

      return `
      <img src="cloudinary:${imgUrl}" alt="${alt}" class="w-full md:pt-8 xl:pt-[unset]"/>
      ${label ? `<i class="text-s2 md:text-p1 xl:text-p2">${label}</i>` : ""}
    `;
    }

    //? subdivide blocks
    if (block.startsWith("#") && block.includes("\n")) {
      return block
        .split("\n")
        .map((b: string) => getHTMLConvertion(b))
        .join("");
    }

    //? heading block (with anchors)
    if (block.startsWith("#")) {
      const level = block.match(/^#+/)[0].length;
      const text = block.replace(/^#+\s*/, "");

      const textWithLinks = text.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank" class="text-azure underline">$1</a>'
      );

      const headingClass: any = {
        "#": "main__title text-azure",
        "##": "main__title text-azure",
        "###": "main__title",
      };

      return `<h${level} class="${
        headingClass[block.match(/^#+/)]
      }">${textWithLinks}</h${level}>`;
    }

    //? unordered list block
    if (block.startsWith("- ")) {
      const items = block
        .split("\n")
        .filter((line: string) => line.startsWith("- "))
        .map((line: string) => line.replace(/^-\s*/, ""));

      const listItems = items
        .map(
          (item: string) =>
            `<li class="text-p1 2xl:text-p2 3xl:text-4">${getHTMLConvertion(
              item
            )}</li>`
        )
        .join("");

      return `<ul class="list-disc pl-8">${listItems}</ul>`;
    }

    //? ordered list block
    if (/^\d+\.\s/.test(block)) {
      const items = block
        .split("\n")
        .filter((line: string) => /^\d+\.\s/.test(line))
        .map((line: string) => line.replace(/^\d+\.\s*/, ""));

      const listItems = items
        .map(
          (item: string) =>
            `<li class="text-p1 2xl:text-p2 3xl:text-4">${getHTMLConvertion(
              item
            )}</li>`
        )
        .join("");

      return `<ol class="list-decimal pl-8">${listItems}</ol>`;
    }

    //> add strong text
    block = block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    //> add cursive text
    block = block.replace(/\*(.*?)\*/g, "<em>$1</em>");

    //> add anchors
    block = block.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" target="_blank" class="text-azure underline">$1</a>'
    );

    //> add blockquote
    if (block.startsWith(">")) {
      const text = block.replace(/^>\s*/, "");
      return `<blockquote class="border-l-4 border-cadet-gray pl-4 italic">${text}</blockquote>`;
    }

    //> default paragraph
    return `<p class="description__short">${block}</p>`;
  };

  let html = markdown
    .split("\n\n")
    .map((block: any) => getHTMLConvertion(block))
    .join("");

  if (portrait) {
    html = `<img src="${portrait}" alt="Imagen de portada" class="w-full pb-4 xl:pb-2 3xl:pb-6"/>${html}`;
  }

  return `${html}`;
};

export function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };

  return new Date(dateString).toLocaleDateString("es-ES", options);
}
