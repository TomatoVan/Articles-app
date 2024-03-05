import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

interface ArticleEditPageProps {
  className?: string;
}
const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? 'Edit article' : 'Create new article'}
        </Page>
    );
});

export default ArticleEditPage;
