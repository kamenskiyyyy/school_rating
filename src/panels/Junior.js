import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.css';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import {Spinner} from "@vkontakte/vkui";

const Junior = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>} >
			Младшая лига
		</PanelHeader>
		<div className={s.div}>
			<iframe style={{zIndex: '10'}} width="584" height="311" seamless frameBorder="0" scrolling="no"
					src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRbETU57bEGSLFk6sp5q04IuuJwotXahurL5H6c9ZAJLgNVVO8c9rXWRNW1labOPgrROtkYKhXvw4AL/pubchart?oid=1836155378&amp;format=interactive"/>
			<Spinner size="large" style={{ margin: '20% 0' }} />

		</div>

	</Panel>
);

Junior.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Junior;
