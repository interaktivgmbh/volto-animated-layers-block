/* eslint-disable import/no-unresolved */
//noinspection JSUnresolvedReference

import React, { useState } from 'react';
import { flattenToAppURL, withBlockExtensions } from '@plone/volto/helpers';
import './static/style/block.less';
import { Link } from 'react-router-dom';

const defaultEmptyList = [];

const AnimatedLayersBlockView = (props) => {
  const layers = props.data.layers || defaultEmptyList;
  const buttons = props.data.buttons || defaultEmptyList;
  const initialLayerStates = layers.map((layer) => layer.visible || false);
  const [layerStates, setLayerStates] = useState(initialLayerStates);

  const renderSelection = () => {
    const handleCheckboxClick = (index) => {
      return () => {
        const checked = !layerStates[index];
        setLayerStates((prevState) => {
          const newState = [...prevState];
          newState[index] = checked;
          return newState;
        });
      };
    };

    return layers.map((layer, idx) => (
      <div className="layer" key={idx}>
        <label className="toggler-wrapper style-1">
          <input
            type="checkbox"
            className="layer-selector"
            data-layer={layer.layerId}
            data-label={layer.label}
            checked={layerStates[idx]}
            onChange={handleCheckboxClick(idx)}
          />
          <div className="toggler-slider">
            <div className="toggler-knob"></div>
          </div>
        </label>
        <div className="layer-text">{layer.label}</div>
      </div>
    ));
  };

  const renderButtons = () => {
    if (!buttons || buttons.length === 0) {
      return null;
    }

    return buttons.map((button, idx) => {
      let linkComponent;

      if (button.link && Array.isArray(button.link) && button.link.length > 0) {
        linkComponent = button.link.map((link, linkIdx) => (
          <a href={link['@id']} key={linkIdx} target="_blank" rel="noreferrer" className="btn btn-primary">
            {button.label}
          </a>
        ));
      } else if (button.link && typeof button.link === 'object') {
        linkComponent = (
          <Link to={flattenToAppURL(button.link['@id'])} key={idx} className="btn btn-primary">
            {button.label}
          </Link>
        );
      } else {
        linkComponent = (
          <Link to="#" key={idx} className="btn btn-primary btn-empty">
            {button.label}
          </Link>
        );
      }

      return <React.Fragment key={idx}>{linkComponent}</React.Fragment>;
    });
  };

  const renderResult = () => {
    if (!layers || layers.length === 0) {
      return null;
    }

    return layers.map((layer, idx) => {
      const layerStyle = {
        top: `${layer.top}%`,
        left: `${layer.left}%`,
        transform: `scale(${layer.size})`,
        opacity: layerStates[idx] ? '1' : '0',
      };

      let url = '';
      if (layer.animation && Array.isArray(layer.animation) && layer.animation.length > 0) {
        url = layer.animation[0]['@id'];
      } else if (layer.animation && typeof layer.animation === 'object') {
        url = '/++api++/' + layer.animation['@id'] + '/@@display-file-svg';
      }

      return (
        <div className="layer" data-layer={`layer-${idx}`} key={idx} style={layerStyle}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <object type="image/svg+xml" data={url} />
        </div>
      );
    });
  };

  return (
    <div className="animated-layers-block">
      <div className="grid-layer"></div>
      <div className="columns">
        <div className="column layers-selection">
          <div className="block-title">{props.data.title}</div>
          <div className="block-description">{props.data.description}</div>
          <div className="layers">{renderSelection()}</div>
          <div className="buttons-wrapper">{renderButtons()}</div>
        </div>
        <div className="column layers-result">
          <div className="layers">{renderResult()}</div>
        </div>
      </div>
    </div>
  );
};

export default withBlockExtensions(AnimatedLayersBlockView);
