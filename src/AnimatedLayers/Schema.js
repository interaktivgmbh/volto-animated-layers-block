const AnimationLayerSchema = () => ({
  title: 'Animation Layer',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['label', 'animation', 'visible', 'size', 'top', 'left'],
    },
  ],
  properties: {
    label: {
      title: 'Label',
      description: 'Label of the Checkbox',
      default: '',
    },
    animation: {
      title: 'Animation',
      description: 'Select the file of the animated SVG.',
      widget: 'object_browser',
      widgetOptions: {
        pattern_options: { selectableTypes: ['File'] },
      },
      mode: 'single',
      return: 'single',
      allowExternals: true,
    },
    visible: {
      title: 'Visible',
      description: 'Initially Visible?',
      type: 'boolean',
    },
    size: {
      title: 'Scale Size',
      description: 'Scale factor of the animated Layer.',
      default: '1.0',
    },
    top: {
      title: 'Position Top',
      description: 'Css-Attribute "top". Set value in Percentage.',
      default: '0',
    },
    left: {
      title: 'Position Left',
      description: 'Css-Attribute "left". Set value in Pixels.',
      default: '0',
    },
  },
  required: ['label', 'animation'],
});

export const AnimatedLayersSchema = (props) => {
  return {
    required: [],
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'description', 'layers'],
      },
    ],
    properties: {
      title: {
        title: 'Title',
        description: 'Title of the Block (left side).',
        default: '',
      },
      description: {
        title: 'Description',
        description: 'Description of the Block (left side).',
        default: '',
      },
      layers: {
        title: 'Animation Layers',
        description: 'Add Animation Layers here.',
        schema: AnimationLayerSchema({}),
        widget: 'object_list',
      },
    },
  };
};

export default AnimatedLayersSchema;