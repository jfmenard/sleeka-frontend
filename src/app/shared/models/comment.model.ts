
export class CommentModel {

    id!: number;

    content!: string;

    post_id!: number;

    parent_id!: number;

    upvotes!: number;

    downvotes!: number;

    user_id!: number;

    created_at!: Date;

}
