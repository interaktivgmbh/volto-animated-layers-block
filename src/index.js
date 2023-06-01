import AnimatedLayersBlockView from './AnimatedLayers/BlockView';
import AnimatedLayersBlockEdit from './AnimatedLayers/BlockEdit';
import applicationSVG from '@plone/volto/icons/application.svg';
import { defineMessages } from 'react-intl';

const applyConfig = (config) => {
  config.blocks.blocksConfig.animatedlayers = {
    id: 'animatedlayers',
    title: 'Animated Layers',
    icon: applicationSVG,
    group: 'common',
    view: AnimatedLayersBlockView,
    edit: AnimatedLayersBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  defineMessages({
    animatedlayers: {
      id: 'trans_title_animated_layers',
      defaultMessage: 'Animated Layers',
    },
  });

  return config;
};

export default applyConfig;
