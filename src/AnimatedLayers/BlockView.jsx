import React, { useEffect, useState } from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import './static/style/block.less';
import { Link } from 'react-router-dom';

const defaultEmptyList = [];

const AnimatedLayersBlockView = (props) => {
  const layers = props.data.layers || defaultEmptyList;
  const buttons = props.data.buttons || defaultEmptyList;
  const [layerStates, setLayerStates] = useState([]);

  useEffect(() => {
    if (layers.length === 0) {
      return;
    }

    // Function to show/hide layers with animation
    const animateLayerVisibility = (layerId, show) => {
      const layer = document.querySelector(`.layer[data-layer="${layerId}"]`);
      layer.style.opacity = show ? '1' : '0';
      layer.style.pointerEvents = show ? 'auto' : 'none';
    };

    // Initialize layer states based on initial visibility values
    const initialLayerStates = layers.map((layer) => layer.visible);
    setLayerStates(initialLayerStates);

    // Get the checkbox elements
    const checkboxes = document.getElementsByClassName('layer-selector');

    // Iterate over each checkbox
    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i];
      const layerId = checkbox.getAttribute('data-layer');
      if (!checkbox.getAttribute('data-label')) {
        return;
      }

      // Add event listener for checkbox click
      checkbox.addEventListener('click', () => {
        const checked = checkbox.checked;
        animateLayerVisibility(layerId, checked);

        // Update the layer state in the component state
        setLayerStates((prevState) => {
          const newState = [...prevState];
          newState[i] = checked;
          return newState;
        });
      });

      // Show/hide layers based on initial checkbox state
      animateLayerVisibility(layerId, initialLayerStates[i]);
    }
  }, [layers]);

  return (
    <>
      <div className="animated-layers-block">
        <div className="grid-layer"></div>
        <div className="sitemap-container">
          <div className="column homepage">
            <div className="block-title">{props.data.title}</div>
            <div className="block-description">{props.data.description}</div>
            <div className="layers">
              {layers
                ? layers.map((layer, idx) => (
                    <div className="layer" key={idx}>
                      <input
                        type="checkbox"
                        className="layer-selector"
                        data-layer={'layer-' + idx}
                        data-label={layer.label}
                        checked={layerStates[idx]}
                      />{' '}
                      {layer.label}
                    </div>
                  ))
                : null}
            </div>
            <div className="buttons-wrapper">
              {buttons
                ? buttons.map((button, idx) => (
                    <Link to={button.link[0]['@id']} key={idx} className={'btn btn-call-to-action'}>
                      {button.label}
                    </Link>
                  ))
                : null}
            </div>
          </div>
          <div className="column animation-layers">
            <div className="layers">
              {layers
                ? layers.map((layer, idx) => (
                    <div
                      className="layer"
                      data-layer={'layer-' + idx}
                      key={idx}
                      style={{ top: layer.top, left: layer.left, transform: `scale(${layer.size})` }}
                    >
                      {layer.animation?.length === 1 ? (
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <object type="image/svg+xml" data={layer.animation[0]['@id']}></object>
                      ) : null}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withBlockExtensions(AnimatedLayersBlockView);
