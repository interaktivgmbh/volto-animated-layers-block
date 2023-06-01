import { defineMessages } from 'react-intl';

const animationLayerSchemaMessages = defineMessages({
  titleLabel: {
    id: 'schema.animationLayer.title',
    defaultMessage: 'Animation Layer',
  },
  fieldsetDefault: {
    id: 'schema.animationLayer.fieldset.default',
    defaultMessage: 'Default',
  },
  labelTitle: {
    id: 'schema.animationLayer.label.title',
    defaultMessage: 'Label',
  },
  labelDescription: {
    id: 'schema.animationLayer.label.description',
    defaultMessage: 'Label of the Checkbox',
  },
  animationTitle: {
    id: 'schema.animationLayer.animation.title',
    defaultMessage: 'Animation',
  },
  animationDescription: {
    id: 'schema.animationLayer.animation.description',
    defaultMessage: 'Select the file of the animated SVG.',
  },
  visibleTitle: {
    id: 'schema.animationLayer.visible.title',
    defaultMessage: 'Visible',
  },
  visibleDescription: {
    id: 'schema.animationLayer.visible.description',
    defaultMessage: 'Initially Visible?',
  },
  sizeTitle: {
    id: 'schema.animationLayer.size.title',
    defaultMessage: 'Scale Size',
  },
  sizeDescription: {
    id: 'schema.animationLayer.size.description',
    defaultMessage: 'Scale factor of the animated Layer. Range between 0 and 1.',
  },
  topTitle: {
    id: 'schema.animationLayer.top.title',
    defaultMessage: 'Position Top',
  },
  topDescription: {
    id: 'schema.animationLayer.top.description',
    defaultMessage: 'Css-Attribute "top". Value is in Percentage.',
  },
  leftTitle: {
    id: 'schema.animationLayer.left.title',
    defaultMessage: 'Position Left',
  },
  leftDescription: {
    id: 'schema.animationLayer.left.description',
    defaultMessage: 'Css-Attribute "left". Value is in Percentage.',
  },
});
const callToActionButtonSchemaMessages = defineMessages({
  buttonTitle: {
    id: 'schema.callToActionButton.title',
    defaultMessage: 'Button',
  },
  buttonFieldsetDefault: {
    id: 'schema.callToActionButton.fieldset.default',
    defaultMessage: 'Default',
  },
  buttonLabelTitle: {
    id: 'schema.callToActionButton.label.title',
    defaultMessage: 'Label',
  },
  buttonLabelDescription: {
    id: 'schema.callToActionButton.label.description',
    defaultMessage: 'Label of the Link',
  },
  buttonLinkTitle: {
    id: 'schema.callToActionButton.link.title',
    defaultMessage: 'Link',
  },
  buttonLinkDescription: {
    id: 'schema.callToActionButton.link.description',
    defaultMessage: 'External or Internal Link.',
  },
});
const animatedLayersSchemaMessages = defineMessages({
  defaultTitle: {
    id: 'schema.animatedLayers.fieldset.default',
    defaultMessage: 'Default',
  },
  titleLabel: {
    id: 'schema.animatedLayers.title.title',
    defaultMessage: 'Title',
  },
  titleDescription: {
    id: 'schema.animatedLayers.title.description',
    defaultMessage: 'Title of the Block (left side).',
  },
  descriptionLabel: {
    id: 'schema.animatedLayers.description.title',
    defaultMessage: 'Description',
  },
  descriptionDescription: {
    id: 'schema.animatedLayers.description.description',
    defaultMessage: 'Description of the Block (left side).',
  },
  layersTitle: {
    id: 'schema.animatedLayers.layers.title',
    defaultMessage: 'Animation Layers',
  },
  layersDescription: {
    id: 'schema.animatedLayers.layers.description',
    defaultMessage: 'Add Animation Layers.',
  },
  buttonsTitle: {
    id: 'schema.animatedLayers.buttons.title',
    defaultMessage: 'Call to Action Buttons',
  },
  buttonsDescription: {
    id: 'schema.animatedLayers.buttons.description',
    defaultMessage: 'Add a Call to Action Button.',
  },
});

export const AnimationLayerSchema = ({ intl }) => ({
  title: intl?.formatMessage(animationLayerSchemaMessages.titleLabel) || '',
  fieldsets: [
    {
      id: 'default',
      title: intl?.formatMessage(animationLayerSchemaMessages.fieldsetDefault) || '',
      fields: ['label', 'animation', 'visible', 'size', 'top', 'left'],
    },
  ],
  properties: {
    label: {
      title: intl?.formatMessage(animationLayerSchemaMessages.labelTitle) || '',
      description: intl?.formatMessage(animationLayerSchemaMessages.labelDescription) || '',
      default: '',
    },
    animation: {
      title: intl?.formatMessage(animationLayerSchemaMessages.animationTitle) || '',
      description: intl?.formatMessage(animationLayerSchemaMessages.animationDescription) || '',
      widget: 'object_browser',
      widgetOptions: {
        pattern_options: { selectableTypes: ['File'] },
      },
      mode: 'single',
      return: 'single',
      allowExternals: true,
    },
    visible: {
      title: intl?.formatMessage(animationLayerSchemaMessages.visibleTitle) || '',
      description: intl?.formatMessage(animationLayerSchemaMessages.visibleDescription) || '',
      type: 'boolean',
    },
    size: {
      title: intl?.formatMessage(animationLayerSchemaMessages.sizeTitle) || '',
      description: intl?.formatMessage(animationLayerSchemaMessages.sizeDescription) || '',
      default: '1.0',
    },
    top: {
      title: intl?.formatMessage(animationLayerSchemaMessages.topTitle) || '',
      description: intl?.formatMessage(animationLayerSchemaMessages.topDescription) || '',
      default: '0',
    },
    left: {
      title: intl?.formatMessage(animationLayerSchemaMessages.leftTitle) || '',
      description: intl?.formatMessage(animationLayerSchemaMessages.leftDescription) || '',
      default: '0',
    },
  },
  required: ['label', 'animation'],
});

export const CallToActionButtonSchema = ({ intl }) => ({
  title:
    intl?.formatMessage(callToActionButtonSchemaMessages.buttonTitle) ||
    callToActionButtonSchemaMessages.buttonTitle.defaultMessage ||
    '',
  fieldsets: [
    {
      id: 'default',
      title:
        intl?.formatMessage(callToActionButtonSchemaMessages.buttonFieldsetDefault) ||
        callToActionButtonSchemaMessages.buttonFieldsetDefault.defaultMessage ||
        '',
      fields: ['label', 'link'],
    },
  ],
  properties: {
    label: {
      title:
        intl?.formatMessage(callToActionButtonSchemaMessages.buttonLabelTitle) ||
        callToActionButtonSchemaMessages.buttonLabelTitle.defaultMessage ||
        '',
      description:
        intl?.formatMessage(callToActionButtonSchemaMessages.buttonLabelDescription) ||
        callToActionButtonSchemaMessages.buttonLabelDescription.defaultMessage ||
        '',
      default: '',
    },
    link: {
      title:
        intl?.formatMessage(callToActionButtonSchemaMessages.buttonLinkTitle) ||
        callToActionButtonSchemaMessages.buttonLinkTitle.defaultMessage ||
        '',
      description:
        intl?.formatMessage(callToActionButtonSchemaMessages.buttonLinkDescription) ||
        callToActionButtonSchemaMessages.buttonLinkDescription.defaultMessage ||
        '',
      widget: 'object_browser',
      mode: 'single',
      return: 'single',
      allowExternals: true,
    },
  },
  required: ['label', 'link'],
});

export const AnimatedLayersSchema = ({ intl }) => ({
  required: [],
  fieldsets: [
    {
      id: 'default',
      title:
        intl?.formatMessage(animatedLayersSchemaMessages.defaultTitle) ||
        animatedLayersSchemaMessages.defaultTitle.defaultMessage ||
        '',
      fields: ['title', 'description'],
    },
  ],
  properties: {
    title: {
      title:
        intl?.formatMessage(animatedLayersSchemaMessages.titleLabel) ||
        animatedLayersSchemaMessages.titleLabel.defaultMessage,
      description:
        intl?.formatMessage(animatedLayersSchemaMessages.titleDescription) ||
        animatedLayersSchemaMessages.titleDescription.defaultMessage,
      default: '',
    },
    description: {
      title:
        intl?.formatMessage(animatedLayersSchemaMessages.descriptionLabel) ||
        animatedLayersSchemaMessages.descriptionLabel.defaultMessage,
      description:
        intl?.formatMessage(animatedLayersSchemaMessages.descriptionDescription) ||
        animatedLayersSchemaMessages.descriptionDescription.defaultMessage,
      default: '',
    },
    layers: {
      title:
        intl?.formatMessage(animatedLayersSchemaMessages.layersTitle) ||
        animatedLayersSchemaMessages.layersTitle.defaultMessage,
      description:
        intl?.formatMessage(animatedLayersSchemaMessages.layersDescription) ||
        animatedLayersSchemaMessages.layersDescription.defaultMessage,
      schema: AnimationLayerSchema({ intl }),
      widget: 'object_list',
    },
    buttons: {
      title:
        intl?.formatMessage(animatedLayersSchemaMessages.buttonsTitle) ||
        animatedLayersSchemaMessages.buttonsTitle.defaultMessage,
      description:
        intl?.formatMessage(animatedLayersSchemaMessages.buttonsDescription) ||
        animatedLayersSchemaMessages.buttonsDescription.defaultMessage,
      schema: CallToActionButtonSchema({ intl }),
      widget: 'object_list',
    },
  },
});

export default AnimatedLayersSchema;
