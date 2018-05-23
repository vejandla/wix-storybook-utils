import * as React from 'react';
import MetaDataTools, {MetaData} from '../src/meta-data-tools';
import {MetaDataToolsDefinition} from '../src/meta-data-tools/types';

interface TestProps {
  text: string;
}

class TestComp extends React.Component<TestProps, {}> {
  render () {
    return <h1>Hey {this.props.text} person</h1>;
  }
}

const testSim: {props: TestProps} = {
  props: {
    text: 'person'
  }
};

describe('MetaData Tools', () => {
  beforeEach(() => {
    MetaDataTools.clean();
  });

  describe('The Describe method', () => {
    it('adds a new component\'s metadata to the registry, and returns its meta data', () => {
      const myCompMetaData = MetaDataTools.describe(TestComp);
      expect(myCompMetaData).toBeInstanceOf(MetaData);
    });

    it('returns metadata with an empty simulation', () => {
      const myCompMetaData = MetaDataTools.describe(TestComp);
      expect(myCompMetaData.simulations[0]).toEqual({});
    });
  });

  describe('The addSim method', () => {
    it('adds a new simulation to the component metadata', () => {
      const myCompMetaData = MetaDataTools.describe(TestComp);
      myCompMetaData.addSim(testSim);
      expect(myCompMetaData.simulations[1]).toEqual(testSim);
    });
  });

  it('returns an already existing metadata', () => {
    const myCompMetaData = MetaDataTools.describe(TestComp);
    myCompMetaData.addSim(testSim);
    expect(myCompMetaData.simulations[1]).toEqual(testSim);

    const mySecondCompMetaData = MetaDataTools.describe(TestComp);
    expect(mySecondCompMetaData.simulations[1]).toEqual(testSim);
  });
});