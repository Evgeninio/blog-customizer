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
export type formProps = {
	fontOptions: {
		fontColor: OptionType;
		fontSizeOption: OptionType;
		fontFamilyOption: OptionType;
	};
	pageOptions: {
		contentWidthArr: OptionType;
		backgroundColor: OptionType;
	};
	handleBackColor: (e: OptionType) => void;
	handleClear: (e?: any) => void;
	handleContentWidth: (e: OptionType) => void;
	handleFontColor: (e: OptionType) => void;
	handleFontFamily: (e: OptionType) => void;
	handleFontSize: (e: OptionType) => void;
	handleOpen: (isOpened: boolean) => void;
	isOpened: boolean;
	handleFormData: (e?: any) => void;
};
export const ArticleParamsForm = ({
	fontOptions,
	pageOptions,
	handleBackColor,
	handleClear,
	handleContentWidth,
	handleFontColor,
	handleFontFamily,
	handleFontSize,
	handleOpen,
	isOpened,
	handleFormData,
}: formProps) => {
	return (
		<>
			<ArrowButton onClick={handleOpen} isOpened={isOpened} />
			<aside
				className={`${
					isOpened
						? styles.container + ' ' + styles.container_open
						: styles.container
				}`}>
				<form className={styles.form}>
					<Text size={31} uppercase weight={800}>
						задайте параметры
					</Text>
					<Select
						selected={fontOptions.fontFamilyOption}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={handleFontFamily}
						placeholder={defaultArticleState.fontFamilyOption.title}
					/>
					<RadioGroup
						selected={fontOptions.fontSizeOption}
						options={fontSizeOptions}
						title='размер шрифта'
						onChange={handleFontSize}
						name='размер шрифта'
					/>
					<Select
						selected={fontOptions.fontColor}
						options={fontColors}
						title='цвет шрифта'
						onChange={handleFontColor}
						placeholder={defaultArticleState.fontColor.title}
					/>
					<Separator />
					<Select
						selected={pageOptions.backgroundColor}
						options={backgroundColors}
						title='цвет фона'
						onChange={handleBackColor}
						placeholder={defaultArticleState.backgroundColor.title}
					/>
					<Select
						selected={pageOptions.contentWidthArr}
						options={contentWidthArr}
						title='ширина контента'
						onChange={handleContentWidth}
						placeholder={defaultArticleState.contentWidth.title}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleClear} />
						<Button title='Применить' type='submit' onClick={handleFormData} />
					</div>
				</form>
			</aside>
		</>
	);
};
