import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import './static/style/block.less';

const AnimatedLayersBlockView = (props) => {
  const layers = props.data.layers;
  console.log(layers);

  return (
    <>
      <div className="animated-layers-block">
        <div className="bg-mouse-effect">
          <div className="bg-wave"></div>
          <div className="mouse-color"></div>
        </div>
        <div className="grid-layer"></div>
        <div className="sitemap-container">
          <div className="column homepage">
            <h1>Launch fast, Scale to millions.</h1>
            <h2>Authentication & payments for companies who love Webflow, Stripe, & React. Try it for free.</h2>
            <div className="layers">
              {layers.map((layer) => (
                <div className="layer">
                  <input type="checkbox" className="layer-selector" data-layer="layer-1" />
                  {layer.title}
                </div>
              ))}
            </div>
          </div>
          <div className="column animation-layers">
            <div className="layers">
              {layers.map((layer) => (
                <div className="layer" data-layer="layer-1">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <object type="image/svg+xml" data={layer.animation['@id']}></object>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withBlockExtensions(AnimatedLayersBlockView);
