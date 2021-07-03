interface IRich_textDescription {
  type: string;
  text: {
    content: string;
    link: null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null;
}

interface ITitleID {
  type: string;
  text: {
    content: string;
    link: null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null;
}

interface Iproperties {
  id: {
    id: string;
    type: string;
    title: ITitleID[];
  };
  title: {
    id: string;
    type: string;
    rich_text: [
      {
        plain_text: string;
      }
    ];
  };
  description: {
    id: string;
    type: string;
    rich_text: IRich_textDescription[];
  };
  type: {
    id: string;
    type: string;
    rich_text: [
      {
        text: {};
        annotations: {};
        plain_text: string;
      }
    ];
  };
  autor: {
    id: string;
    type: string;
    created_by: {
      object: string;
      id: string;
      name: string;
      avatar_url: null;
      type: string;
      person: {};
    };
  };
}

export interface ContentFromNotionProps {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  parent: {
    type: string;
  };
  archived: boolean;
  properties: Iproperties;
}
