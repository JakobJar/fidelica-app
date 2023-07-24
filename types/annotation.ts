import {PreviewUser} from "~/types/user";

export default interface Annotation {

    id: string;
    postId: string;
    rating: AnnotationRating;
    note: string;
    reporter?: PreviewUser;

    upvoters: Array<string | PreviewUser>;
    downvoters: Array<string | PreviewUser>;
}

export interface RawAnnotation {

    id: string;
    postId: string;
    rating: string;
    note: string;
    reporterId: string;

    upvoters: string[];
    downvoters: string[];
}

export enum AnnotationRating {

    TRUE = "TRUE",
    FALSE = "FALSE",
    UNVERIFIED = "UNVERIFIED"
}

export interface RatingInfo {

    title: string;
    icon: string;
    description: string;
}

export const getAnnotationRatingInfo = (rating: AnnotationRating): RatingInfo => {
    switch (rating) {
        case AnnotationRating.TRUE:
            return {
                title: "True",
                icon: ioniconsCheckmarkCircle,
                description: "The claim in this post is considered to be true."
            };
        case AnnotationRating.FALSE:
            return {
                title: "False",
                icon: ioniconsCloseCircle,
                description: "This claim in this post is considered to be false."
            };
        case AnnotationRating.UNVERIFIED:
            return {
                title: "Unverified",
                icon: ioniconsHelpCircle,
                description: "This post has not been verified yet."
            };
        default:
            throw new Error("Rating has not been defined as info.");
    }
};

export const UNDEFINED_ANNOTATION: Annotation = {
    id: "0",
    postId: "0",
    rating: AnnotationRating.UNVERIFIED,
    note: "",
    upvoters: [],
    downvoters: []
}