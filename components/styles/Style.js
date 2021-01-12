import styled from 'styled-components';
import { variant } from 'styled-system';

export const TemplateStyle = styled('div')(
    variant({
      scale: 'template',
      variants: {
        main: {}
      },
    })
);

export const LayoutStyle = styled('div')(
  variant({
    scale: 'layout',
    variants: {
      main: {}
    },
  })
);

export const GaugeStyle = styled('div')(
  variant({
    scale: 'gauge',
    variants: {
      leftTop: {},
      leftBotton: {},
      rightTop: {},
      rightBotton: {},
      one:{}
    },
  })
);