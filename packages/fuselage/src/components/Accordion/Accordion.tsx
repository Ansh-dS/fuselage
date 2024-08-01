import type { ComponentProps, ReactElement, ReactNode } from 'react';

import Box from '../Box';
import { AccordionItem } from './AccordionItem';

type AccordionProps = ComponentProps<typeof Box> & {
  animated?: boolean;
  children: ReactNode;
};

export function Accordion(props: AccordionProps): ReactElement<AccordionProps> {
  return <Box animated rcx-accordion {...props} />;
}

/**
 * @deprecated use named import instead
 */
Accordion.Item = AccordionItem;
