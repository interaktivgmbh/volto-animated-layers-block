import React from 'react';
import { BlockDataForm } from '@plone/volto/components';
import AnimatedLayersSchema from './Schema';

const AnimatedLayersDataForm = (props) => {
  const { data, block, onChangeBlock } = props;
  const schema = AnimatedLayersSchema({ ...props });

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      block={block}
    />
  );
};

export default AnimatedLayersDataForm;
