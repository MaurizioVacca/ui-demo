import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import { Button, Card, Modal } from 'shared';
import { useModal } from 'shared/modal';
import Highlight from 'sections/highlights/Highlight';

const articleSample = {
    id: 2,
    icon: 'pig',
    caption: 'Sapeva pure ca oggi je e te stevema inda \'sta machina',
    title: 'Quann\' tu me purtast\' a spara\' chillu cristian\' p\'a prima vota.',
    description: '',
    hasDetails: true
};

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('basic', () => <Button onClick={action('clicked')}>Hello Button</Button>);

storiesOf('Card', module)
    .add('basic', () => <Card>This is a basic card</Card>);

storiesOf('Highlight', module)
    .add('basic', () => (
        <Highlight
            content={articleSample}
            position="01"
            onHighlightClick={action('highlight clicked!')}
        />
    ));

const StoryModalCtrl = () => {
    const [isOpen, toggle] = useModal();

    return (
        <div>
            <Button onClick={toggle}>Open Modal!</Button>
            <Modal status={isOpen} onClickOutside={toggle} />
        </div>
    );
};

storiesOf('Modal', module)
    .add('basic', () => <StoryModalCtrl />);
