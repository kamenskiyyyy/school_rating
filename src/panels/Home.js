import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import s from './style.module.css';

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Классный рейтинг</PanelHeader>
		<Group header={<Header mode="secondary">Выберите категорию</Header>}>
			<Div>
				<Button className={s.button} stretched size="l" mode="secondary" onClick={go} data-to="junior">
					Младшая лига
				</Button>
				<Button className={s.button} stretched size="l" mode="secondary" onClick={go} data-to="middle">
					Старшая лига
				</Button>
				<Button className={s.button} stretched size="l" mode="secondary" onClick={go} data-to="premier">
					Премьер лига
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
