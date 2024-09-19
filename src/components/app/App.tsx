import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from 'src/constants/articleProps';

import styles from './index.module.scss';

export const App = () => {
	const [pageData, setPageData] = useState({
		fontColor: defaultArticleState.fontColor,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		contentWidthArr: defaultArticleState.contentWidth,
		backgroundColor: defaultArticleState.backgroundColor,
	});
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageData.fontFamilyOption.value,
					'--font-size': pageData.fontSizeOption.value,
					'--font-color': pageData.fontColor.value,
					'--container-width': pageData.contentWidthArr.value,
					'--bg-color': pageData.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setPageData={setPageData} />
			<Article />
		</div>
	);
};
