import { defineDocs, frontmatterSchema, defineConfig } from 'fumadocs-mdx/config'
import { z } from 'zod'
import remarkGfm from 'remark-gfm'
import { rehypeToc } from 'fumadocs-core/mdx-plugins'
import { rehypeLinkNewWindow } from './lib/rehype'

// Define blog collection
export const blog = defineDocs({
  dir: 'content/blog',
  docs: {
    files: ['*.md*'],
    schema: frontmatterSchema.extend({
      date: z.any().optional(),
      image: z.string().optional(),
    }),
    postprocess: {
      extractLinkReferences: true,
    },
  },
})

// Define weekly collection
export const weekly = defineDocs({
  dir: 'content/weekly',
  docs: {
    files: ['*.md*'],
    schema: frontmatterSchema.extend({
      date: z.any().optional(),
      image: z.string().optional(),
    }),
    postprocess: {
      extractLinkReferences: true,
    },
  },
})

// Global MDX configuration
export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: v => [
      ...v,
      // [
      //   rehypeAutolinkHeadings,
      //   {
      //     properties: { className: ['header-anchor'], ariaHidden: true, tabIndex: -1 },
      //     content: {
      //       type: 'text',
      //       value: '#',
      //     },
      //   },
      // ],
      rehypeLinkNewWindow,
      rehypeToc,
    ],
    rehypeCodeOptions: {
      theme: 'rose-pine-moon',
      transformers: [
        {
          pre(node) {
            const header = {
              type: 'element',
              tagName: 'div',
              properties: {},
              children: [
                {
                  type: 'element',
                  tagName: 'span',
                  properties: {},
                  children: [{ type: 'text', value: this.options.lang || 'text' }],
                },
              ],
            }
            node.children.unshift(header as any)
          },
        },
      ],
    },
  },
})
