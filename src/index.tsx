import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isOpened, setOpened] = useState(false);
	const [font, setFont] = useState({
		fontColor: defaultArticleState.fontColor,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontFamilyOption: defaultArticleState.fontFamilyOption,
	});
	const [page, setPage] = useState({
		contentWidthArr: defaultArticleState.contentWidth,
		backgroundColor: defaultArticleState.backgroundColor,
	});
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
		setFont({ ...font, fontColor: event });
	}
	function handleFontSize(event: OptionType) {
		setFont({ ...font, fontSizeOption: event });
	}
	function handleFontFamily(event: OptionType) {
		setFont({ ...font, fontFamilyOption: event });
	}
	function handleBackColor(event: OptionType) {
		setPage({ ...page, backgroundColor: event });
	}
	function handleContentWidth(event: OptionType) {
		setPage({ ...page, contentWidthArr: event });
	}
	function handleFormData(e: any) {
		e.preventDefault();
		setFormData({
			fontColor: font.fontColor,
			fontSizeOption: font.fontSizeOption,
			fontFamilyOption: font.fontFamilyOption,
			backgroundColor: page.backgroundColor,
			contentWidthArr: page.contentWidthArr,
		});
	}
	function handleClear(e: any) {
		e.preventDefault();
		setFormData({
			fontColor: defaultArticleState.fontColor,
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontSizeOption: defaultArticleState.fontSizeOption,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidthArr: defaultArticleState.contentWidth,
		});
		setFont({
			fontColor: defaultArticleState.fontColor,
			fontSizeOption: defaultArticleState.fontSizeOption,
			fontFamilyOption: defaultArticleState.fontFamilyOption,
		});
		setPage({
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidthArr: defaultArticleState.contentWidth,
		});
	}
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': formData.fontFamilyOption.value,
					'--font-size': formData.fontSizeOption.value,
					'--font-color': formData.fontColor.value,
					'--container-width': formData.contentWidthArr.value,
					'--bg-color': formData.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				fontOptions={font}
				pageOptions={page}
				handleBackColor={handleBackColor}
				handleClear={handleClear}
				handleContentWidth={handleContentWidth}
				handleFontColor={handleFontColor}
				handleFontFamily={handleFontFamily}
				handleFontSize={handleFontSize}
				handleOpen={handleOpen}
				isOpened={isOpened}
				handleFormData={handleFormData}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
