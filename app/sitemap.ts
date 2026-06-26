import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https:/www.dndxdnd.com',
      lastModified: new Date(),
    },
  ]
}
