import React from 'react';
import AnimatedLayersDataForm from '../DataForm';
import AnimatedLayersSchema from '../Schema';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
//noinspection JSUnresolvedFunction, NpmUsedModulesInstalled
import config from '@plone/volto/registry';
import { Provider } from 'react-intl-redux';

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

describe('AnimatedLayersDataForm', () => {
  it('renders AnimatedLayersDataForm component', () => {
    const store = mockStore({
      intl: {
        locale: 'en',
        messages: {},
      },
    });

    const testSchema = AnimatedLayersSchema({});

    const data = {
      '@type': 'animatedlayers',
      layers: [],
    };
    const component = renderer.create(
      <Provider store={store}>
        <AnimatedLayersDataForm key={'1234'} schema={testSchema} data={data} block={'1234'} onChangeBlock={null} />
      </Provider>,
    );
    const json = component.toJSON();
    //noinspection JSUnresolvedFunction
    expect(json).toMatchSnapshot();
  });
});
