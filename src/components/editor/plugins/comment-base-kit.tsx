import { BaseCommentPlugin } from "@platejs/comment";

import { CommentLeafStatic } from "@/components/custom/comment-node-static";

export const BaseCommentKit = [
    BaseCommentPlugin.withComponent(CommentLeafStatic),
];
