import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

const Premier = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home"/>} >
            Премьер лига
        </PanelHeader>
        <iframe width="584" height="311" seamless frameBorder="0" scrolling="no"
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRbETU57bEGSLFk6sp5q04IuuJwotXahurL5H6c9ZAJLgNVVO8c9rXWRNW1labOPgrROtkYKhXvw4AL/pubchart?oid=502916854&amp;format=interactive"/>
    </Panel>
);

Premier.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Premier;
