import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function addTemplateToNotion(template: string, userToken: string) {
  // Notion API kullanarak şablonu kullanıcı hesabına ekle
  // Detaylı veri modeli ve metotlar daha sonra geliştirilecek.
  return { ok: true };
}