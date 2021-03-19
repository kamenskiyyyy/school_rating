import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import s from "./style.module.css";

const Middle = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home"/>} >
            Старшая лига
        </PanelHeader>
        <div className={s.div}>
            <iframe width="584" height="311" seamless frameBorder="0" scrolling="no"
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRbETU57bEGSLFk6sp5q04IuuJwotXahurL5H6c9ZAJLgNVVO8c9rXWRNW1labOPgrROtkYKhXvw4AL/pubchart?oid=1236618465&amp;format=interactive"/>
            <div className={s.lds_ellipsis}>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    </Panel>
);

Middle.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Middle;
