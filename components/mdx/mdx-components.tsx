import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import defaultComponents from 'fumadocs-ui/mdx'
import { MDXComponents } from 'mdx/types'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    img: props => <ImageZoom {...props} />,
    ...components,
  }
}
