import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Text} from '../src/components/Text';
import {PaginationStory} from './Pagination/pagination-story';
import {DividerStory} from './Divider/divider-story';
import {GoogleMapsIframeClientStory} from './clients/GoogleMapsIframeClient-story';
import {CheckboxStory} from './Checkbox/Checkbox-story';
import {TooltipStory} from './Tooltip/custom';
import {RadioButtonStory} from './RadioButton';

// baseComponents
require('./InputWithOptions.story');

// components
require('./AddressInput/index.story');
require('./AddressInput/E2E');
require('./Autocomplete.story');
require('./Badge').story();
require('./Button.story');
require('./Input/Input.story');
require('./IconWithOptions.story');
require('./HBox/index.story');
require('./VBox/index.story');
require('./LabelWithOptions.story');
require('./Slider.story');
require('./Label.story');
require('./StylableBadge.story');
require('./StylableText.story');
require('./TimePicker.story');
require('./ToggleSwitch/index.story');
require('./Tooltip/index.story');
require('./Video.story');

storiesOf('Components', module)
  .add('Text', () => (
    <Text ellipsis>
      Hello World
    </Text>
  ))
  .add('Pagination', () => (
    <PaginationStory/>
  ))
  .add('GoogleMapsIframeClient', () => (
    <GoogleMapsIframeClientStory/>
  ))
  .add('Divider', () => (
    <DividerStory />
  ))
  .add('Checkbox', () => (
    <CheckboxStory />
  ))
  .add('Tooltip Custom', () => (
    <TooltipStory />
  ))
  .add('RadioButton', () => (
    <RadioButtonStory />
  ));
