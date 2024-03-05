import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment/types/comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
