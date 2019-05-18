import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button, Card } from 'shared';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('basic', () => <Button onClick={action('clicked')}>Hello Button</Button>);

storiesOf('Card', module)
    .add('basic', () => <Card>This is a basic card</Card>);
