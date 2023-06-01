import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import AnimationLayerSchema from './Schema';
import AnimatedLayersBlockView from './BlockView';
import './static/style/block.less';
import { SidebarPortal, InlineForm } from '@plone/volto/components';

const AnimatedLayersBlockEdit = (props) => {
  const { selected, onChangeBlock, block, data } = props;
  const schema = AnimationLayerSchema(props);

  return (
    // <> represents a React Fragment see https://legacy.reactjs.org/docs/fragments.html#short-syntax for more details
    <>
      <SidebarPortal selected={selected}>
        <InlineForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
      <AnimatedLayersBlockView {...props} />
    </>
  );
};

export default withBlockExtensions(AnimatedLayersBlockEdit);
