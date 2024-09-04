import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { Separator } from '../separator';
import { Select } from '../select';
import { Text } from '../text';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import clsx from 'clsx';
export type formProps = {
	setPageData: Dispatch<
		SetStateAction<{
			fontColor: OptionType;
			fontSizeOption: OptionType;
			fontFamilyOption: OptionType;
			contentWidthArr: OptionType;
			backgroundColor: OptionType;
		}>
	>;
};
export const ArticleParamsForm = ({ setPageData }: formProps) => {
	const [isOpened, setOpened] = useState(false);
	const [formData, setFormData] = useState({
		fontColor: defaultArticleState.fontColor,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		contentWidthArr: defaultArticleState.contentWidth,
		backgroundColor: defaultArticleState.backgroundColor,
	});
	const openForm = () => setOpened(true);
	const closeForm = () => setOpened(false);
	function handleOpen() {
		if (isOpened) {
			closeForm();
		} else {
			openForm();
		}
	}
	function handleFontColor(event: OptionType) {
		setFormData({ ...formData, fontColor: event });
	}
	function handleFontSize(event: OptionType) {
		setFormData({ ...formData, fontSizeOption: event });
	}
	function handleFontFamily(event: OptionType) {
		setFormData({ ...formData, fontFamilyOption: event });
	}
	function handleBackColor(event: OptionType) {
		setFormData({ ...formData, backgroundColor: event });
	}
	function handleContentWidth(event: OptionType) {
		setFormData({ ...formData, contentWidthArr: event });
	}
	function handleFormData(e: FormEvent) {
		e.preventDefault();
		setPageData({
			fontColor: formData.fontColor,
			fontSizeOption: formData.fontSizeOption,
			fontFamilyOption: formData.fontFamilyOption,
			backgroundColor: formData.backgroundColor,
			contentWidthArr: formData.contentWidthArr,
		});
	}
	function handleClear(e: FormEvent) {
		e.preventDefault();
		setPageData({
			fontColor: defaultArticleState.fontColor,
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontSizeOption: defaultArticleState.fontSizeOption,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidthArr: defaultArticleState.contentWidth,
		});
		setFormData({
			fontColor: defaultArticleState.fontColor,
			fontSizeOption: defaultArticleState.fontSizeOption,
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidthArr: defaultArticleState.contentWidth,
		});
	}
	return (
		<>
			<ArrowButton onClick={handleOpen} isOpened={isOpened} />
			<div
				onClick={() => setOpened(false)}
				className={clsx(styles.overlay, isOpened && styles.overlay_open)}></div>
			<aside
				className={`${
					isOpened
						? styles.container + ' ' + styles.container_open
						: styles.container
				}`}>
				<form
					className={styles.form}
					onReset={handleClear}
					onSubmit={handleFormData}>
					<Text size={31} uppercase weight={800}>
						задайте параметры
					</Text>
					<Select
						selected={formData.fontFamilyOption}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={handleFontFamily}
						placeholder={defaultArticleState.fontFamilyOption.title}
					/>
					<RadioGroup
						selected={formData.fontSizeOption}
						options={fontSizeOptions}
						title='размер шрифта'
						onChange={handleFontSize}
						name='размер шрифта'
					/>
					<Select
						selected={formData.fontColor}
						options={fontColors}
						title='цвет шрифта'
						onChange={handleFontColor}
						placeholder={defaultArticleState.fontColor.title}
					/>
					<Separator />
					<Select
						selected={formData.backgroundColor}
						options={backgroundColors}
						title='цвет фона'
						onChange={handleBackColor}
						placeholder={defaultArticleState.backgroundColor.title}
					/>
					<Select
						selected={formData.contentWidthArr}
						options={contentWidthArr}
						title='ширина контента'
						onChange={handleContentWidth}
						placeholder={defaultArticleState.contentWidth.title}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
