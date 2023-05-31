import React from 'react';
import renderer from 'react-test-renderer';
import AnimatedLayersBlockEdit from '../BlockEdit';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
//noinspection NpmUsedModulesInstalled
import config from '@plone/volto/registry';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore();

//noinspection JSUnresolvedFunction
beforeAll(() => {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,

    animatedlayers: {
      id: 'animatedlayers',
    },
  };
});

describe('Edit', () => {
  const store = mockStore({
    intl: {
      locale: 'en',
      messages: {},
    },
  });

  it('renders AnimatedLayers Edit component without data', () => {
    const data = {
      '@type': 'animatedlayers',
      title: '',
      description: '',
      layers: [],
      buttons: [],
    };

    const component = renderer.create(
      <Provider store={store}>
        <AnimatedLayersBlockEdit data={data} />
      </Provider>,
    );
    const json = component.toJSON();
    //noinspection JSUnresolvedFunction
    expect(json).toMatchSnapshot();
  });

  it('renders AnimatedLayers Edit component with data', () => {
    const data = {
      '@type': 'animatedlayers',
      title: 'Test-Title',
      description: 'Test-Description',
      layers: [
        {
          label: 'Layer 1',
          visible: true,
          size: '0.5',
          top: '10',
          left: '20',
          animation: [{ '@id': 'https://test.com/test.svg' }],
        },
        {
          label: 'Layer 2',
          visible: true,
          size: '1',
          top: '0',
          left: '50',
          animation: { '@id': '/test.svg' },
        },
      ],
      buttons: [
        {
          label: 'Layer 1',
          link: [{ '@id': 'https://test.com/test.svg' }],
        },
        {
          label: 'Layer 2',
          link: { '@id': '/test.svg' },
        },
      ],
    };

    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <AnimatedLayersBlockEdit data={data} />
        </MemoryRouter>
      </Provider>,
    );
    const json = component.toJSON();
    //noinspection JSUnresolvedFunction
    expect(json).toMatchSnapshot();
  });
});
