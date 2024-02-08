import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        view = ArticleView.SMALL,
        articles,
        isLoading,
        target,
    } = props;

    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return <Text size={TextSize.L} title={t('Articles not found')} />;
    }

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, isScrolling, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={articles[i]?.id}
                    className={cls.card}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height, width, registerChild, isScrolling, scrollTop, onChildScroll,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    <List
                        height={height ?? 700}
                        width={width ? width - 80 : 700}
                        rowCount={articles.length}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRenderer}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>

            )}
        </WindowScroller>
    );
    // without virtualize
    // <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    //     {articles.length > 0
    //         ? articles.map(renderArticle)
    //         : null}
    //     {isLoading && getSkeletons(view)}
    // </div>
});
