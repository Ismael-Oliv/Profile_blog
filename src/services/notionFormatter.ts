interface IContentProps {
  properties: {
    id: {
      title: [
        {
          text: {
            content: string;
          };
        }
      ];
    };
    description: {
      rich_text: [
        {
          text: {
            content: string;
          };
        }
      ];
    };
  };
}

export function notionFormatter(content: any) {
  const notionContent = content.map((pages: IContentProps) => {
    return {
      id: pages.properties.id.title[0].text.content,
      description: pages.properties.description.rich_text[0].text.content,
    };
  });

  return notionContent;
}
